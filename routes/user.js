const express = require("express")
const router = express.Router()
const UserController = require("../controllers/user.js")

//definir la ruta
router.get("/prueba-user", UserController.pruebaUser)

//exportar

module.exports = router