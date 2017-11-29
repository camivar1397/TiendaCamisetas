var Camiseta= require('../models/Camiseta');

function postCamiseta(req, res){
	console.log('POST /api/camiseta');
	console.log(req.body);

	let camiseta = new Camiseta();
	camiseta.nombreCamiseta=req.body.nombreCamiseta;
	camiseta.colorCamiseta=req.body.colorCamiseta;
	camiseta.imagenCamiseta=req.body.imagenCamiseta;
	camiseta.idMaterialCamiseta=req.body.idMaterialCamiseta;
	camiseta.idEstadoCamisetaC=req.body.idEstadoCamisetaC;
	camiseta.idPrecioCamisetaC=req.body.idPrecioCamisetaC;
    
    camiseta.save((err, camisetaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({camiseta: camisetaAlmacenado});
    })
}

function getCamiseta(req, res){
	Camiseta.find({},(error, camiseta) =>{
		if(!camiseta) return res.status(404).send({message: 'No existen Camisetas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {camiseta})
	});
}

function getCamisetaId(req, res){
	let camisetaId=req.params.camisetaId;
	Camiseta.find({"_id":camisetaId},(error, camiseta) =>{
		if(!camiseta) return res.status(404).send({message: 'No existen Camisetas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {camiseta})
	});
}

function getCamisetaEstCam(req, res){
	let estCamId=req.params.estCamId;
	Camiseta.find({"idEstadoCamisetaC":estCamId},(error, camiseta) =>{
		if(!camiseta) return res.status(404).send({message: 'No existen Camisetas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {camiseta})
	});
}


module.exports={
	getCamiseta,
	getCamisetaId,
	getCamisetaEstCam,
	postCamiseta
}