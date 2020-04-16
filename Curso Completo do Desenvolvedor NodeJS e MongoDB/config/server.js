//Recuperando módulo express
var express = require('express');

//Recuperando módulo consign
var consign = require('consign');

//Executando o express e armazenando na variável app
var app = express();

//Definindo o EJS como módulo que será a nova view engine
app.set('view engine', 'ejs');
//Definindo onde ficarão as views
app.set('views', './app/views');

//Definindo o uso do consign para carregar automaticamente as views da pasta routes
//e carregar o módulo de conexão com o BD
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

//exportando módulo
module.exports = app;