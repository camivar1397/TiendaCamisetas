var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadoPedido = new Schema({
	idEstadoPedido: Number,
	nombreEstadoPedido:{
		type: String,
		enum: ['EnEspera', 'Pagada', 'Demorado']
	}
});

module.exports=mongoose.model('EstadoPedido',estadoPedido);