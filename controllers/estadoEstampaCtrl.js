var EstadoEstampa= require('../models/EstadoEstampa');

function postEstadoEstampa(req, res){
	console.log('POST /api/estadoEstampa');
	console.log(req.body);

	let estadoEstampa = new EstadoEstampa();
	estadoEstampa.idEstEst=req.body.idEstEst;
	estadoEstampa.nomEstEst=req.body.nomEstEst;
    
    estadoEstampa.save((err, estadoEstampaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({estadoEstampa: estadoEstampaAlmacenado});
    })
}

function getEstadoEstampa(req, res){
	EstadoEstampa.find({},(error, estadoEstampa) =>{
		if(!estadoEstampa) return res.status(404).send({message: 'No existen estados de estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
		res.send(200, {estadoEstampa})
	});
}

function getEstadoEstampaId(req, res){
	let estadoEstampaId=req.params.estadoEstampaId;

	EstadoEstampa.find({"_id": estadoEstampaId},(error, estadoEstampa) =>{
		if(!estadoEstampa) return res.status(404).send({message: 'No existen estados de estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
		res.send(200, {estadoEstampa})
	});
}

module.exports={
	getEstadoEstampa,
	getEstadoEstampaId,
	postEstadoEstampa
}