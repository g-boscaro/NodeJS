//Recuperando a função do express
var express = require('express');
//Executando o express e armazenando na variável
var app = express();

//Definindo o EJS como módulo que será a nova view engine
app.set('view engine', 'ejs');

//Utilizando a variavel app junto do método get()
//para tratar a resposta que o server retornará ao client
//É utilizada uma function de callback dentro do método get após a URL que será utilizada
app.get('/', function(request, response){
	//o método render() retorna a view HTML do caminho indicado que possua a extensao EJS
	response.render('home/index');
});

app.get('/formulario_inclusao_noticia', function(request, response){
	response.render('admin/form_add_noticia');
});

app.get('/noticias', function(request, response){
	response.render('noticias/noticias')
})

//o método listen() fica esperando um request na porta indicada
app.listen(3000, function(){
	console.log('Server Executando com Express')
});