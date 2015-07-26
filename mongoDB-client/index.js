
var mqtt = require('mqtt'),
	mongoose = require('mongoose'),
	winston = require('winston')
	fs = require( 'fs' ),
	logDir = 'log',
	logger = null;
 
 //revisar si existe el directorio
 if ( !fs.existsSync( logDir ) ) {
	// Crea un directorio si no existe
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
//
var Sensor = mongoose.model('sensors', { name: String, fecha: Date, luz: String, sonido: String, dato : Object });
//se crea un cliente MQTT
client = mqtt.createClient(1883, '192.168.0.12');

// se subscribe a todos lso topicos que esten x debajo de la jerarquia utpl/
// esta da la oportunidad que se subscriba a topicos como
// "utpl/sensor/arduinoMega" y "utpl/sensor/galileo"
client.subscribe('utpl/#');

var temperatura = {
	fecha : '2015/08/090',
	valor: 23
};

//maneja los mensajes entrantes de los topicos a los cuales esta subscrito
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
	
});