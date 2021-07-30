module.exports = (sequelize, dataTypes) => {
  const alias = "Persona";
  const cols = {
    id: {
      type: dataTypes.INTEGER(11),
      allownull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: dataTypes.STRING(255), allownull: false },
    last_name: { type: dataTypes.STRING(255), allownull: false },
    age: { type: dataTypes.INTEGER(11), allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "personas",
  };
  const Persona = sequelize.define(alias, cols, config);

  Persona.associate = function (model) {
    Persona.belongsToMany(model.Role, {
      as: "roles",
      through: "personas_movies",
      foreignKey: "persona_id",
      otherKey: "role_id",
      timestamps: false,
    });
    Persona.belongsToMany(model.Movie, {
      as: "movies",
      through: "personas_movies",
      foreignKey: "persona_id",
      otherKey: "movie_id",
      timestamps: false,
    });
  };
  return Persona;
};
