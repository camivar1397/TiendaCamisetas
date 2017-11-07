var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadoTransaccion = new Schema({
	idEstadoTransaccion: Number,
	nombreEstadoTransaccion:{
		type: String,
		enum: ['Exitosa', 'Fallada', 'EnProceso']
	}
});

module.exports=mongoose.model('EstadoTransaccion',estadoTransaccion);