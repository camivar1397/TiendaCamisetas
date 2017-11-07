var Usuario= require('../models/Usuario');


function getUsuarios(req, res){
	Usuario.find({},(error, usuarios) =>{
		if(!usuarios) return res.status(404).send({message: 'No existen Usuarios'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {usuarios})
	});
}

function postUsuario(req, res){
	console.log('POST /api/usuario');
	console.log(req.body);

	let usuario = new Usuario();
	usuario.idUsuario=req.body.idUsuario;
	usuario.nombreUsuario=req.body.nombreUsuario;
    usuario.apellidoUsuario=req.body.apellidoUsuario;
    usuario.telefonoUsuario=req.body.telefonoUsuario;
    usuario.direccionUsuari=req.body.direccionUsuari;
    usuario.nombreAutenticacion=req.body.nombreAutenticacion;
    usuario.contrasenaAutenticacion=req.body.contrasenaAutenticacion;
    usuario.numTarjeta=req.body.numTarjeta;
    //usuario.idRolUsuario=req.body.idRolUsuario;

    usuario.save((err, usuarioAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({usuario: usuarioAlmacenado});
    })
}

module.exports={
	getUsuarios,
	postUsuario
}