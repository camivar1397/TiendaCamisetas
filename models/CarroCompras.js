var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carroCompras = new Schema({
	idUsuarioCarroCompras: { type: Schema.Types.ObjectId, ref: "Usuario" },
	fechaModificacionCarro: { type: Date, default: Date.now }

});

module.exports=mongoose.model('CarroCompras',carroCompras);