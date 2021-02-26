const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.user_role = require("./user_role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.usuario, {
  through: "usuario_roles",
  foreignKey: "roleId",
  otherKey: "usuarioId"
});

db.usuario.belongsToMany(db.role, {
  through: "usuario_roles",
  foreignKey: "usuarioId",
  otherKey: "roleId"
});

db.ROLES = ["usuario", "admin", "moderador"];

module.exports = db;