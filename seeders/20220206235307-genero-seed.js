"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const generos = [
      {
        img: "http://genero1.com",
        nombre: "Animada",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://genero2.com",
        nombre: "Accion",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://genero3.com",
        nombre: "Aventura",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://genero4.com",
        nombre: "Comedia",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://genero5.com",
        nombre: "Musical",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
    ];
    await queryInterface.bulkInsert("Generos", generos, {});
  },

  async down(queryInterface, Sequelize) {},
};
