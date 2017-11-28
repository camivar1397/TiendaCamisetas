var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var material = new Schema({
	nombreMaterial: String
});

module.exports=mongoose.model('Material',material);