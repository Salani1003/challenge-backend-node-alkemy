const cors = require("cors");
const express = require("express");
const db = require("../database/connection");

class Server {
  constructor() {
    this.registro = "/auth/register";
    this.authLogin = "/auth/login";
    this.personajePath = "/characters";
    this.peliSeriePath = "/movies";
    this.generoPath = "/genero";
    this.app = express();
    this.dbConnection();
    this.middlewares();
    this.routes();
    this.port = process.env.PORT;
  }

  async dbConnection() {
    try {
      await db.authenticate();
      await db.sync({alter: true, force: true});
      console.log("Database Online");
    } catch (error) {
      throw new Error(error);
    }
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.personajePath, require("../routes/personaje"));
    this.app.use(this.peliSeriePath, require("../routes/peliculaSerie"));
    //this.app.use(this.generoPath, require("../routes/genero"));
    this.app.use(this.registro, require("../routes/registro"));
    this.app.use(this.authLogin, require("../routes/login"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App corriendo en el puerto: ", this.port);
    });
  }
}

module.exports = Server;
