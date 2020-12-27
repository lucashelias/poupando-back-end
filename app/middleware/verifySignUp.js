const db = require("../models");
const ROLES = db.ROLES;
const User = db.usuario;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Usuario
  User.findOne({
    where: {
      usuario: req.body.usuario
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Erro! Usuario já existente!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Erro! Email já existente!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Falha! Role não existe = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;