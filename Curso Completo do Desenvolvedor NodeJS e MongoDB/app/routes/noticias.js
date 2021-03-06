//variavel que armazena o módulo de conexão com o banco de dados
//var dbConnection = require('../../config/dbConnection');

//exporta o módulo como uma função
module.exports = function(app){

	//Chama a rota noticias
	app.get('/noticias', function(request, response){

		//executa a função de acesso ao banco de dados
		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(erro, resultado){
			//resposta a função de callback renderiza o arquivo noticias.ejs
			response.render('noticias/noticias', {noticias: resultado});
		});

	});
};