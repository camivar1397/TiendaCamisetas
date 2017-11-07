var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Rols = mongoose.model('rols');

var usuario = Schema({
	idUsuario: Number,
    nombreUsuario: String,
    apellidoUsuario: String,
    telefonoUsuario: String,
    direccionUsuari: String,
    nombreAutenticacion: String,
    contrasenaAutenticacion: String,
    numTarjeta: String,
    rol: {type: Schema.Types.ObjectId, ref:'rol'}
});

module.exports = mongoose.model("Usuario", usuario);