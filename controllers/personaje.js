const {request, response} = require("express");
const ContenidoTipo = require("../models/contenidoTipo");
const Genero = require("../models/genero");
const Pelicula = require("../models/pelicula");
const Personaje = require("../models/personaje");
const {filtrarPersonaje} = require("./filtros");

const getAllPersonajes = async (req = request, res = response) => {
  const personajes = await filtrarPersonaje(req.query.filter);

  return res.json({
    personajes,
  });
};

const getPersonajeById = async (req = request, res = response) => {
  const {id} = req.params;
  const personaje = await Personaje.findByPk(id, {
    attributes: ["img", "nombre", "edad", "peso", "historia"],
    where: {
      estado: true,
    },
    include: [
      {
        model: Pelicula,
        attributes: ["img", "titulo", "fechaCreacion", "calificacion"],
        include: [
          {model: Genero, attributes: ["img", "nombre"]},
          {model: ContenidoTipo, attributes: ["descripcion"]},
        ],
      },
    ],
  });

  return res.json({
    personaje,
  });
};
const postPersonajes = async (req = request, res = response) => {
  const {body} = req;
  try {
    const personaje = new Personaje(body);
    await personaje.save();
    return res.json({msg: "Personaje creado con exito!!", personaje});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const putPersonajes = async (req = request, res = response) => {
  const {body} = req;
  const {id} = req.params;

  try {
    const personaje = await Personaje.findByPk(id);

    await personaje.update(body);
    return res.json({
      msg: "Actualizacion de personaje con exito",
      personaje,
    });
  } catch (error) {}
  console.log(error);
  return res.status(500).json({
    msg: "Hable con el administrador",
  });
};

const deletePersonajes = async (req = request, res = response) => {
  const {id} = req.params;

  try {
    const personaje = await Personaje.findByPk(id, {
      where: {
        estado: true,
      },
    });

    await personaje.update({estado: false});

    return res.json({
      msg: "Se elimino el Personaje con exito",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const personajeXpeliculas = async (req, res) => {
  const {idMovie, idCharacters} = req.params;

  try {
    const pelicula = await Pelicula.findByPk(idMovie);
    const personaje = await Personaje.findByPk(idCharacters);

    const PXP = await pelicula.addPersonaje(personaje);
    return res.json({
      msg: "Se agrego el personaje a la pelicula",
      PXP,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
module.exports = {
  getAllPersonajes,
  postPersonajes,
  putPersonajes,
  deletePersonajes,
  getPersonajeById,
  personajeXpeliculas,
};
