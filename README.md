![MQTT] (https://git.taw.utpl.edu.ec/uploads/brfigueroa/MQTT-IOT/cfceb0dac0/Dibujo1.jpg)

# MQTT protocolo de aplicación para IoT:
Proyecto que se realizó para probar el protocolo de aplicación para IoT llamado MQTT, en el cual se realizaron algunas aplicaciones en la que se utilizó este protocolo.

Se utilizó como broker para todos los ejemplos [Mosquitto](http://mosquitto.org) con soporte a websokets, también se podría utilizar [Hive Mq](http://www.hivemq.com/) este es mucho más fácil de instalar ya que viene con soporte a websockets predeterminado a diferencia de [Mosquitto](http://mosquitto.org) que se debe realizar algunas configuraciones extras.
Una cosa a tener en cuenta que HiveMq solo soporta 25 clientes conectados ya que este Broker, si fuera el caso y se desea conectar muchos más clientes se deberá adquirir la versión pagada de este, es por esto que una buena opción es el Broker [Mosquitto](http://mosquitto.org) que es  de código abierto, además se lo puede instalar en dispositivos como Intel Galileo, Intel Edison, Beaglebone Black y Raspberry Pi.

Otros brokers que se pueden utilizar son los siguientes:
* [RabbitMQ]( http://rabbitmq.com/)
* [Moquette]( http://code.google.com/p/moquette-mqtt/)
* [Mosca](https://github.com/mcollina/mosca)
* [IBM Websphere MQ Telemetry](http://www-01.ibm.com/software/integration/wmqfamily/telemetry/)
* [Eclipse Paho](http://www.eclipse.org/paho/)
* [HBMQTT](http://community.beerfactory.org/wiki/bin/view/HBMQTT/)
<<<<<<< HEAD

## Arduino:
Para poder utilizar el protocolo [MQTT] (http://mqtt.org/) en Arduino primero se debe instalar la librería [pubsubclient] (https://github.com/knolleary/pubsubclient) que provee soporte para MQTT a la placa ethernet. 

## Intel Galileo:
En el cliente Intel Galileo se trabajó con el framework [cylonjs] (http://cylonjs.com/) creamos un robot cylon, además este framework permite agregar la funcionalidad de MQTT, además de esto se instaló [Intel IoT](https://software.intel.com/es-es/iot/library/galileo-getting-started)que es una distribución de Linux la cual se ejecuta en el dispositivo Intel Galileo. 

## Librerias
Aunque hay una serie de opciones disponibles para los desarrolladores interesados en MQTT, no todas las API de cliente se que enumeran a continuación son vigentes. Algunos están en una fase inicial o experimental de desarrollo, mientras que otros son estables y maduros. Además, algunos pueden no ofrecer soporte completo para todas las características de la última especificación MQTT - por ejemplo, algunos sólo pueden soportar QoS 0, no incluyen autenticación, etc.

####Actionscript

*  [as3MQTT](https://github.com/yangboz/as3MQTT)

####Bash

* see [Shell Script](#shell-script), below

####C

*  [Eclipse Paho C] (https://www.eclipse.org/paho/clients/c/)

*  [Eclipse Paho Embedded C] (https://www.eclipse.org/paho/clients/c/embedded/)

*  [libmosquitto](http://mosquitto.org)

*  [libemqtt](https://github.com/menudoproblema/libemqtt) - an embedded C client

####C++

*  [Eclipse Paho C++] (https://www.eclipse.org/paho/clients/cpp/)

*  [libmosquittopp](http://mosquitto.org)

*  [Eclipse Paho Embedded C++] (https://www.eclipse.org/paho/clients/c/embedded/)

####Clojure

*  [Machine Head](http://clojuremqtt.info)

*  [Clojure MQTT Codec for Netty](https://github.com/xively/clj-mqtt/)

####Dart

*  [mqtt.dart](http://pub.dartlang.org/packages/mqtt)

####Delphi

*  [TMQTTClient](http://jamiei.com/code/TMQTTClient.zip) ([more information](http://jamiei.com/blog/code/mqtt-client-library-for-delphi/))

####Erlang

*  [erlmqtt](https://github.com/squaremo/erlmqtt)

*  [emqttc](https://github.com/emqtt/emqttc) - Erlang MQTT Client

*  [mqtt4erl](http://code.google.com/p/mqtt4erl/)

*  [my-mqtt4erl](http://code.google.com/p/my-mqtt4erl/) - updated fork of mqtt4erl

####Elixir

*  [hulaaki](https://github.com/suvash/hulaaki)

####Go

*  [Eclipse Paho Go](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.golang.git/)

####Haskell

* [mqtt-hs](http://hackage.haskell.org/package/mqtt-hs)

####Java

*  [Eclipse Paho Java](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.java.git/)

*  [Xenqtt](http://xenqtt.sf.net) Includes a client library, mock broker for unit/integration testing, and applications to support enterprise needs like using a cluster of servers as a single client, an HTTP gateway, etc.

*  [MeQanTT](https://github.com/AlbinTheander/MeQanTT)

*  [Fusesource mqtt-client](https://github.com/fusesource/mqtt-client)

*  [moquette](http://code.google.com/p/moquette-mqtt/)

*  [ "MA9B" zip of 1/2 dozen mobile clients source code. Includes Android-optimized Java source that works with Android notifications, based on Paho](http://www-933.ibm.com/support/fixcentral/swg/selectFix?product=ibm%2FWebSphere%2FWebSphere+MQ&fixids=1.0.0.1-WS-MQCP-MA9B&source=dbluesearch&function=fixId&parent=ibm/WebSphere )

*  [IA92](http://www-01.ibm.com/support/docview.wss?rs=171&uid=swg24006006&loc=en_US&cs=utf-8&lang=en) - *deprecated* IBM IA92 support pack, use Eclipse Paho GUI client instead. A useful MQTT Java swing GUI for publishing & subscribing. The Eclipse Paho GUI is identical but uses newer client code

####Javscript / Node.js

*  [Eclipse Paho HTML5 JavaScript over WebSocket.](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.javascript.git/)

*  [mqtt.js](https://github.com/adamvr/MQTT.js)

*  [node_mqtt_client](https://github.com/yilun/node_mqtt_client) ([more information](http://ceit.uq.edu.au/content/simple-mqtt-cient-nodejs))

*  [IBM-provided PhoneGap / Apache Cordova MQTT plug-in for Android](http://www-01.ibm.com/support/docview.wss?rs=171&uid=swg24033580&loc=en_US&cs=utf-8&lang=en) - JavaScript API is identical to Eclipse Paho HTML5 JavaScript

*  [Ascoltatori](https://github.com/mcollina/ascoltatori) - a node.js pub/sub library that allows access to Redis, AMQP, MQTT and ZeroMQ with the same API.

####LotusScript

*  [MQTT From LotusScript](https://tingenek.wordpress.com/2011/11/30/mqtt-with-lotus-notes/)

####Lua

*  [Eclipse Paho Lua](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.lua.git/)

####.NET / dotNET

*  [MqttDotNet](http://sourceforge.net/projects/mqttdotnet/)

*  [nMQTT](https://github.com/markallanson/nmqtt)

*  [M2MQTT](https://m2mqtt.codeplex.com/)

*  [KittyHawkMQ] (http://www.kittyhawkmq.com/)

####Objective-C

*  [mqttIO-objC](https://github.com/m2mIO/mqttIO-objC)

*  [libmosquitto](https://mosquitto.org) - via wrappers ([example](https///github.com/njh/marquette))

*  [MQTTKit](https://github.com/jmesnil/MQTTKit) ([sample app](https///github.com/jmesnil/MQTTExample))

*  ["MA9B" zip of 1/2 dozen mobile clients source code including Objective-C](http://www-933.ibm.com/support/fixcentral/swg/selectFix?product=ibm%2FWebSphere%2FWebSphere+MQ&fixids=1.0.0.1-WS-MQCP-MA9B&source=dbluesearch&function=fixId&parent=ibm/WebSphere)

####OCaml
* [mqtt_client](https://github.com/philtomson/mqtt_client)

####Perl

*  [net-mqtt-perl](https://github.com/beanz/net-mqtt-perl)

*  [anyevent-mqtt-perl](https://github.com/beanz/anyevent-mqtt-perl)

*  [WebSphere-MQTT-Client](http://search.cpan.org/dist/WebSphere-MQTT-Client/)

*  Net::MQTT::Simple [cpan](https://metacpan.org/pod/Net::MQTT::Simple) [github](https://github.com/Juerd/Net-MQTT-Simple)

####PHP

*  [phpMQTT](http://github.com/bluerhinos/phpMQTT)

*  [Mosquitto-PHP](https://github.com/mgdm/Mosquitto-PHP)

*  [sskaje's MQTT library](http://github.com/sskaje/mqtt)

####Python

*  [Eclipse Paho Python](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.python.git/) - originally the mosquitto Python client

*  [nyamuk](https://github.com/iwanbk/nyamuk)

*  [MQTT for twisted python](https://github.com/adamvr/MQTT-For-Twisted-Python)

####REXX

*  [REXX MQTT](https://github.com/DougieLawson/REXX_MQTT)

####Ruby

*  [ruby-mqtt](https://github.com/njh/ruby-mqtt)

*  [em-mqtt](https://rubygems.org/gems/em-mqtt)

*  [mosquitto](https://github.com/xively/mosquitto)

####Shell Script

*  [bish-bosh](https://github.com/raphaelcohn/bish-bosh), supports bash, ash (including BusyBox), pdksh and mksh.

####Swift

* [CocoaMQTT](https://github.com/emqtt/CocoaMQTT) - An MQTT client for iOS and OS X written with Swift

####Tcl

*  [tcl-mqtt](https://github.com/Tingenek/tcl-mqtt)



=======

### Arduino:
Para poder utilizar el protocolo [MQTT] (http://mqtt.org/) en Arduino primero se debe instalar la librería [pubsubclient] (https://github.com/knolleary/pubsubclient) que provee soporte para MQTT. 

### Intel Galileo:
En el cliente Intel Galileo se trabajó con el framework [cylonjs] (http://cylonjs.com/) creamos un robot cylon, además este framework permite agregar la funcionalidad de MQTT, además de esto se instaló [Intel IoT](https://software.intel.com/es-es/iot/library/galileo-getting-started)que es una distribución de Linux la cual se ejecuta en el dispositivo Intel Galileo. 

## Librerias
Aunque hay una serie de opciones disponibles para los desarrolladores interesados en MQTT, no todas las API de cliente se que enumeran a continuación son vigentes. Algunos están en una fase inicial o experimental de desarrollo, mientras que otros son estables y maduros. Además, algunos pueden no ofrecer soporte completo para todas las características de la última especificación MQTT - por ejemplo, algunos sólo pueden soportar QoS 0, no incluyen autenticación, etc.

#### Actionscript
*  [as3MQTT](https://github.com/yangboz/as3MQTT)

#### Bash
* see [Shell Script](#shell-script), below

#### C
*  [Eclipse Paho C] (https://www.eclipse.org/paho/clients/c/)
*  [Eclipse Paho Embedded C] (https://www.eclipse.org/paho/clients/c/embedded/)
*  [libmosquitto](http://mosquitto.org)
*  [libemqtt](https://github.com/menudoproblema/libemqtt) - an embedded C client

#### C++
*  [Eclipse Paho C++] (https://www.eclipse.org/paho/clients/cpp/)
*  [libmosquittopp](http://mosquitto.org)
*  [Eclipse Paho Embedded C++] (https://www.eclipse.org/paho/clients/c/embedded/)

#### Clojure
*  [Machine Head](http://clojuremqtt.info)

*  [Clojure MQTT Codec for Netty](https://github.com/xively/clj-mqtt/)

#### Dart
*  [mqtt.dart](http://pub.dartlang.org/packages/mqtt)

#### Delphi
*  [TMQTTClient](http://jamiei.com/code/TMQTTClient.zip) ([more information](http://jamiei.com/blog/code/mqtt-client-library-for-delphi/))

#### Erlang
*  [erlmqtt](https://github.com/squaremo/erlmqtt)
*  [emqttc](https://github.com/emqtt/emqttc) - Erlang MQTT Client
*  [mqtt4erl](http://code.google.com/p/mqtt4erl/)
*  [my-mqtt4erl](http://code.google.com/p/my-mqtt4erl/) - updated fork of mqtt4erl

#### Elixir
*  [hulaaki](https://github.com/suvash/hulaaki)

#### Go
*  [Eclipse Paho Go](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.golang.git/)

#### Haskell
* [mqtt-hs](http://hackage.haskell.org/package/mqtt-hs)

#### Java
*  [Eclipse Paho Java](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.java.git/)
*  [Xenqtt](http://xenqtt.sf.net) Includes a client library, mock broker for unit/integration testing, and applications to support enterprise needs like using a cluster of servers as a single client, an HTTP gateway, etc.
*  [MeQanTT](https://github.com/AlbinTheander/MeQanTT)
*  [Fusesource mqtt-client](https://github.com/fusesource/mqtt-client)
*  [moquette](http://code.google.com/p/moquette-mqtt/)
*  [ "MA9B" zip of 1/2 dozen mobile clients source code. Includes Android-optimized Java source that works with Android notifications, based on Paho](http://www-933.ibm.com/support/fixcentral/swg/selectFix?product=ibm%2FWebSphere%2FWebSphere+MQ&fixids=1.0.0.1-WS-MQCP-MA9B&source=dbluesearch&function=fixId&parent=ibm/WebSphere )
*  [IA92](http://www-01.ibm.com/support/docview.wss?rs=171&uid=swg24006006&loc=en_US&cs=utf-8&lang=en) - *deprecated* IBM IA92 support pack, use Eclipse Paho GUI client instead. A useful MQTT Java swing GUI for publishing & subscribing. The Eclipse Paho GUI is identical but uses newer client code

#### Javscript / Node.js
*  [Eclipse Paho HTML5 JavaScript over WebSocket.](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.javascript.git/)
*  [mqtt.js](https://github.com/adamvr/MQTT.js)
*  [node_mqtt_client](https://github.com/yilun/node_mqtt_client) ([more information](http://ceit.uq.edu.au/content/simple-mqtt-cient-nodejs))
*  [IBM-provided PhoneGap / Apache Cordova MQTT plug-in for Android](http://www-01.ibm.com/support/docview.wss?rs=171&uid=swg24033580&loc=en_US&cs=utf-8&lang=en) - JavaScript API is identical to Eclipse Paho HTML5 JavaScript
*  [Ascoltatori](https://github.com/mcollina/ascoltatori) - a node.js pub/sub library that allows access to Redis, AMQP, MQTT and ZeroMQ with the same API.

#### LotusScript
*  [MQTT From LotusScript](https://tingenek.wordpress.com/2011/11/30/mqtt-with-lotus-notes/)

#### Lua
*  [Eclipse Paho Lua](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.lua.git/)

#### .NET / dotNET
*  [MqttDotNet](http://sourceforge.net/projects/mqttdotnet/)
*  [nMQTT](https://github.com/markallanson/nmqtt)
*  [M2MQTT](https://m2mqtt.codeplex.com/)
*  [KittyHawkMQ] (http://www.kittyhawkmq.com/)

#### Objective-C
*  [mqttIO-objC](https://github.com/m2mIO/mqttIO-objC)
*  [libmosquitto](https://mosquitto.org) - via wrappers ([example](https///github.com/njh/marquette))
*  [MQTTKit](https://github.com/jmesnil/MQTTKit) ([sample app](https///github.com/jmesnil/MQTTExample))
*  ["MA9B" zip of 1/2 dozen mobile clients source code including Objective-C](http://www-933.ibm.com/support/fixcentral/swg/selectFix?product=ibm%2FWebSphere%2FWebSphere+MQ&fixids=1.0.0.1-WS-MQCP-MA9B&source=dbluesearch&function=fixId&parent=ibm/WebSphere)

#### OCaml
* [mqtt_client](https://github.com/philtomson/mqtt_client)

#### Perl
*  [net-mqtt-perl](https://github.com/beanz/net-mqtt-perl)
*  [anyevent-mqtt-perl](https://github.com/beanz/anyevent-mqtt-perl)
*  [WebSphere-MQTT-Client](http://search.cpan.org/dist/WebSphere-MQTT-Client/)
*  Net::MQTT::Simple [cpan](https://metacpan.org/pod/Net::MQTT::Simple) [github](https://github.com/Juerd/Net-MQTT-Simple)

#### PHP
*  [phpMQTT](http://github.com/bluerhinos/phpMQTT)
*  [Mosquitto-PHP](https://github.com/mgdm/Mosquitto-PHP)
*  [sskaje's MQTT library](http://github.com/sskaje/mqtt)

#### Python
*  [Eclipse Paho Python](http://git.eclipse.org/c/paho/org.eclipse.paho.mqtt.python.git/) - originally the mosquitto Python client
*  [nyamuk](https://github.com/iwanbk/nyamuk)
*  [MQTT for twisted python](https://github.com/adamvr/MQTT-For-Twisted-Python)

#### REXX
*  [REXX MQTT](https://github.com/DougieLawson/REXX_MQTT)

#### Ruby
*  [ruby-mqtt](https://github.com/njh/ruby-mqtt)
*  [em-mqtt](https://rubygems.org/gems/em-mqtt)
*  [mosquitto](https://github.com/xively/mosquitto)

#### Shell Script
*  [bish-bosh](https://github.com/raphaelcohn/bish-bosh), supports bash, ash (including BusyBox), pdksh and mksh.

#### Swift
* [CocoaMQTT](https://github.com/emqtt/CocoaMQTT) - An MQTT client for iOS and OS X written with Swift

#### Tcl
*  [tcl-mqtt](https://github.com/Tingenek/tcl-mqtt)
>>>>>>> 0d00dd8480a8e6c5ee2319bc5cc439aa09711403
