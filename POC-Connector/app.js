const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const router = require("./routes");

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(process.env.PORT || 4000, () =>
  console.log(
    `Servidor corriendo en el puerto ${process.env.PORT} o en el puerto 4000`
  )
);

app.use(router);
