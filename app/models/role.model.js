module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define("role", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
     
    },
    
    {freezeTableName: true});

    role.associate = function(models){
      role.belongsToMany(models.usuario, { through: "usuario_roles", foreignKey: "roleId", otherKey: "usuarioId"}
    )};
  
    return role;
  };