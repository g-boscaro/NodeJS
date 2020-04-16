var app = require('./config/server')

//o método listen() fica esperando um request na porta indicada
app.listen(3000, function(){
	//printa na tela o resultado do módulo msg()
	console.log('Server ON')
});