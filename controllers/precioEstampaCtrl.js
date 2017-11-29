var PrecioEstampa= require('../models/PrecioEstampa');

function postPrecioEstampa(req, res){
	console.log('POST /api/precioEstampa');
	console.log(req.body);

	let precioEstampa = new PrecioEstampa();
	precioEstampa.nombrePrecioEstampa=req.body.nombrePrecioEstampa;
	precioEstampa.valorEstampa=req.body.valorEstampa;
	precioEstampa.descuentoEstampa=req.body.descuentoEstampa;
    
    precioEstampa.save((err, precioEstampaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({precioEstampa: precioEstampaAlmacenado});
    })
}

function getPrecioEstampas(req, res){
	PrecioEstampa.find({},(error, precioEstampa) =>{
		if(!precioEstampa) return res.status(404).send({message: 'No existen precios para estampas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {precioEstampa})
	});
}

function getPrecioEstampaId(req, res){

	let precioEstampaId=req.params.precioEstampaId;

	PrecioEstampa.find({"_id":precioEstampaId},(error, precioEstampa) =>{
		if(!precioEstampa) return res.status(404).send({message: 'No existen precios para estampas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {precioEstampa})
	});
}

module.exports={
	getPrecioEstampas,
	getPrecioEstampaId,
	postPrecioEstampa
}