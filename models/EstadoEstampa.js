var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadoEstampa = new Schema({
	idEstadoEstampa: Number,
	nombreEstadoEstampa:{
		type: String,
		enum: ['Disponible', 'NoDisponible']
	}
});

module.exports=mongoose.model('EstadoEstampa',estadoEstampa);