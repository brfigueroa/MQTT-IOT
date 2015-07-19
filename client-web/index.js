var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.sendfile("index.html");
	
});

app.listen(7000, function(){
	console.log('Servidor iniciando en el puerto 7000');
	});