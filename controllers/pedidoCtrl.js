var Pedido= require('../models/Pedido');

function postPedido(req, res){
	console.log('POST /api/pedido');
	console.log(req.body);

	let pedido = new Pedido();
	pedido.nombrePedido=req.body.nombrePedido;
	pedido.idCamisetaPedido=req.body.idCamisetaPedido;
	pedido.idEstampaPedido=req.body.idEstampaPedido;
	pedido.idCarroComprasPedido=req.body.idCarroComprasPedido;
	pedido.idEstadoPedidoP=req.body.idEstadoPedidoP;
	pedido.imagenAnterior=req.body.imagenAnterior;
	pedido.imagenPosterior=req.body.imagenPosterior;
    
    pedido.save((err, pedidoAlmacenado)=>{
    	if(err) res.status(500).send({message: 'Error al Salvar'});
    	res.status(200).send({pedido: pedidoAlmacenado});
    })
}

function getPedido(req, res){
	Pedido.find({},(error, pedido) =>{
		if(!pedido) return res.status(404).send({message: 'No existen Pedidos'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {pedido})
	});
}

function getPedidoId(req, res){

	let pedidoId=req.params.pedidoId;

	Pedido.find({"_id":pedidoId},(error, pedido) =>{
		if(!pedido) return res.status(404).send({message: 'No existen Pedidos'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {pedido})
	});
}

function getPedidoCarCom(req, res){

	let carComId=req.params.carComId;

	Pedido.find({"idCarroComprasPedido":carComId},(error, pedido) =>{
		if(!pedido) return res.status(404).send({message: 'No existen Pedidos'});
		if (error) return res.status(500).send('ERROR:'+error);

		res.send(200, {pedido})
	});
}

module.exports={
	getPedido,
	getPedidoId,
	getPedidoCarCom,
	postPedido
}