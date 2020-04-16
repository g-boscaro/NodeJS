//variavel que armazena o módulo de conexão com o banco de dados
//var dbConnection = require('../../config/dbConnection');

//exporta o módulo como uma função
module.exports = function(app){

	//Chama a rota noticias
	app.get('/noticia', function(request, response){

		//executa a função de acesso ao banco de dados
		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		//realiza query no banco de dados e realiza uma função de callback
		noticiasModel.getNoticia(connection, function(erro, resultado){
			//resposta a função de callback renderiza o arquivo noticias.ejs
			response.render('noticias/noticia', {noticia: resultado});
		});
	});
};