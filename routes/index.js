var express = require("express");
var router = express.Router();
const mainController = require("../apiControllers/mainController");

router.get("/movies/:id", mainController.findMovie);
router.get("/peliculasPorActor/:id", mainController.findMoviesByActor);

module.exports = router;
