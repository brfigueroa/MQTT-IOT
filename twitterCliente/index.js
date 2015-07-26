
//Programa que perimte leer los mensajes que publica en twitter un usuario determinado
// y publicar a un topico determinado si el mensaje publicado coincide con mensajes 
// que estan establecidos en este programa.


var Twit = require('twit');
var mqtt = require('mqtt');
// direccion en la cual esta el broker
var serverMqtt = '192.168.1.13';
//Topicos a los cuales se van a publicar
var topico1 = 'utpl/IntelGalileo/led';
var topico2 = 'utpl/ArduinoMega/led';
var mensaje1 = 'ON';
var mensaje2 = 'OFF';
//puerto en el cual esta el broker
var puerto = 1883;

//variables del apiKey de twitter
// agregar sus key y Access_Token  o no podran leer los mensajes de twitter
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

//crea un nuevo cliente MQTT
var client = mqtt.createClient(puerto, serverMqtt);
client.options.reconnectPeriod = 0; 	

//Busca al usuario con el ID 14585199 en twitter
var stream = T.stream('statuses/filter', { follow: '14585199' });

//cualquier mensaje que publique lo compara y si coincide publica el topico con el mensaje
stream.on('tweet', function (tweet) {
  console.log(tweet.text + ' (' + tweet.user.screen_name  + ')');
  //si el mensaje coincide con GalileoON publica al bkoker sobre el topico especificado.
  if (tweet.text.match('GalileoON')){
  	 console.log('mensaje coincide');
     client.publish(topico1, mensaje1);
     console.log('Publicando mensaje: utpl/IntelGalileo/led ON ')
    }
  //si el mensaje coincide con GalileoOFF publica al bkoker sobre el topico especificado.
    else if(tweet.text.match('GalileoOFF')){
      console.log('mensaje coincide');
      client.publish(topico1, mensaje2);
      console.log('Publicando mensaje: utpl/IntelGalileo/led OFF ')
    }
    //si el mensaje coincide con MegaON publica al bkoker sobre el topico especificado.
    else if (tweet.text.match('MegaON')){
      console.log('mensaje coincide');
      client.publish(topico2, mensaje1);
      console.log('Publicando mensaje: utpl/ArduinoMega/led ON ')
    }
    //si el mensaje coincide con MegaOFF publica al bkoker sobre el topico especificado.
    else if (tweet.text.match('MegaOFF')){
      console.log('mensaje coincide');
      client.publish(topico2, mensaje2);
      console.log('Publicando mensaje: utpl/ArduinoMega/led OFF')
    }
    else {
  		console.log('mensaje no coincide');
  	}


});