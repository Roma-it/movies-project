const db = require("../database/models");

const mainController = {
  findMoviesByActor: async (req, res) => {
    const result = await db.Movie.findAll({
      include: [
        {
          association: "personas",
          where: { id: req.params.id },
          attributes: ["name", "last_name", "age"],
        },
      ],
      attributes: ["title", "year"],
    });
    res.json(result);
  },
  findMovie: async (req, res) => {
    const result = await db.Movie.findOne({
      where: { id: req.params.id },
      include: [
        {
          association: "personas",
          attributes: ["name", "last_name"],
          include: [
            {
              association: "roles",
              attributes: ["name"],
            },
          ],
        },
      ],
    });
    res.json(result);
  },
};
module.exports = mainController;
