const {Router} = require("express");
const {check} = require("express-validator");
const {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
} = require("../controllers/usuario");
const {esEmailExistente} = require("../helpers/db-validators");
const {validarCampos} = require("../middlewares/validar-campos");

const router = Router();

router.post(
  "/",
  [
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(esEmailExistente),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe tener mas de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  postUsuario
); // esto es para la creacion del usuario

module.exports = router;
