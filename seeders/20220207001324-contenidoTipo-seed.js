"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const contenidoTipo = [
      {
        descripcion: "Pelicula",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        descripcion: "Serie",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
    ];
    await queryInterface.bulkInsert("ContenidoTipos", contenidoTipo, {});
  },

  async down(queryInterface, Sequelize) {},
};
