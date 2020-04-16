//armazenando módulo mysql no variavel mysql
var mysql = require('mysql');

//Wrapping a função na variável connMySQL para que a função não seja executada automaticamente pelo autoload
var connMySQL = function(){
	console.log('Conexao com bd foi estabelecida')
	return mysql.createConnection({
		host : 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias'
	});
};

//Exportando módulo de conexão o BD
module.exports = function(){
	console.log('O autoload carregou o modulo de conexao com o BD')
	return connMySQL;
};