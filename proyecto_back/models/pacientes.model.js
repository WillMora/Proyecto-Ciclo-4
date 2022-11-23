/************************** */
//Creacion de base de datos//
/************************* */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PacientesSchema = new Schema({
    paciente_id:{type: String, required: true, max:60},
    nombres:{type: String, required: true, max:60},
    apellidos:{type: String, required: true, max:60},
    documento:{type: String, required: true, max:15},
    edad:{type: String, required: true, max:3},
    telefono:{type: String, required: true, max:15},
    correo:{type: String, required: true, max:70},
    direccion:{type: String, required: true, max:90},
    ciudad:{type: String, required: true, max:90},
    tipo_de_sangre:{type: String, required: true, max:5},
    eps:{type: String, required: true, max:30}, 
    arl:{type: String, required: true, max:30} 

});

module.exports = mongoose.model("pacientesSchema", PacientesSchema);