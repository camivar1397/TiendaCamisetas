var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var temaEstampa = new Schema({
	idTemaEstampa: Number,
	nombreTemaEstampa: String
});

module.exports=mongoose.model('TemaEstampa',temaEstampa);