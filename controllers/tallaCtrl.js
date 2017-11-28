var Talla= require('../models/Talla');

function postTalla(req, res){
	console.log('POST /api/talla');
	console.log(req.body);

	let talla = new Talla();
	talla.nombreTalla=req.body.nombreTalla;
	
    talla.save((err, tallaAlmacenada)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({talla: tallaAlmacenada});
    })
}

function getTalla(req, res){
	Talla.find({},(error, talla) =>{
		if(!talla) return res.status(404).send({message: 'No existen Tallas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {talla})
	});
}

module.exports={
	getTalla,
	postTalla
}