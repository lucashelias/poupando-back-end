const { usuario_role } = require("../models");
const db = require("../models");
const Usuario_Roles = db.user_role;
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



//Cria vinculação usuario e permissão (role)
exports.create = (req, res) => {
  
    const usuario_role = {
      usuarioId: req.body.usuarioId,
      roleId: req.body.roleId,
    };
  
    Usuario_Roles.create(usuario_role)
      .then(data => {
        res.send(data); 
      })
      .catch(err => {
        res.send(err); 
      
      });
  };

// exports.findAll = (req, res) => {
//     const nome = req.query.nome;
//     var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
//     Usuario.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Ocorreu algum erro ao buscar as informações do usuário"
//         });
//       });
//   };


// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Usuario.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Erro ao recuperar as informações do id=" + id
//       });
//     });
// };

// exports.update = (req, res) => {
//     const id = req.params.id;
  
//     Usuario.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Usuário atualizado com sucesso."
//           });
//         } else {
//           res.send({
//             message: `Não foi possível atualizar o usuário id=${id}. Verifique o log do erro!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Erro ao atualizar o usuário com o id=" + id
//         });
//       });
//   };;

// exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     Usuario.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Usuario deletado com sucesso!"
//           });
//         } else {
//           res.send({
//             message: `Não foi possível deletar o usuario com o id=${id}. Por favor valide o log!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: `O usuário com o id=${id}. não pode ser deletado!`
//         });
//       });
//   };

// exports.deleteAll = (req, res) => {
  
//     Usuario.destroy({
//       where: {},
//       truncate: false
//     })
//       .then(nums => {
//         res.send({ message: `${nums} Os usuários selecionados foram deletados com sucesso!` });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Algum erro ocorreu enquanto efetuava a remoção dos usuários."
//         });
//       });
//   };

// exports.validaUsuarioSenha = (req, res) => {
//   const usuario = req.body.usuario;
//   const senha = req.body.senha;
    
//     Usuario.findAll({ where: { usuario: usuario, senha: senha } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Ocorreu algum erro ao buscar todos os usuários."
//         });
//       });
//   };