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

    usuario.associate = function(models){
        usuario.belongsToMany(models.role, {through: "usuario_roles", foreignKey: "usuarioId", otherKey: "roleId"}
      )};
    
        return usuario;
  };