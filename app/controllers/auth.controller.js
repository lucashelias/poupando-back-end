const db = require("../models");
const config = require("../config/auth.config");
const User = db.usuario;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email,
    usuario: req.body.usuario,
    senha: bcrypt.hashSync(req.body.senha, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "Usuário criado com sucesso!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "Usuário criado com sucesso!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {

  if (req.body.usuario == null) {
    return res.status(402).send({ message: "Obrigatório informar o usuário." });
  }

  User.findOne({
    where: {
      usuario: req.body.usuario
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.senha,
        user.senha
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Senha inválida!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          usuario: user.usuario,
          sobrenome: user.sobrenome,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};