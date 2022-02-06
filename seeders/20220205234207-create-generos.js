"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const generos = [
      {img: "http://genero1.com", nombre: "Animada"},
      {img: "http://genero2.com", nombre: "Accion"},
      {img: "http://genero3.com", nombre: "Aventura"},
      {img: "http://genero4.com", nombre: "Comedia"},
      {img: "http://genero5.com", nombre: "Musical"},
    ];

    await queryInterface.bulkInsert("Generos", generos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Generos", null, {});
  },
};
