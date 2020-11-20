const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Inserção - A informação não pode ser nula!" 
      });
      return;
    }
  
    // Create a Usuario
    const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Tutorial in the database
    Usuario.create(usuario)
      .then(data => {
        res.send(data); 
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro na criação do usuário"
        });
      });
  };

// Retrieve all usuario from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
    Usuario.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao buscar as informações do usuário"
        });
      });
  };


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao recuperar as informações do id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Usuario.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Usuário atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar o usuário id=${id}. Verifique o log do erro!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar o usuário com o id=" + id
        });
      });
  };;

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Usuario.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Usuario deletado com sucesso!"
          });
        } else {
          res.send({
            message: `Não foi possível deletar o usuario com o id=${id}. Por favor valide o log!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `O usuário com o id=${id}. não pode ser deletado!`
        });
      });
  };

// Delete all usuario from the database.
exports.deleteAll = (req, res) => {
  
    Usuario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Os usuários selecionados foram deletados com sucesso!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu enquanto efetuava a remoção dos usuários."
        });
      });
  };
// Find all published usuario
exports.findAllPublished = (req, res) => {
    
    Usuario.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao buscar todos os usuários."
        });
      });
  };