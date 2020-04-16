var app = require('./config/server')

//o método listen() fica esperando um request na porta indicada
app.listen(3000, function(){
	//printa no cmd
	console.log('Server ON')
});