var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var precioCamiseta = new Schema({
	idPrecioCamiseta: Number,
	nombrePrecioCamiseta: String,
	valorCamiseta: Number,
	descuentoCamiseta: Number
});

module.exports=mongoose.model('PrecioCamiseta',precioCamiseta);