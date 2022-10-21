//Controlador empleados
const Empleado = require("../models/empleados.model")

let response ={
    msg: "",
    exito:false
}
// Creacion de nuevo Empleado capturando los datos
exports.create = function(req,res){
    let empleado = new Empleado({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion 
     })
     empleado.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardó correctamente"
        res.json(response)
     })
}

//  Hacer consulta en base de datos de todos los 
// datos almacenados en la tabla empleados

exports.find = function(req, res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

//  Hacer consulta en base de datos de todos 
// con un id especifico

exports.findOne = function(req, res){
    Empleado.findOne({_id: req.params.id}, function(err, empleados){
        res.json(empleados)
    })
}

//  Hacer update en la base de datos 

exports.update = function(req,res){
    let empleado = ({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        documento: req.body.documento,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion 
     })
        // Antes de actualizar se busca el empleado por id
        Empleado.findByIdAndUpdate(req.params.id,{$set: empleado}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al actualizar datos del empleado"
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

        // Antes de actualizar se busca el empleado por id
        Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Los datos se eliminaron correctamente"
        res.json(response)
     })
}