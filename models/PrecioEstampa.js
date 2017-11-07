var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var precioEstampa = new Schema({
	idPrecioEstampa: Number,
	nombrePrecioEstampa: String,
	valorEstampa: Number,
	descuentoEstampa: Number
});

module.exports=mongoose.model('PrecioEstampa',precioEstampa);