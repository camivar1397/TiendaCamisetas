var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedido = new Schema({
	nombrePedido: Number,
	idCamisetaPedido: { type: Schema.Types.ObjectId, ref: "Camiseta" },
	idEstampaPedido: { type: Schema.Types.ObjectId, ref: "Estampa" },
	idCarroComprasPedido: { type: Schema.Types.ObjectId, ref: "CarroCompras" },
	idEstadoPedidoP: { type: Schema.Types.ObjectId, ref: "EstadoPedido" },
	imagenPosterior: String,
	imagenAnterior: String,
	fechaDelPedido: { type: Date, default: Date.now }

});

module.exports=mongoose.model('Pedido',pedido);