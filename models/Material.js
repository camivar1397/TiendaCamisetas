var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var material = new Schema({
	idMaterial: Number,
	nombreMaterial: String
});

module.exports=mongoose.model('Material',material);