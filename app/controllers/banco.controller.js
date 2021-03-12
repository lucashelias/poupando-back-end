const { banco } = require("../models");
const db = require("../models");
const Banco = db.banco;
const Op = db.Sequelize.Op;

var bcrypt = require("bcryptjs");


// ==================== INICIO Seção da validação da autenticação ==============
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

// ==================== FIM Seção da validação da autenticação ==============



// Create and Save a new Usuario
exports.create = (req, res) => {
    
    // Create a Usuario
    const banco = {
      codigo: req.body.codigo,
      nome: req.body.nome,
      site: req.body.site,
      ativo: req.body.ativo
    };
  
    Banco.create(banco)
      .then(data => {
        res.send(data); 
      })
      .catch(error => {
        res.send(error)
      });
  };

exports.findAll = (req, res) => {
  
    Banco.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error)
      });
  };

exports.findOne = (req, res) => {
  const id = req.params.id;

  Banco.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error)
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    
  const id = req.params.id;
  
    Banco.update(id) 
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error)
    })
  };

