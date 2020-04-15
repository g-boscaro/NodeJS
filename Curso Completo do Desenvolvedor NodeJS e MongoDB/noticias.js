//Definindo  variável que armazena a biblioteca 'http' 
var http = require('http');

//Definindo  variável server que utiliza a biblioteca http para criar um servidor
//Servidor este que utiliza uma função que exige dois atributos, req e res
var server = http.createServer(function(req, res){
	
	//Definindo variavel que armazena a URL da página
	var categoria = req.url;

	//Condicionamento que verifica a URL e muda a response dependendo do conteúdo
	if(categoria == '/tecnologia'){
		res.end("<html><body>Noticias de tecnologia</body></html>")
	}
	else if(categoria == '/moda'){
		res.end("<html><body>Noticias de moda</body></html>")
	}
	else if(categoria == '/games'){
		res.end("<html><body>Noticias de games</body></html>")	
	}
	else{
		res.end("<html><body>Portal de noticias</body></html>")
	}
});

//utilizando o método listen para "ouvir" o que está sendo requisitado na porta 3000
server.listen(3000);