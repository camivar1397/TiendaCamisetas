var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*var Usuario = mongoose.model('Usuario');
var Tema = mongoose.model('Tema');
var EstadoEstampa = mongoose.model('EstadoEstampa');
var PrecioEstampa = mongoose.model('PrecioEstampa');*/

var estampa = new Schema({
    nombreEstampa: String,
    imagenEstampa: String,
    idUsuarioEstampa: { type: Schema.Types.ObjectId, ref: "Usuario" },
    idTemaEstampa: { type: Schema.Types.ObjectId, ref: "TemaEstampa" },
    idEstadoEstampaE: { type: Schema.Types.ObjectId, ref: "EstadoEstampa" },
    idPrecioEstampaE: { type: Schema.Types.ObjectId, ref: "PrecioEstampa" }
});

module.exports = mongoose.model("Estampa", estampa);