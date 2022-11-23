const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientescontroller");

router.post("/", pacientesController.create)  // Metodo para insertar datos
router.get("/", pacientesController.find) // Metodo para llamar datos
router.get("/:id", pacientesController.findOne) // Metodo para llamar datos con id especifico
router.put("/:id", pacientesController.update) // Metodo para actualizar datos con id especifico
router.delete("/:id", pacientesController.remove) // Metodo para eliminar datos con id especifico
module.exports = router