var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var precioEstampa = new Schema({
	nombrePrecioEstampa: String,
	valorEstampa: Number,
	descuentoEstampa: Number,
	fechaDelPrecio: { type: Date, default: Date.now }
});

module.exports=mongoose.model('PrecioEstampa',precioEstampa);