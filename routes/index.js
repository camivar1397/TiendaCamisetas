var express = require('express');
var api = express.Router();
const UsuariosCtrl = require('../controllers/usuariosCtrl');
const RolCtrl = require('../controllers/rolCtrl');
const EstadoEstampaCtrl = require('../controllers/estadoEstampaCtrl');
const PrecioEstampaCtrl = require('../controllers/precioEstampaCtrl');
const TemaEstampaCtrl = require('../controllers/temaEstampaCtrl');
const EstampaCtrl = require('../controllers/estampaCtrl');
const EstadoCamisetaCtrl = require('../controllers/estadoCamisetaCtrl');
const PrecioCamisetaCtrl = require('../controllers/precioCamisetaCtrl');
const CamisetaCtrl = require('../controllers/camisetaCtrl');
const TallaCtrl = require('../controllers/tallaCtrl');
const CamisetaTallaCtrl = require('../controllers/camisetaTallaCtrl');
const MaterialCtrl = require('../controllers/materialCtrl');
const EstadoPedidoCtrl = require('../controllers/estadoPedidoCtrl');
const EstadoTransaccionCtrl = require('../controllers/estadoTransaccionCtrl');
const CarroComprasCtrl = require('../controllers/carroComprasCtrl');
const PedidoCtrl = require('../controllers/pedidoCtrl');
const TransaccionCtrl = require('../controllers/transaccionCtrl');

api.get('/usuario', UsuariosCtrl.getUsuarios);
api.post('/usuario', UsuariosCtrl.postUsuario);
api.delete('/usuario/:usuarioId', UsuariosCtrl.deleteUsuario);
api.get('/usuario/:usuarioId', UsuariosCtrl.getUsuarioId);
api.get('/usuario/nombreAutenticacion/:nombreAutenticacion', UsuariosCtrl.getUsuarioNomAut);

api.get('/rol', RolCtrl.getRoles);
api.post('/rol', RolCtrl.postRol);
api.get('/rol/:rolId', RolCtrl.postRol);

api.get('/estadoEstampa', EstadoEstampaCtrl.getEstadoEstampa);
api.post('/estadoEstampa', EstadoEstampaCtrl.postEstadoEstampa);
api.get('/estadoEstampa/:estadoEstampaId', EstadoEstampaCtrl.getEstadoEstampaId);

api.get('/precioEstampa', PrecioEstampaCtrl.getPrecioEstampas);
api.post('/precioEstampa', PrecioEstampaCtrl.postPrecioEstampa);
api.get('/precioEstampa/:precioEstampaId', PrecioEstampaCtrl.getPrecioEstampaId);

api.get('/temaEstampa', TemaEstampaCtrl.getTemaEstampas);
api.post('/temaEstampa', TemaEstampaCtrl.postTemaEstampa);
api.get('/temaEstampa/:temaEstampaId', TemaEstampaCtrl.getTemaEstampaId);

api.get('/estampa', EstampaCtrl.getEstampas);
api.post('/estampa', EstampaCtrl.postEstampa);
api.get('/estampa/:estampaId', EstampaCtrl.getEstampaId);
api.get('/estampa/Artista/:artistaId', EstampaCtrl.getEstampaArtista);
api.get('/estampa/Tema/:temaId', EstampaCtrl.getEstampaTema);

api.get('/estadoCamiseta', EstadoCamisetaCtrl.getEstadoCamiseta);
api.post('/estadoCamiseta', EstadoCamisetaCtrl.postEstadoCamiseta);
api.get('/estadoCamiseta/:estadoCamisetaId', EstadoCamisetaCtrl.getEstadoCamisetaId);

api.get('/precioCamiseta', PrecioCamisetaCtrl.getPrecioCamiseta);
api.post('/precioCamiseta', PrecioCamisetaCtrl.postPrecioCamiseta);
api.get('/precioCamiseta/:precioCamisetaId', PrecioCamisetaCtrl.getPrecioCamisetaId);

api.get('/camiseta', CamisetaCtrl.getCamiseta);
api.post('/camiseta', CamisetaCtrl.postCamiseta);
api.get('/camiseta/:camisetaId', CamisetaCtrl.getCamisetaId);
api.get('/camiseta/estadoCamiseta/:estCamId', CamisetaCtrl.getCamisetaEstCam);

api.get('/talla', TallaCtrl.getTalla);
api.post('/talla', TallaCtrl.postTalla);
api.get('/talla/:tallaId', TallaCtrl.getTallaId);

api.get('/camisetaTalla', CamisetaTallaCtrl.getCamisetaTalla);
api.post('/camisetaTalla', CamisetaTallaCtrl.postCamisetaTalla);
api.get('/camisetaTalla/:camisetaTallaId', CamisetaTallaCtrl.getCamisetaTallaId);
api.get('/camisetaTalla/camiseta/:camisetaId', CamisetaTallaCtrl.getCamisetaTallaCamiseta);

api.get('/material', MaterialCtrl.getMaterial);
api.post('/material', MaterialCtrl.postMaterial);
api.get('/material/:materialId', MaterialCtrl.getMaterialId);

api.get('/estadoPedido', EstadoPedidoCtrl.getEstadoPedido);
api.post('/estadoPedido', EstadoPedidoCtrl.postEstadoPedido);

api.get('/estadoTransaccion', EstadoTransaccionCtrl.getEstadoTransaccion);
api.post('/estadoTransaccion', EstadoTransaccionCtrl.postEstadoTransaccion);

api.get('/carroCompras', CarroComprasCtrl.getCarroCompras);
api.post('/carroCompras', CarroComprasCtrl.postCarroCompras);

api.get('/pedido', PedidoCtrl.getPedido);
api.post('/pedido', PedidoCtrl.postPedido);

api.get('/transaccion', TransaccionCtrl.getTransaccion);
api.post('/transaccion', TransaccionCtrl.postTransaccion);

module.exports=api;