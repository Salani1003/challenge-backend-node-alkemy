const Pelicula = require("../models/pelicula");
const Personaje = require("../models/personaje");
const {Op} = require("sequelize");
const Genero = require("../models/genero");
const ContenidoTipo = require("../models/contenidoTipo");

const filtrarPersonaje = async ({name, age, weigth, movies}) => {
  let where = {};
  if (name) {
    where.nombre = {[Op.like]: `%${name}%`};
  }
  if (age) {
    where.edad = {[Op.eq]: age};
  }
  if (weigth) {
    where.peso = {[Op.eq]: weigth};
  }

  return await Personaje.findAll({
    where,
    estado: true,
    attributes: ["img", "nombre"],
  });
};

const filtrarPelicula = async ({name, genre, order}) => {
  let where = {};
  if (name) {
    where.titulo = {[Op.like]: `%${name}%`};
  }
  if (genre) {
    where.generoId = {[Op.eq]: genre};
  }
  return await Pelicula.findAll({
    where,
    estado: true,
    attributes: ["img", "titulo", "fechaCreacion"],
    order: [["fechaCreacion", `${order}`]],
  });
};

module.exports = {filtrarPersonaje, filtrarPelicula};
