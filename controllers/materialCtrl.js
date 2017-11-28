var Material= require('../models/Material');

function postMaterial(req, res){
	console.log('POST /api/material');
	console.log(req.body);

	let material = new Material();
	material.nombreMaterial=req.body.nombreMaterial;
    
    material.save((err, materialAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({material: materialAlmacenado});
    })
}

function getMaterial(req, res){
	Material.find({},(error, material) =>{
		if(!material) return res.status(404).send({message: 'No existen Materiales'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {material})
	});
}

module.exports={
	getMaterial,
	postMaterial
}