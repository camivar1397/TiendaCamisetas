var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuario');
var Tema = mongoose.model('Tema');
var EstadoEstampa = mongoose.model('EstadoEstampa');
var PrecioEstampa = mongoose.model('PrecioEstampa');

var estampa = new Schema({
	idEstampa: Number,
    nombreEstampa: String,
    imagenEstampa: String,
    idUsuarioEstampa: { type: Schema.ObjectId, ref: "Usuario" },
    idTemaEstampa: { type: Schema.ObjectId, ref: "Tema" },
    idEstadoEstampaE: { type: Schema.ObjectId, ref: "EstadoEstampa" },
    idPrecioEstampaE: { type: Schema.ObjectId, ref: "PrecioEstampa" }
});

module.exports = mongoose.model("Estampa", estampa);