var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Rol = mongoose.model('Rol');

var usuario = Schema({
	idUsuario: Number,
    nombreUsuario: String,
    apellidoUsuario: String,
    telefonoUsuario: String,
    direccionUsuari: String,
    nombreAutenticacion: String,
    contrasenaAutenticacion: String,
    numTarjeta: String
    //idRolUsuario: { type: Schema.ObjectId, ref: "Rol" }
});

module.exports = mongoose.model("Usuario", usuario);