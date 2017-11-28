var EstadoCamiseta= require('../models/EstadoCamiseta');

function postEstadoCamiseta(req, res){
	console.log('POST /api/estadoCamiseta');
	console.log(req.body);

	let estadoCamiseta = new EstadoCamiseta();
	estadoCamiseta.idEstadoCamiseta=req.body.idEstadoCamiseta;
	estadoCamiseta.nombreEstadoCamiseta=req.body.nombreEstadoCamiseta;
    
    estadoCamiseta.save((err, estadoCamisetaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({estadoCamiseta: estadoCamisetaAlmacenado});
    })
}

function getEstadoCamiseta(req, res){
	EstadoCamiseta.find({},(error, estadoCamiseta) =>{
		if(!estadoCamiseta) return res.status(404).send({message: 'No existen estados de estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
		res.send(200, {estadoCamiseta})
	});
}

module.exports={
	getEstadoCamiseta,
	postEstadoCamiseta
}