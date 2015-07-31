
var Cylon = require('cylon')
//
Cylon.robot({
        name: "Mr.Robot",
        connections:{
        galileo:{adaptor: 'intel-iot'},
        server:{adaptor: 'mqtt', host:'mqtt://192.168.0.12:1883'}
},

// dispositivos los cuales esta conectados al galileo
devices:{
        luz:{ driver:  "analogSensor", pin: 0, connection:"galileo"},
        temperatura: { driver: "analogSensor", pin: 1, connection:"galileo"},
        led : {driver:"led", pin:4, connection:"galileo"},
        pantalla :{driver:"upm-jhd1313m1", connection:"galileo"}
},

// funcion para que presente los valores en panatalla lcd 
// que se encuentra conectada al dispositivo.
escibirPantalla: function(message){
        var that=this;
        var str=message.toString();
        while(str.length <16){
                str = str+"";

        }

        that.pantalla.setCursor(0,0);
        that.pantalla.write(str);
        that.pantalla.setColor(0,255,0);

},

work: function(my){

        //se subscribe al topico especificado
        my.server.subscribe('utpl/IntelGalileo/led');
        my.server.on('message', function(topic,data){
        console.log(topic+ ":" + data);
        // si el mensaje coincide enciende el led
        if (data== "ON"){
            my.led.turnOn();
                // si el mensaje coincide apaga el led
        }else if(data=="OFF"){
            my.led.turnOff();
        }
});

    //Espera un segundo para publicar cada mensaje.
    every((1).seconds(), function(){
        analogValue = my.luz.analogRead();
        analogValue1 = my.temperatura.analogRead();
        // mensaje que se publicara en formato Json
        var data = '{"device":{"id":"Galileo" ,"luz":'analogValue.toString',"sonido": 'analogValue1.toString'}}';
        my.escibirPantalla("Luz: "+lums+"Sonido: "+sonido);
        //publica un nuevo mensaje al topico
        my.server.publish("utpl/IntelGalileo/sensor",data);

        });
     }
}).start();
