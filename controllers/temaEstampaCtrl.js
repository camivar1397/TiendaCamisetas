var TemaEstampa= require('../models/TemaEstampa');

function postTemaEstampa(req, res){
	console.log('POST /api/temaEstampa');
	console.log(req.body);

	let temaEstampa = new TemaEstampa();
	temaEstampa.nombreTemaEstampa=req.body.nombreTemaEstampa;
    
    temaEstampa.save((err, temaEstampaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({temaEstampa: temaEstampaAlmacenado});
    })
}

function getTemaEstampas(req, res){
	TemaEstampa.find({},(error, temaEstampas) =>{
		if(!temaEstampas) return res.status(404).send({message: 'No existen Temas para estampas'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {temaEstampas})
	});
}

module.exports={
	getTemaEstampas,
	postTemaEstampa
}