var PrecioCamiseta= require('../models/PrecioCamiseta');

function postPrecioCamiseta(req, res){
	console.log('POST /api/precioCamiseta');
	console.log(req.body);

	let precioCamiseta = new PrecioCamiseta();
	precioCamiseta.nombrePrecioCamiseta=req.body.nombrePrecioCamiseta;
	precioCamiseta.valorCamiseta=req.body.valorCamiseta;
	precioCamiseta.descuentoCamiseta=req.body.descuentoCamiseta;
    
    precioCamiseta.save((err, precioCamisetaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({precioCamiseta: precioCamisetaAlmacenado});
    })
}

function getPrecioCamiseta(req, res){
	PrecioCamiseta.find({},(error, precioCamiseta) =>{
		if(!precioCamiseta) return res.status(404).send({message: 'No existen precios para Camisetas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {precioCamiseta})
	});
}

function getPrecioCamisetaId(req, res){

	let precioCamisetaId=req.params.precioCamisetaId;

	PrecioCamiseta.find({"_id":precioCamisetaId},(error, precioCamiseta) =>{
		if(!precioCamiseta) return res.status(404).send({message: 'No existen precios para Camisetas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {precioCamiseta})
	});
}

module.exports={
	getPrecioCamiseta,
	getPrecioCamisetaId,
	postPrecioCamiseta
}