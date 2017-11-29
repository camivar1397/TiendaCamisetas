var EstadoPedido= require('../models/EstadoPedido');

function postEstadoPedido(req, res){
	console.log('POST /api/estadoPedido');
	console.log(req.body);

	let estadoPedido = new estadoPedido();
	estadoPedido.idEstadoPedido=req.body.idEstadoPedido;
	estadoPedido.nombreEstadoPedido=req.body.nombreEstadoPedido;
    
    estadoPedido.save((err, estadoPedidoAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({estadoPedido: estadoPedidoAlmacenado});
    })
}

function getEstadoPedido(req, res){
	EstadoPedido.find({},(error, estadoPedido) =>{
		if(!estadoPedido) return res.status(404).send({message: 'No existen estados de pedido'});
		if (error) return res.status(500).send('ERROR:'+error);
		res.send(200, {estadoPedido})
	});
}

module.exports={
	getEstadoPedido,
	postEstadoPedido
}