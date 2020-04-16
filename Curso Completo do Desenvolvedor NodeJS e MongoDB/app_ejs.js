var app = require('./config/server')

//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia');
//rotaFormInclusaoNoticias(app)
//Toda esta parte foi separadas em módluos diferentes para cada página
//Utilizando a variavel app junto do método get()
//para tratar a resposta que o server retornará ao client
//É utilizada uma function de callback dentro do método get após a URL que será utilizada
//app.get('/', function(request, response){
	//o método render() retorna a view HTML do caminho indicado que possua a extensao EJS
//	response.render('home/index');
//});

//app.get('/formulario_inclusao_noticia', function(request, response){
//	response.render('admin/form_add_noticia');
//});
//
//app.get('/noticias', function(request, response){
//	response.render('noticias/noticias')
//})

//o método listen() fica esperando um request na porta indicada
app.listen(3000, function(){
	//printa na tela o resultado do módulo msg()
	console.log('Server ON')
});