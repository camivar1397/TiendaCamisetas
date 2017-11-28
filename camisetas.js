var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");

var app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

var api=require('./routes');
app.use('/api', api);

//Conexión a la Base de Datos y Puerto

mongoose.connect(process.env.MONGODB, (err, res)=>{
	if(err){
		return console.log('Sin conexion a la BD');
	}
	console.log('Conectada a la Base de Datos');
	app.listen(process.env.PORT, ()=>{
	 	console.log("Servidor corre en el puerto 8080");
	});
});
