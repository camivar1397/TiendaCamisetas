var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rol = new Schema({
	idRol: Number,
	nombreRol: {
		type: String,
		enum: ['Administrador', 'Cliente', 'Artista']
	}
});

module.exports=mongoose.model('Rol',rol);