var express = require('express');
var api = express.Router();
const UsuariosCtrl = require('../controllers/usuariosCtrl');
const RolCtrl = require('../controllers/rolCtrl');

api.get('/usuario', UsuariosCtrl.getUsuarios);
api.post('/usuario', UsuariosCtrl.postUsuario);
api.delete('/usuario/:usuarioId', UsuariosCtrl.deleteUsuario);

api.get('/rol', RolCtrl.getRoles);
api.post('/rol', RolCtrl.postRol)

module.exports=api;