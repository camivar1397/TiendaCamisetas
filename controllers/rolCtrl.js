var Rol= require('../models/Rol');

function postRol(req, res){
	console.log('POST /api/rol');
	console.log(req.body);

	let rol = new Rol();
	rol.idRol=req.body.idRol;
	rol.nombreRol=req.body.nombreRol;
    
    rol.save((err, rolAlmancenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({rol: rolAlmancenado});
    })
}

function getRoles(req, res){
	Rol.find({},(error, roles) =>{
		if(!roles) return res.status(404).send({message: 'No existen Usuarios'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {roles})
	});
}

module.exports={
	getRoles,
	postRol
}