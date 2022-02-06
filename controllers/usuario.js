const {response, request} = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const getUsuario = async (req = request, res = response) => {
  res.json({
    msg: "Get usuario",
  });
};

const postUsuario = async (req = request, res = response) => {
  try {
    const {nombre, email, password} = req.body;
    const usuario = new Usuario({nombre, email, password});

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    await usuario.save();
    res.json({
      msg: "Usuario Creado con exito!",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const putUsuario = async (req = request, res = response) => {
  res.json({
    msg: "put usuario",
  });
};

const deleteUsuario = async (req = request, res = response) => {
  res.json({
    msg: "Delete usuario",
  });
};

module.exports = {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
};
