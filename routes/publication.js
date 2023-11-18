const express = require("express")
const router = express.Router()
const PublicationController = require("../controllers/publication")

//definir ruta
router.get("/prueba-publication", PublicationController.pruebaPublication)

//exportar
module.exports = router