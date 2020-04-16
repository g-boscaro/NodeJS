
module.exports = function(app){
	app.get('/', function(request, response){
		//o método render() retorna a view HTML do caminho indicado que possua a extensao EJS
		response.render('home/index');
	});
};