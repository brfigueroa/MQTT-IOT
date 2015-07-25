var Cylon = require('cylon')
Cylon.robot({
        name: "Mr.Robot",
        connections:{
        galileo:{adaptor: 'intel-iot'},
        server:{adaptor: 'mqtt', host:'mqtt://192.168.0.12:1883'}
},

devices:{
        luz:{ driver:  "analogSensor", pin: 0, connection:"galileo"},
        temperatura: { driver: "analogSensor", pin: 1, connection:"galileo"},
        led : {driver:"led", pin:4, connection:"galileo"},
        pantalla :{driver:"upm-jhd1313m1", connection:"galileo"}
},

escibirPantalla: function(message){
        var that=this;
        var str=message.toString();
        while(str.length <16){
                str = str+"";

        }
        that.pantalla.setCursor(0,0);

 that.pantalla.setCursor(0,0);
        that.pantalla.write(str);
        that.pantalla.setColor(0,255,0);
//      that.pantalla.clear;
},

work: function(my){


        my.server.subscribe('utpl/IntelGalileo/led');

        my.server.on('message', function(topic,data){
                console.log(topic+ ":" + data);

                if (data== "ON"){
                        my.led.turnOn();
                }else if(data=="OFF"){
                        my.led.turnOff();
                }
        });


        every((1).seconds(), function(){
	 analogValue = my.luz.analogRead();
                analogValue1 = my.temperatura.analogRead();
        //      console.log("sensor de Luz: " + analogValue);
        //      console.log("sensor de Ruido: " + analogValue1);
                var data = '{"device":{"id":"Galileo" ,"luz":';

                var lums  = analogValue.toString();
                var sonido = analogValue1.toString();

                var data1 = data + lums + ',"sonido":'+ sonido +'}}' ;

                my.escibirPantalla("Luz:"+lums+"Sonido:"+sonido);
        //      console.log(data1);

                my.server.publish("utpl/IntelGalileo/sensor",data1);

        });
     }
}).start();
