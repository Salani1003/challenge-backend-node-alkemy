const {DataTypes} = require("sequelize");
const db = require("../database/connection");

const Personaje = db.define("Personaje", {
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  historia: {
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

module.exports = Personaje;

Personaje.belongsToMany(require("./pelicula"), {
  through: "Personaje_Pelicula",
  foreignKey: "personajeId",
});
