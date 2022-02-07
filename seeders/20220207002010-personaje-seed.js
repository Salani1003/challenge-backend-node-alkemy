"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const personajes = [
      {
        img: "http://personaje1.com",
        edad: 20,
        peso: 50,
        historia: "historia1",
        nombre: "Spiderman",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://personaje2.com",
        edad: 35,
        peso: 65,
        historia: "historia2",
        nombre: "IronMan",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://personaje3.com",
        edad: 32,
        peso: 89,
        historia: "historia3",
        nombre: "Soldado del invierno",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://personaje4.com",
        edad: 47,
        peso: 87,
        historia: "historia4",
        nombre: "Falcon",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
      {
        img: "http://personaje5.com",
        edad: 130,
        peso: 99,
        historia: "historia5",
        nombre: "Capitan America",
        createdAT: "2022-02-07 00:01:06",
        updatedAT: "2022-02-07 00:01:06",
      },
    ];
    await queryInterface.bulkInsert("Personajes", personajes, {});
  },

  async down(queryInterface, Sequelize) {},
};
