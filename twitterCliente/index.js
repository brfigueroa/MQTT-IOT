var Twit = require('twit')
var mqtt = require('mqtt');
// direccion en la cual esta el broker
var serverMqtt = '192.168.1.13';
//Topicos a los cuales se van a publicar
var topico1 = 'utpl/IntelGalileo/led';
var topico2 = 'utpl/ArduinoMega/led';
var mensaje1 = 'ON';
var mensaje2 = 'OFF';

var puerto = 1883;

var T = new Twit({
	consumer_key : 'your consumer_key'
	,consumer_secret: 'your consumer_secret'
	,access_token: 'your access_token'
	,access_token_secret: 'your access_token_secret'
})


console.log('|-------------------------------------------|')
console.log('|                                           |')
console.log('| MQTT CLIENTE conectado atraves de TWITTER |')
console.log('|                                           |')
console.log('|-------------------------------------------|')
console.log('')

var client = mqtt.createClient(puerto, serverMqtt);
client.options.reconnectPeriod = 0; 	


var stream = T.stream('statuses/filter', { follow: '14585199' });

stream.on('tweet', function (tweet) {
  console.log(tweet.text + ' (' + tweet.user.screen_name  + ')');
  if (tweet.text.match('GalileoON')){
  	 console.log('mensaje coincide');
     client.publish(topico1, mensaje1);
     console.log('Publicando mensaje: utpl/IntelGalileo/led ON ')
    }else if(tweet.text.match('GalileoOFF')){
      console.log('mensaje coincide');
      client.publish(topico1, mensaje2);
      console.log('Publicando mensaje: utpl/IntelGalileo/led OFF ')
    }else if (tweet.text.match('MegaON')){
      console.log('mensaje coincide');
      client.publish(topico2, mensaje1);
      console.log('Publicando mensaje: utpl/ArduinoMega/led ON ')
    }else if (tweet.text.match('MegaOFF')){
      console.log('mensaje coincide');
      client.publish(topico2, mensaje2);
      console.log('Publicando mensaje: utpl/ArduinoMega/led OFF')
    }
    else {
  		console.log('mensaje no coincide');
  	}


});