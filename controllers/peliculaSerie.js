const {request, response} = require("express");
const Pelicula = require("../models/pelicula");
const Genero = require("../models/genero");
const ContenidoTipo = require("../models/contenidoTipo");
const Personaje = require("../models/personaje");
const {filtrarPelicula} = require("./filtros");

const getAllPelicula = async (req = request, res = response) => {
  const peliculas = await filtrarPelicula(req.query.filter);
  return res.json({
    peliculas,
  });
};

const getPeliculaById = async (req = request, res = response) => {
  const {id} = req.params;
  const pelicula = await Pelicula.findByPk(id, {
    attributes: ["img", "titulo", "fechaCreacion", "calificacion"],
    where: {estado: true},
    include: [
      {model: Genero, attributes: ["nombre", "img"]},
      {model: ContenidoTipo, attributes: ["descripcion"]},
      {model: Personaje, attributes: ["nombre", "edad", "peso", "historia"]},
    ],
  });
  return res.json({
    pelicula,
  });
};

const postPelicula = async (req = request, res = response) => {
  const {body} = req;

  try {
    const pelicula = new Pelicula(body);
    await pelicula.save();
    return res.json({msg: "Pelicula creada con exito", pelicula});
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el DBA",
    });
  }
};

const putPelicula = async (req = request, res = response) => {
  const {body} = req;
  const {id} = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);
    await pelicula.update(body);
    return res.json({
      msg: "Pelicula actualizada con exito",
      pelicula,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el DBA",
    });
  }
};

const deletePelicula = async (req = request, res = response) => {
  const {id} = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id, {
      where: {estado: true},
    });
    await pelicula.update({estado: false});
    return res.json({
      msg: "Se elimino la pelicula con exito",
      pelicula,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el DBA",
    });
  }
};
const peliculaXpersonaje = async (req, res) => {
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
  getAllPelicula,
  getPeliculaById,
  postPelicula,
  deletePelicula,
  putPelicula,
  peliculaXpersonaje,
};
