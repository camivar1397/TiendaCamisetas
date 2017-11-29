var Transaccion= require('../models/Transaccion');

function postTransaccion(req, res){
	console.log('POST /api/transaccion');
	console.log(req.body);

	let transaccion = new Transaccion();
	transaccion.idEstadoTransaccionT=req.body.idEstadoTransaccionT;
	transaccion.idCarroComprasT=req.body.idCarroComprasT;
	transaccion.tipoTransaccion=req.body.tipoTransaccion;
    
    transaccion.save((err, transaccionAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({transaccion: transaccionAlmacenado});
    })
}

function getTransaccion(req, res){
	Transaccion.find({},(error, transaccion) =>{
		if(!transaccion) return res.status(404).send({message: 'No existen Transacciones'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {transaccion})
	});
}

function getTransaccionCarCom(req, res){
	let carroCompraId=req.params.carroCompraId;
	Transaccion.find({"idCarroComprasT":carroCompraId},(error, transaccion) =>{
		if(!transaccion) return res.status(404).send({message: 'No existen Transacciones'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {transaccion})
	});
}

module.exports={
	getTransaccion,
	getTransaccionCarCom,
	postTransaccion
}