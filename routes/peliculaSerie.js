const {Router} = require("express");
const {check} = require("express-validator");

const {
  getAllPelicula,
  getPeliculaById,
  postPelicula,
  putPelicula,
  deletePelicula,
  peliculaXpersonaje,
} = require("../controllers/peliculaSerie");
const {
  existePeliculaPorID,
  validarCalificacion,
  esPeliculaExistente,
  existeGenero,
  existeContenidoTipo,
  existePjPorID,
} = require("../helpers/db-validators");
const {validarCampos} = require("../middlewares/validar-campos");
const {validarJWT} = require("../middlewares/validarJWT");

const router = Router();

router.get("/", validarJWT, getAllPelicula);
router.get(
  "/:id",
  [validarJWT, check("id").custom(existePeliculaPorID), validarCampos],
  getPeliculaById
);
router.post(
  "/",
  [
    validarJWT,
    check("img", "Proporcione una imagen").isURL().not().isEmpty(),
    check("titulo", "El titulo es un atributo obligatorio").not().isEmpty(),
    check(
      "fechaCreacion",
      "la fecha de creacion debe ser valida y es obligatoria"
    )
      //.isDate()
      .not()
      .isEmpty(),
    check("calificacion", "La calificacion es obligatoria").not().isEmpty(),
    check("calificacion").custom(validarCalificacion),
    check(
      "contenidoTipoId",
      "Debe proporcionar un tipo de producto 1-Pelicula, \n 2-Serie"
    )
      .not()
      .isEmpty(),
    check("contenidoTipoId").custom(existeContenidoTipo),
    check("generoId", "Debe proporcionar un Genero").not().isEmpty(),
    check("generoId").custom(existeGenero),
    check("titulo").custom(esPeliculaExistente),
    validarCampos,
  ],
  postPelicula
);
router.put(
  "/:id",
  [
    validarJWT,
    check("img", "Proporcione una imagen").isURL().not().isEmpty(),
    check("titulo", "El titulo es un atributo obligatorio").not().isEmpty(),
    check(
      "fechaCreacion",
      "la fecha de creacion debe ser valida y es obligatoria"
    )
      //.isDate()
      .not()
      .isEmpty(),
    check("calificacion", "La calificacion es obligatoria").not().isEmpty(),
    check("calificacion").custom(validarCalificacion),
    check("id").custom(existePeliculaPorID),
    check(
      "contenidoTipoId",
      "Debe proporcionar un tipo de producto 1-Pelicula, \n 2-Serie"
    )
      .not()
      .isEmpty(),
    check("generoId", "Debe proporcionar un Genero").not().isEmpty(),
    validarCampos,
  ],
  putPelicula
);
router.delete(
  "/:id",
  [validarJWT, check("id").custom(existePeliculaPorID), validarCampos],
  deletePelicula
);

router.put(
  "/:idMovie/characters/:idCharacters",
  [
    validarJWT,
    check("idCharacters").custom(existePjPorID),
    check("idMovie").custom(existePeliculaPorID),
    validarCampos,
  ],
  peliculaXpersonaje
);
module.exports = router;
