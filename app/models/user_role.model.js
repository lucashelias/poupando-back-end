const usuario = require("../models/usuario.model");
const role = require("../models/role.model");
var Sequelize = require('sequelize');
var sequelize = Sequelize

//  module.exports = (sequelize, Sequelize) => {
    var Usuario_Roles = sequelize.define("usuario_role", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuarioId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        roleId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
        {freezeTableName: true});

    //      return Usuario_Roles;
    //  };

    Usuario_Roles.belongsTo(models.usuario, {as: 'usuario', foreignKey: 'usuarioId', allowNull: false});
    Usuario_Roles.belongsTo(models.role, {as: 'role', foreignKey: 'roleId', allowNull: false});
    module.exports = Usuario_Roles;