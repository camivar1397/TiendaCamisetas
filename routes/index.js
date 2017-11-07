var express = require('express');
var api = express.Router();
const UsuariosCtrl = require('../controllers/usuariosCtrl');

api.get('/usuario', UsuariosCtrl.getUsuarios);
api.post('/usuario', UsuariosCtrl.postUsuario);

module.exports=api;