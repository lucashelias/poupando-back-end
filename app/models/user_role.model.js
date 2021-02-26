module.exports = (sequelize, Sequelize) => {
    const Usuario_Roles = sequelize.define("usuario_role", {
        usuarioId: {
            type: Sequelize.INTEGER,
        },
        roleId: {
            type: Sequelize.INTEGER,
        },
        
    });

        return Usuario_Roles;
  };