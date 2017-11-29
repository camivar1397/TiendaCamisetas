var CamisetaTalla= require('../models/CamisetaTalla');

function postCamisetaTalla(req, res){
	console.log('POST /api/camisetaTalla');
	console.log(req.body);

	let camisetaTalla = new CamisetaTalla();
	camisetaTalla.idCamisetaCT=req.body.idCamisetaCT;
	camisetaTalla.idTallaCT=req.body.idTallaCT;
	
    camisetaTalla.save((err, camisetaTallaAlmacenada)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({camisetaTalla: camisetaTallaAlmacenada});
    })
}

function getCamisetaTalla(req, res){
	CamisetaTalla.find({},(error, camisetaTalla) =>{
		if(!camisetaTalla) return res.status(404).send({message: 'No existen CamisetaTalla'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {camisetaTalla})
	});
}

function getCamisetaTallaId(req, res){
	let camisetaTallaId=req.params.camisetaTallaId;
	CamisetaTalla.find({"_id":camisetaTallaId},(error, camisetaTalla) =>{
		if(!camisetaTalla) return res.status(404).send({message: 'No existen CamisetaTalla'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {camisetaTalla})
	});
}

function getCamisetaTallaCamiseta(req, res){
	let camisetaId=req.params.camisetaId;
	CamisetaTalla.find({"idCamisetaCT":camisetaId},(error, camisetaTalla) =>{
		if(!camisetaTalla) return res.status(404).send({message: 'No existen CamisetaTalla'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {camisetaTalla})
	});
}

module.exports={
	getCamisetaTalla,
	getCamisetaTallaId,
	getCamisetaTallaCamiseta,
	postCamisetaTalla
}