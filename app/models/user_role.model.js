module.exports = (sequelize, Sequelize) => {
    const Usuario_Roles = sequelize.define("usuario_role", {
        // id: {
        //     type: Sequelize.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        usuarioId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        roleId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        
    });

        return Usuario_Roles;
  };