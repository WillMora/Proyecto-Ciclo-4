/************************** */
//Creacion de base de datos//
/************************* */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombres:{type: String, required: true, max:60},
    apellidos:{type: String, required: true, max:60},
    documento:{type: String, required: true, max:15},
    telefono:{type: String, required: true, max:15},
    correo:{type: String, required: true, max:70},
    direccion:{type: String, required: true, max:90}
});

module.exports = mongoose.model("empleados", EmpleadosSchema);