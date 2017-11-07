var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Material = mongoose.model('Material');
var EstadoCamiseta = mongoose.model('EstadoCamiseta');
var PrecioCamiseta = mongoose.model('PrecioCamiseta');

var camiseta = new Schema({
	idCamiseta: Number,
    nombreCamiseta: String,
    colorCamiseta: String,//Color Hexadecimal
    imagenCamiseta: String,
    idMaterialCamiseta: { type: Schema.ObjectId, ref: "Material" },
    idEstadoCamisetaC: { type: Schema.ObjectId, ref: "EstadoCamiseta" },
    idPrecioCamisetaC: { type: Schema.ObjectId, ref: "PrecioCamiseta" }
});

module.exports = mongoose.model("Camiseta", camiseta);