module.exports = function(){
	this.getNoticias = function(connection, callback){
		//realiza query no banco de dados e realiza uma função de callback
		connection.query('select * from noticias', callback);
	}

	this.getNoticia = function(connection, callback){
		//realiza query no banco de dados e realiza uma função de callback
		connection.query('select * from noticias where id_noticia = 2', callback);
	}

	return this;
}