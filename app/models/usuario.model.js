module.exports = (sequelize, Sequelize) => {
    const usuario = sequelize.define("usuario", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
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
        status: {
            type: Sequelize.STRING
        },
        
    },

    {freezeTableName: true});
    
        return usuario;
  };