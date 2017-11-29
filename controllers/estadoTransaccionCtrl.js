var EstadoTransaccion= require('../models/EstadoTransaccion');

function postEstadoTransaccion(req, res){
	console.log('POST /api/estadoTransaccion');
	console.log(req.body);

	let estadoTransaccion = new estadoTransaccion();
	estadoTransaccion.idEstadoTransaccion=req.body.idEstadoTransaccion;
	estadoTransaccion.nombreEstadoTransaccion=req.body.nombreEstadoTransaccion;
    
    estadoTransaccion.save((err, estadoTransaccionAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({estadoTransaccion: estadoTransaccionAlmacenado});
    })
}

function getEstadoTransaccion(req, res){
	EstadoTransaccion.find({},(error, estadoTransaccion) =>{
		if(!estadoTransaccion) return res.status(404).send({message: 'No existen estados de transaccion'});
		if (error) return res.status(500).send('ERROR:'+error);
		res.send(200, {estadoTransaccion})
	});
}

module.exports={
	getEstadoPedido,
	postEstadoPedido
}