var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

var api=require('./routes');
app.use('/api', api);

//Conexión a la Base de Datos y Puerto

MongoClient.connect('mongodb://heroku_krvrr9dw:i1p6e440ob4k8btc947251js7n@ds121686.mlab.com:21686/heroku_krvrr9dw', (err, res)=>{
	if(err){
		return console.log('Sin conexion a la BD');
	}
	console.log('Conectada a la Base de Datos');
	/*app.listen(21686, ()=>{
	 	console.log("Servidor corre en el puerto 8080");
	});*/
});