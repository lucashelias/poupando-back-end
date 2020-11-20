module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING
        },
        sobrenome: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        usuario: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        dataCadastro: {
            type: Sequelize.DATE
        },
        dataAlteracao: {
            type: Sequelize.DATE
        }
    });

        return Usuario;
  };