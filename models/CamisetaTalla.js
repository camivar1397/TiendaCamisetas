var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*var Camiseta = mongoose.model('Camiseta');
var Talla = mongoose.model('Talla');*/


var camisetaTalla = new Schema({
    idCamisetaCT: { type: Schema.ObjectId, ref: "Camiseta" },
    idTallaCT: { type: Schema.ObjectId, ref: "Talla" }
});

module.exports = mongoose.model("CamisetaTalla", camisetaTalla);