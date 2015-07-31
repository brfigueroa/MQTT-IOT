![MQTT] (https://git.taw.utpl.edu.ec/uploads/brfigueroa/MQTT-IOT/cfceb0dac0/Dibujo1.jpg)

# Proyecto prtocolos IOT:
Proyecto que se realizó para probar el protocolo de aplicación para IoT llamado MQTT, en el cual se realizaron algunas aplicaciones en la que se utilizó este protocolo.

Se utilizó como broker para todos los ejemplos [Mosquitto](http://mosquitto.org) con soporte a websokets, también se podría utilizar [Hive Mq](http://www.hivemq.com/) este es mucho más fácil de instalar ya que viene con soporte a websockets predeterminado a diferencia de [Mosquitto](http://mosquitto.org) que se debe realizar algunas configuraciones extras.

# Arduino:
Para poder utilizar el protocolo [MQTT] (http://mqtt.org/) en Arduino primero se debe agregar la librería [pubsubclient] (https://github.com/knolleary/pubsubclient) que provee soporte para MQTT. 
para la placa ethernet esta provee de soporte para MQTT v3.

# Intel Galileo:
En el cliente Intel Galileo se trabajó con el framework [cylonjs] (http://cylonjs.com/) creamos un robot cylon, además este framework permite agregar la funcionalidad de MQTT.