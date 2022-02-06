const Genero = require("../models/genero");

const findById = async (id) => {
  return Genero.findByPk(id, {
    attributes: ["nombre"],
    where: {estado: true},
  });
};
const findByNombre = async (nombre) => {
  return Genero.findOne({
    nombre,
    attributes: ["id"],
    where: {estado: true},
  });
};

module.exports = {
  findById,
  findByNombre,
};
