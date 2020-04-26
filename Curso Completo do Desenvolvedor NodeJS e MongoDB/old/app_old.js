//Recuperando a função do express
var express = require('express');
//Executando o express e armazenando na variável
var app = express();

//Utilizando a variavel app junto do método get()
//para tratar a resposta que o server retornará ao client
//É utilizada uma function de callback dentro do método get após a URL que será utilizada
app.get('/', function(request, response){
	//o método send() retorna o código HTML
	response.send('<html><body>Portal de Noticias</body></html>')
});

app.get('/tecnologia', function(request, response){
	response.send('<html><body>Noticias de Tecnologia</body></html>')
});

//o método listen() fica esperando um request na porta indicada
app.listen(3000, function(){
	console.log('Server Executando com Express')
});