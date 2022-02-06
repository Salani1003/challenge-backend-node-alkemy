const {DataTypes} = require("sequelize");
const db = require("../database/connection");

const Genero = db.define("Genero", {
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Genero;

Genero.hasMany(require("./pelicula"), {
  foreignKey: "generoId",
});
