const express = require("express")
const router = express.Router()
const usuariosController = require("../controllers/usuarioscontroller")

router.post("/login", usuariosController.login)

module.exports = router