"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const peliculas = [
      {
        img: "http://pelicula1.com",
        titulo: "Avengers 1",
        fechaCreacion: "20201016",
        calificacion: 4,
        generoId: 1,
        contenidoTipoId: 1,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://pelicula2.com",
        titulo: "Spiderman 1",
        fechaCreacion: "20201016",
        calificacion: 5,
        generoId: 1,
        contenidoTipoId: 1,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://pelicula3.com",
        titulo: "Capitan ameria y el soldado del invierno",
        fechaCreacion: "20201016",
        calificacion: 3,
        generoId: 1,
        contenidoTipoId: 2,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://pelicula4.com",
        titulo: "Doctor Strange",
        fechaCreacion: "20201016",
        calificacion: 2,
        generoId: 3,
        contenidoTipoId: 1,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
    ];
    await queryInterface.bulkInsert("PeliSeries", peliculas, {});
  },

  async down(queryInterface, Sequelize) {},
};
