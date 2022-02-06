const {DataTypes} = require("sequelize");
const db = require("../database/connection");

const Pelicula = db.define("PeliSerie", {
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Pelicula;

Pelicula.belongsToMany(require("./personaje"), {
  through: "Personaje_Pelicula",
  foreignKey: "peliculaId",
});

Pelicula.belongsTo(require("./contenidoTipo"), {
  foreignKey: "contenidoTipoId",
  targetKey: "id",
});
Pelicula.belongsTo(require("./genero"), {
  foreignKey: "generoId",
  targetKey: "id",
});
