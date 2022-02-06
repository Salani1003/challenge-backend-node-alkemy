const bcryptjs = require("bcryptjs");
const {request, response} = require("express");
const {generarJWT} = require("../helpers/generarJWT");
const Usuario = require("../models/usuario");

const login = async (req, res = response) => {
  const {email, password} = req.body;

  try {
    //1 Verificar si el email existe
    const usuario = await Usuario.findOne({
      where: {
        email: email,
      },
    });
    if (!usuario) {
      return res.status(400).json({
        msg: "Credenciales no validas!!! -- Correo ",
      });
    }
    //2 verificar si el usuario esta activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "Credenciales no validas -- usuario borrado",
      });
    }
    //3 verificar la contraseña
    const validarPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validarPassword) {
      return res.status(400).json({
        msg: "Credenciales no validas!! - password incorrecto",
      });
    }

    //4 generar JWT
    const token = await generarJWT(usuario.id);
    res.json({
      user: usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Algo salio mal!",
    });
  }
};

module.exports = {login};
