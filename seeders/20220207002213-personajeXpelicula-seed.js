"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const personaje_pelicula = [
      {
        personajeId: 1,
        peliculaId: 2,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        personajeId: 2,
        peliculaId: 2,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        personajeId: 3,
        peliculaId: 4,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        personajeId: 2,
        peliculaId: 1,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        personajeId: 1,
        peliculaId: 4,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        personajeId: 3,
        peliculaId: 1,
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
    ];
    await queryInterface.bulkInsert(
      "Personaje_Pelicula",
      personaje_pelicula,
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
