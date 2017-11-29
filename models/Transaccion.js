var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transaccion = new Schema({
	idEstadoTransaccionT: { type: Schema.Types.ObjectId, ref: "EstadoTransaccion" },
	idCarroComprasT: { type: Schema.Types.ObjectId, ref: "CarroCompras" },
	fechaTransaccion: { type: Date, default: Date.now },
	tipoTransaccion: String
});

module.exports=mongoose.model('CarroCompras',carroCompras);