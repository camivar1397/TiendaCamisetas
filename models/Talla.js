var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var talla = new Schema({
	idTalla: Number,
	nombreTalla: {
		type: String,
		enum: ['S','M','L','XL']
	}
});

module.exports=mongoose.model('Talla',talla);