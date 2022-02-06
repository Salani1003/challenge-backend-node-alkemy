const jwt = require("jsonwebtoken");
const {response, request} = require("express");
const Usuario = require("../models/usuario");
const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({
      msg: "No posee autorizacion para realizar esta accion",
    });
  }
  try {
    const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userAuth = await Usuario.findByPk(uid);

    if (!userAuth) {
      return res.status(401).json({
        msg: "token no valido-- usuario no existente",
      });
    }

    //1 Verificar si el UID tiene estado en true
    if (!userAuth.estado) {
      return res.status(401).json({
        msg: "token no valido-- usuario con estado false",
      });
    }
    req.userAuth = userAuth; // lo paso a las siguientes funciones
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "token no valido",
    });
  }
};

module.exports = {validarJWT};
