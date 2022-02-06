const {Router} = require("express");
const {check} = require("express-validator");
const {
  getAllPersonajes,
  postPersonajes,
  putPersonajes,
  deletePersonajes,
  getPersonajeById,
  personajeXpeliculas,
} = require("../controllers/personaje");
const {
  existePjPorID,
  idNotNull,
  esPersonajeExistente,
  esPeliculaExistente,
  existePeliculaPorID,
} = require("../helpers/db-validators");
const {validarCampos} = require("../middlewares/validar-campos");
const {validarJWT} = require("../middlewares/validarJWT");

const router = Router();

router.get("/", validarJWT, getAllPersonajes);

router.get(
  "/:id",
  [validarJWT, check("id").custom(existePjPorID), validarCampos],
  getPersonajeById
);
router.post(
  "/",
  [
    validarJWT,
    check("img", "Debe agregar un URL con la imagen del personaje")
      .isURL()
      .not()
      .isEmpty(),
    check("nombre", "El nombre del personaje es obligatorio").not().isEmpty(),
    check("edad", "Edad del personaje es obligatorio")
      .isNumeric()
      .not()
      .isEmpty(),
    check("peso", "El peso es obligatorio y debe ser numerico")
      .isNumeric()
      .not()
      .isEmpty(),
    check("nombre").custom(esPersonajeExistente),
    check("historia", "Debe proporcionar una historia").not().isEmpty(),

    validarCampos,
  ],
  postPersonajes
);
router.put(
  "/:id",
  [
    validarJWT,
    check("img", "Debe agregar un URL con la imagen del personaje")
      .not()
      .isEmpty()
      .isURL(),
    check("nombre", "El nombre del personaje es obligatorio").not().isEmpty(),
    check("edad", "Edad del personaje es obligatorio")
      .isNumeric()
      .not()
      .isEmpty(),
    check("peso", "El peso es obligatorio y debe ser un numero")
      .isNumeric()
      .not()
      .isEmpty(),
    check("historia", "Debe proporcionar una historia").not().isEmpty(),
    check("id").custom(existePjPorID),
    check("nombre").custom(esPersonajeExistente),
    validarCampos,
  ],
  putPersonajes
);
router.delete(
  "/:id",
  [validarJWT, check("id").custom(existePjPorID), validarCampos],
  deletePersonajes
);

router.put("/:idCharacters/movies/:idMovie", [
  validarJWT,
  check("idCharacters").custom(existePjPorID),
  check("idMovie").custom(existePeliculaPorID),
  validarCampos,
  personajeXpeliculas,
]);

module.exports = router;
