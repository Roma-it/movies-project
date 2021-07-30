module.exports = (sequelize, dataTypes) => {
  const alias = "Role";
  const cols = {
    id: {
      type: dataTypes.INTEGER(11),
      allownull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: dataTypes.STRING(255), allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "roles",
  };
  const Role = sequelize.define(alias, cols, config);

  Role.associate = function (model) {
    Role.belongsToMany(model.Persona, {
      as: "roles",
      through: "personas_movies",
      foreignKey: "role_id",
      otherKey: "persona_id",
      timestamps: false,
    });
  };
  return Role;
};
