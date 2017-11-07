var Usuario= require('../models/Usuario');	
var Rol= require('../models/Rol');	


function getUsuarios(req, res){
	Usuario.find({},(error, usuarios) =>{
		if(!usuarios) return res.status(404).send({message: 'No existen Usuarios'});
		if (error) return res.status(500).send('ERROR:'+error);

		Rol.populate(usuarios,{path:"rol"}, function(err,usuarios){
			res.send(200, {usuarios});
		})

	});
}

function deleteUsuario(req, res){
	let usuarioId=req.params.usuarioId;

	Usuario.findById(usuarioId, (err, usuario)=>{
		if(err) res.status(500).send({message: 'Error al borrar el producto: ${err}'});

		usuario.remove(err=>{
			if(err) res.status(500).send({message: 'Error al borrar el producto: ${err}'});
			res.status(200).send({message: 'Usuario Borrado'});
		});
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
    usuario.rol=req.body.rol;

    usuario.save((err, usuarioAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({usuario: usuarioAlmacenado});
    })
}

module.exports={
	getUsuarios,
	deleteUsuario,
	postUsuario
}