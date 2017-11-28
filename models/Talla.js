var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var talla = new Schema({
	nombreTalla: {
		type: String,
		enum: ['S','M','L','XL']
	}
});

module.exports=mongoose.model('Talla',talla);