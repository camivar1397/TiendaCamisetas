var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadoCamiseta = new Schema({
	idEstadoCamiseta: Number,
	nombreEstadoCamiseta:{
		type: String,
		enum: ['Disponible', 'NoDisponible']
	}
});

module.exports=mongoose.model('EstadoCamiseta',estadoCamiseta);