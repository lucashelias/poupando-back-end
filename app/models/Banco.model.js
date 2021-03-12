module.exports = (sequelize, Sequelize) => {
    const banco = sequelize.define("banco", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        site: {
            type: Sequelize.STRING
        },
        url_logo: {
            type: Sequelize.STRING
        },
        ativo: {
            type: Sequelize.STRING,
            dafault: "S" 
        },

    },

    {freezeTableName: true});
    
     return banco;
  };