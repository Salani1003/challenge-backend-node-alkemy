const {Sequelize} = require("sequelize");

const db = new Sequelize("mundoDisney", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
