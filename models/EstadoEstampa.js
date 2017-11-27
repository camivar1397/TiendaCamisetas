var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadoEstampa = new Schema({
	idEstEst: {type: Number, required: true},
	nomEstEst: {type: String, required: true}
});

module.exports = mongoose.model("EstadoEstampa", estadoEstampa);