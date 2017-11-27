var express = require('express');
var api = express.Router();
const UsuariosCtrl = require('../controllers/usuariosCtrl');
const RolCtrl = require('../controllers/rolCtrl');
const EstadoEstampaCtrl = require('../controllers/estadoEstampaCtrl');
const PrecioEstampaCtrl = require('../controllers/precioEstampaCtrl');
const TemaEstampaCtrl = require('../controllers/temaEstampaCtrl');
const EstampaCtrl = require('../controllers/estampaCtrl');

api.get('/usuario', UsuariosCtrl.getUsuarios);
api.post('/usuario', UsuariosCtrl.postUsuario);
api.delete('/usuario/:usuarioId', UsuariosCtrl.deleteUsuario);

api.get('/rol', RolCtrl.getRoles);
api.post('/rol', RolCtrl.postRol);

api.get('/estadoEstampa', EstadoEstampaCtrl.getEstadoEstampa);
api.post('/estadoEstampa', EstadoEstampaCtrl.postEstadoEstampa);

api.get('/precioEstampa', PrecioEstampaCtrl.getPrecioEstampas);
api.post('/precioEstampa', PrecioEstampaCtrl.postPrecioEstampa);

api.get('/temaEstampa', TemaEstampaCtrl.getTemaEstampas);
api.post('/temaEstampa', TemaEstampaCtrl.postTemaEstampa);

api.get('/estampa', EstampaCtrl.getEstampas);
api.post('/estampa', EstampaCtrl.postEstampa);

module.exports=api;