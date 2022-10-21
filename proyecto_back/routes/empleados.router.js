const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleadoscontroller");

router.post("/", empleadosController.create)  // Metodo para insertar datos
router.get("/", empleadosController.find) // Metodo para llamar datos
router.get("/:id", empleadosController.findOne) // Metodo para llamar datos con id especifico
router.put("/:id", empleadosController.update) // Metodo para actualizar datos con id especifico
router.delete("/:id", empleadosController.remove) // Metodo para eliminar datos con id especifico
module.exports = router