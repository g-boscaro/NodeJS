//variavel que armazena o módulo de conexão com o banco de dados
//var dbConnection = require('../../config/dbConnection');

//exporta o módulo como uma função
module.exports = function(app){

	app.get('/noticias', function(request, response){

		//executa a função de acesso ao banco de dados
		var connection = app.config.dbConnection();

		//realiza query no banco de dados e realiza uma função de callback
		connection.query('select * from noticias', function(erro, resultado){
			//resposta a função de callback renderiza o arquivo noticias.ejs
			response.render('noticias/noticias', {noticias: resultado});
		});
	});
};