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
           usuario_role.belongsTo(models.usuario, {as: 'usuario', through: "usuario", foreignKey: 'usuarioId', allowNull: false});
           usuario_role.belongsTo(models.role, {as: 'role', through: "role", foreignKey: 'roleId', allowNull: false});
        }
        return usuario_role;
        
     };
//db.usuario.belongsToMany(db.role, {
//   through: "usuario_roles",
//   foreignKey: "usuarioId",
//   otherKey: "roleId",
// });