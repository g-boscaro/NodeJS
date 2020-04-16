//Recuperando a função do express
var express = require('express');

var consign = require('consign');

//Executando o express e armazenando na variável
var app = express();

//Definindo o EJS como módulo que será a nova view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;