var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var temaEstampa = new Schema({
	nombreTemaEstampa: String
});

module.exports=mongoose.model('TemaEstampa',temaEstampa);