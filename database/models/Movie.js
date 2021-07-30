module.exports = (sequelize, dataTypes) => {
  const alias = "Movie";
  const cols = {
    id: {
      type: dataTypes.INTEGER(11),
      allownull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: dataTypes.STRING(255), allownull: false },
    year: { type: dataTypes.INTEGER(11), allownull: false },
  };
  const config = {
    timestamps: false,
    tableName: "movies",
  };
  const Movie = sequelize.define(alias, cols, config);

  Movie.associate = function (model) {
    Movie.belongsToMany(model.Persona, {
      as: "personas",
      through: "personas_movies",
      foreignKey: "movie_id",
      otherKey: "persona_id",
      timestamps: false,
    });
  };
  return Movie;
};
