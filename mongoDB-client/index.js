//importaciones 2
var mqtt = require('mqtt'),
	mongoose = require('mongoose'),
	winston = require('winston')
	fs = require( 'fs' ),
	logDir = 'log',
	logger = null;
 
 //revisar si existe el directorio
 if ( !fs.existsSync( logDir ) ) {
	// Create the directory if it does not exist
	fs.mkdirSync( logDir );
}

 logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ 
		level: 'warn',
		colorize: true}),
      new (winston.transports.File)({ filename: logDir + '/platform.log', level: 'info' })
    ],
    exitOnError: false
  });

mongoose.connect('mongodb://localhost/sensores');
var Sensor = mongoose.model('sensors', { name: String, fecha: Date, luz: String, sonido: String, dato : Object });

client = mqtt.createClient(1883, '192.168.0.12');

client.subscribe('utpl/#');

var temperatura = {
	fecha : '2015/08/090',
	valor: 23
};

//client.publish('utpl/node', JSON.stringify(temperatura));

client.on('message', function (topic, message) {
	logger.log('info', 'Recibiendo datos de sensor', { topico: topic,  dato:  message.toString()});
	//console.log(message.toString());
	var mensajeJson;
	try {
		mensajeJson = JSON.parse(message);
		var sensorAlerta = new Sensor({ name: topic, fecha: new Date(), luz: mensajeJson.device.luz , sonido: mensajeJson.device.sonido });
		//console.log (sensorAlerta.toString());
		sensorAlerta.save(function (err) {
		  if (err){ // ...
			logger.warn(err);
		  }
		});
	} catch (e) {
		
		logger.warn(e);
	}
	
  //client.end();
});