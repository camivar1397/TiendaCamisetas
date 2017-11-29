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

function getEstampaId(req, res){

	let estampaId=req.params.estampaId;

	Estampa.find({"_id":estampaId},(error, estampa) =>{
		if(!estampa) return res.status(404).send({message: 'No existen Estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
	}).populate('Usuario Tema EstadoEstampa PrecioEstampa').exec(function (err, results){
		res.send(200,{results})
	});
}

function getEstampaArtista(req, res){

	let artistaId=req.params.artistaId;

	Estampa.find({"idUsuarioEstampa":artistaId},(error, estampa) =>{
		if(!estampa) return res.status(404).send({message: 'No existen Estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
	}).populate('Usuario Tema EstadoEstampa PrecioEstampa').exec(function (err, results){
		res.send(200,{results})
	});
}

function getEstampaTema(req, res){

	let temaId=req.params.temaId;

	Estampa.find({"idTemaEstampa":temaId},(error, estampa) =>{
		if(!estampa) return res.status(404).send({message: 'No existen Estampa'});
		if (error) return res.status(500).send('ERROR:'+error);
	}).populate('Usuario Tema EstadoEstampa PrecioEstampa').exec(function (err, results){
		res.send(200,{results})
	});
}


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

module.exports={
	getEstampas,
	getEstampaTema,
	getEstampaArtista,
	getEstampaId,
	postEstampa
}