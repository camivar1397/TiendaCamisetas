var Estampa= require('../models/Estampa');	
var Usuario = require('../models/Usuario');
var TemaEstampa = require('../models/TemaEstampa');
var EstadoEstampa = require('../models/EstadoEstampa');
var PrecioEstampa = require('../models/PrecioEstampa');	


function getEstampas(req, res){

	Estampa.find({},(error, estampa) =>{
		if(!estampa) return res.status(404).send({message: 'No existen Estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
	}).populate('Usuario Tema EstadoEstampa PrecioEstampa').exec(function (err, results){
		res.send(200,{results})
	});

	/*Estampa.find({},(error, estampas) =>{
		if(!estampas) return res.status(404).send({message: 'No existen Estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
		
		res.send(200, {estampas})
	});*/
}

/*function deleteUsuario(req, res){
	let usuarioId=req.params.usuarioId;

	Usuario.findById(usuarioId, (err, usuario)=>{
		if(err) res.status(500).send({message: 'Error al borrar el producto: ${err}'});

		usuario.remove(err=>{
			if(err) res.status(500).send({message: 'Error al borrar el producto: ${err}'});
			res.status(200).send({message: 'Usuario Borrado'});
		});
	});


}*/

function postEstampa(req, res){
	console.log('POST /api/estampa');
	console.log(req.body);

	let estampa = new Estampa();
	estampa.nombreEstampa=req.body.nombreEstampa;
    estampa.imagenEstampa=req.body.imagenEstampa;
    estampa.idUsuarioEstampa=req.body.idUsuarioEstampa;
    estampa.idTemaEstampa=req.body.idTemaEstampa;
    estampa.idEstadoEstampaE=req.body.idEstadoEstampaE;
    estampa.idPrecioEstampaE=req.body.idPrecioEstampaE;

    estampa.save((err, estampaAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({estampa: estampaAlmacenado});
    })
}

/*function updateUsuario(req,res){
	let usuarioId=req.params.productId
	let update = req.body

	Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdate)=>{
		if(err) res.status(500).send({message: "Error al actualizar el usuario"});
		res.status(200).send({usuario:usuarioUpdate});
	})
}*/

module.exports={
	getEstampas,
	postEstampa
}