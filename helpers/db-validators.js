const Usuario = require("../models/usuario");
const Personaje = require("../models/personaje");
const res = require("express/lib/response");
const Pelicula = require("../models/pelicula");
const Genero = require("../models/genero");
const ContenidoTipo = require("../models/contenidoTipo");

const esEmailExistente = async (correo = "") => {
  const existeEmail = await Usuario.findOne({
    where: {
      email: correo,
    },
  });
  if (existeEmail) {
    throw new Error(`El correo ${correo} ya esta registrado`);
  }
};

const existePjPorID = async (id) => {
  const existePJ = await Personaje.findOne({where: {id, estado: true}});
  if (!existePJ) {
    throw new Error(`El personaje con ID:${id} no existe`);
  }
};

const existePeliculaPorID = async (id) => {
  const existePelicula = await Pelicula.findOne({where: {id, estado: true}});
  if (!existePelicula) {
    throw new Error(`La pelicula con ID:${id} no existe`);
  }
};

const validarCalificacion = async (calificacion) => {
  if (calificacion < 1 || calificacion > 5) {
    throw new Error(`La calificacion debe estar comprendida entre 1 y 5`);
  }
};
const esPeliculaExistente = async (titulo) => {
  const pelicula = await Pelicula.findOne({where: {titulo, estado: true}});
  if (pelicula) {
    throw new Error(`${titulo} ya es una pelicula existente`);
  }
};
const esPersonajeExistente = async (nombre) => {
  const personaje = await Personaje.findOne({where: {nombre, estado: true}});
  if (personaje) {
    throw new Error(`${nombre} ya es un personaje existente`);
  }
};

const existeGenero = async (generoId) => {
  const genero = await Genero.findByPk(generoId);
  if (!genero) {
    throw new Error(`No existe el genero definido para esta Serie / Pelicula`);
  }
};
const existeContenidoTipo = async (contenidoTipoId) => {
  const contenidoTipo = await ContenidoTipo.findByPk(contenidoTipoId);
  if (!contenidoTipo) {
    throw new Error(
      `No existe el tipo de contenido  definido para esta Serie / Pelicula`
    );
  }
};

module.exports = {
  esEmailExistente,
  existePjPorID,
  existePeliculaPorID,
  validarCalificacion,
  esPersonajeExistente,
  esPeliculaExistente,
  existeGenero,
  existeContenidoTipo,
};
