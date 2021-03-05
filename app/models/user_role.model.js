// const db = {};
// const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

  module.exports = (sequelize, Sequelize) => {
    const usuario_role = sequelize.define("usuario_role", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuarioId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         // User hasMany WorkingDays n:n
                model: 'usuario',
                key: 'id'
              }
        },
        roleId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         // User hasMany WorkingDays n:n
                model: 'role',
                key: 'id'
              }
        },
    },
        {freezeTableName: true});
        usuario_role.associate = function(models) {
           usuario_role.belongsTo(models.usuario, {as: 'usuario', foreignKey: 'usuarioId', allowNull: false});
           usuario_role.belongsTo(models.role, {as: 'role', foreignKey: 'roleId', allowNull: false});
        }
        return usuario_role;
        
     };
