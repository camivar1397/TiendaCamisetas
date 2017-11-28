var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var precioCamiseta = new Schema({
	nombrePrecioCamiseta: String,
	valorCamiseta: Number,
	descuentoCamiseta: Number,
	fechaDelPrecioCamiseta: { type: Date, default: Date.now }
});

module.exports=mongoose.model('PrecioCamiseta',precioCamiseta);