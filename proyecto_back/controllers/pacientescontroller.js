//Controlador paciente
const Paciente = require("../models/pacientes.model")

let response ={
    msg: "",
    exito:false
}
// Creacion de nuevo paciente capturando los datos
exports.create = function(req,res){
    let paciente = new Paciente({
        paciente_id: req.body.paciente_id,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        edad: req.body.edad,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad, 
        tipo_de_sangre: req.body.tipo_de_sangre,
        eps: req.body.eps, 
        arl: req.body.arl 
     })
     paciente.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar paciente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El paciente se guardó correctamente"
        res.json(response)
     })
}

//  Hacer consulta en base de datos de todos los 
// datos almacenados en la tabla empleados

exports.find = function(req, res){
    Paciente.find(function(err, pacientes){
        res.json(pacientes)
    })
}

//  Hacer consulta en base de datos de todos 
// con un id especifico

exports.findOne = function(req, res){
    Paciente.findOne({_id: req.params.id}, function(err, pacientes){
        res.json(pacientes)
    })
}

//  Hacer update en la base de datos 

exports.update = function(req,res){
    let paciente = ({
        paciente_id: req.body.paciente_id,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        edad: req.body.edad,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad, 
        tipo_de_sangre: req.body.tipo_de_sangre,
        eps: req.body.eps, 
        arl: req.body.arl  
     })
        // Antes de actualizar se busca el paciente por id
        Paciente.findByIdAndUpdate(req.params.id,{$set: paciente}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al actualizar datos del paciente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Los datos se actualizaron correctamente"
        res.json(response)
     })
}

//  Hacer Delete en la base de datos 

exports.remove = function(req,res){

        // Antes de actualizar se busca el paciente por id
        Paciente.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el paciente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Los datos se eliminaron correctamente"
        res.json(response)
     })
}