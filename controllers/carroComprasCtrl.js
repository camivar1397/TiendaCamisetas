var CarroCompras= require('../models/CarroCompras');

function postCarroCompras(req, res){
	console.log('POST /api/carroCompras');
	console.log(req.body);

	let carroCompras = new CarroCompras();
	carroCompras.idUsuarioCarroCompras=req.body.idUsuarioCarroCompras;
	    
    carroCompras.save((err, carroComprasAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({carroCompras: carroComprasAlmacenado});
    })
}

function getCarroCompras(req, res){
	CarroCompras.find({},(error, carroCompras) =>{
		if(!carroCompras) return res.status(404).send({message: 'No existen CarroCompras'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {carroCompras})
	});
}

function getCarroComprasId(req, res){

	let carroComprasId=req.params.carroComprasId;
	CarroCompras.find({"_id":carroComprasId},(error, carroCompras) =>{
		if(!carroCompras) return res.status(404).send({message: 'No existen CarroCompras'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {carroCompras})
	});
}

function getCarroComprasUsuario(req, res){

	let usuarioId=req.params.usuarioId;
	CarroCompras.find({"idUsuarioCarroCompras":usuarioId},(error, carroCompras) =>{
		if(!carroCompras) return res.status(404).send({message: 'No existen CarroCompras'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {carroCompras})
	});
}


module.exports={
	getCarroCompras,
	getCarroComprasUsuario,
	getCarroComprasId,
	postCarroCompras
}