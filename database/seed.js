const sequelize = require("./connection");

const Genero = require("../models/genero");
const Pelicula = require("../models/pelicula");
const ContenidoTipo = require("../models/contenidoTipo");
const Personaje = require("../models/personaje");
//generos
const generos = [
  {img: "http://genero1.com", nombre: "Animada"},
  {img: "http://genero2.com", nombre: "Accion"},
  {img: "http://genero3.com", nombre: "Aventura"},
  {img: "http://genero4.com", nombre: "Comedia"},
  {img: "http://genero5.com", nombre: "Musical"},
];

// peliculas
const peliculas = [
  {
    img: "http://pelicula1.com",
    titulo: "Avengers 1",
    fechaCreacion: "20201016",
  },
  {
    img: "http://pelicula2.com",
    titulo: "Spiderman 1",
    fechaCreacion: "20201016",
  },
  {
    img: "http://pelicula3.com",
    titulo: "Capitan ameria y el soldado del invierno",
    fechaCreacion: "20201016",
  },
  {
    img: "http://pelicula4.com",
    titulo: "Doctor Strange",
    fechaCreacion: "20201016",
  },
];

const contenidoTipo = [{descripcion: "Pelicula"}, {descripcion: "Serie"}];

const personajes = [
  {
    img: "http://personaje1.com",
    edad: 20,
    peso: 50,
    historia: "historia1",
    nombre: "Spiderman",
  },
  {
    img: "http://personaje2.com",
    edad: 35,
    peso: 65,
    historia: "historia2",
    nombre: "IronMan",
  },
  {
    img: "http://personaje3.com",
    edad: 32,
    peso: 89,
    historia: "historia3",
    nombre: "Soldado del invierno",
  },
  {
    img: "http://personaje4.com",
    edad: 47,
    peso: 87,
    historia: "historia4",
    nombre: "Falcon",
  },
  {
    img: "http://personaje5.com",
    edad: 130,
    peso: 99,
    historia: "historia5",
    nombre: "Capitan America",
  },
];

sequelize
  .sync({force: true})
  .then(() => {
    console.log("Generando Seeds");
  })
  .then(() => {
    //rellenar personajes
    personajes.forEach((personaje) => Personaje.create(personaje));
  });

module.exports = {generos, peliculas, personajes, contenidoTipo};
