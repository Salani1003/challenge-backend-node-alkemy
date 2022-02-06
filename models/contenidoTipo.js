const {DataTypes} = require("sequelize");
const db = require("../database/connection");

const TipoContenido = db.define("ContenidoTipo", {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = TipoContenido;

TipoContenido.hasMany(require("./pelicula"), {
  foreignKey: "contenidoTipoId",
});
