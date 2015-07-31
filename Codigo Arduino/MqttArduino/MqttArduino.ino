
#include <SPI.h>
//libreria que permita conectarse con MQTT
#include <PubSubClient.h>
//libreria que permite conectarse a una red a traves de la placa ethernet.
#include <Ethernet.h>

//direccion del broker
#define MQTT_SERVER_NAME "192.168.0.12"
// # puerto de broker
#define MQTT_SERVER_PORT 1883
#define MQTT_CLIENTID   "Arduino_MEGA"
// Topico al cual se subscribira el Arduino
#define MQTT_TOPIC_SUBSCRIBE  "utpl/ArduinoMega/led"
// Topico al cual publicara el Arduino
#define MQTT_TOPIC_PUBLISH   "utpl/ArduinoMega/sensor"

//Direccion MAC de la placa ethernet
byte mac[] = { 0x90, 0xA2, 0x01, 0x02, 0x03, 0x04 };

// creando un objeto PubSubClient
PubSubClient client;

// creando un objeto ethernetClient
EthernetClient eclient;

//Sensores y led
int pinLed = 7;
int pinLuz = A1; //Sensor de LUZ
int pinPoten = A0; // Potenciometro

//buffer para el almacenamiento del mensaje de la funcion buildJson()
char message_buff[100];

void setup() {
  // especificamos que el pin 7 sera de salida esto permitira apagarlo o encenderlo.
  pinMode(pinLed, OUTPUT);

  // inicializar consola de debug en Puerto 9600
  Serial.begin(9600);
  //Verificando si DHCP asignao direccion IP
  if (Ethernet.begin(mac) == 0) {
    Serial.println("No Se pudo Obtener IP");
    return;
  }
  Serial.print("IP:");
  Serial.println(Ethernet.localIP());
  //se crea una instancia del cliente donde se especifica el broker al cual se conectara
  //ademas del puerto, tambien especificamos un callback que es una funcion que se llama cuando llegan
  //mensajes de los topicos a los que se esta subscrito si no se requiere callback, ajústelo a 0.
  client = PubSubClient(MQTT_SERVER_NAME, 1883, callback, eclient);

}

void loop() {
  // put your main code here, to run repeatedly:
  int sensorValue = analogRead(pinLuz);
  int sensorValue1 = analogRead(pinPoten);
  
  // se verifica si el cliente esta conectado
  if (!client.connected()) {
    Serial.println("Conectando servidor MQTT");

    if (client.connect(MQTT_CLIENTID)) {
      String json = buildJson(sensorValue, sensorValue1);
      char jsonStr[200];
      json.toCharArray(jsonStr, 200);
  // el clienete se subcribe al topico 
      client.subscribe(MQTT_TOPIC_SUBSCRIBE);
      Serial.print("Intentando Enviar: \n");
      Serial.println(jsonStr);
      Serial.print("a ");
      Serial.println(MQTT_TOPIC_PUBLISH);

    } else {
      Serial.println("No se pudo conectar");
    }
  }
  client.loop();
  publicar();
  // subscrbir ();
}
// funcion que permite publicar sobre un topico
void publicar () {
  int sensorValue = analogRead(pinLuz);
  int sensorValue1 = analogRead(pinPoten);
  String json = buildJson(sensorValue, sensorValue1);
  char jsonStr[200];
  json.toCharArray(jsonStr, 200);
  client.publish(MQTT_TOPIC_PUBLISH, jsonStr);
  delay(1000);

}
// funcion que permite subscribirse a un topico.
void subscrbir () {
  client.subscribe(MQTT_TOPIC_SUBSCRIBE);
}

//funcion que construye un mensaje con el formato Json
// que publicara los valores de los sensores 
String buildJson(int sensorValue, int sensorValue1) {

  String data = "{";
  data += "\"device\": {";
  data += " \"id\": \"MEGA\",";
  data += "\"luz\": ";
  data += (int)sensorValue;
  data += ",";
  data += "\"sonido\": ";
  data += (int)sensorValue1;
  data += "}";
  data += "}";
  return data;
}

// funcion que maneja los mensajes que llegan del topico al cual se esta subscrito
void callback(char* topic, byte* payload, unsigned int length) {
  int i;

  // crea un buffer de caracteres
  for (i = 0; i < length; i++) {
    message_buff[i] = payload[i];
  }
  message_buff[i] = '\0';

  String msgString = String(message_buff);
//si el mensaje que recibe en igual a OFF, desactiva el LED
  if (msgString.equals("OFF")) {
    digitalWrite(pinLed, LOW);
    Serial.println("Apagando LED");
  }
  //si el mensaje que recibe en igual a ON, activa el LED
  else if (msgString.equals("ON")) {
    digitalWrite(pinLed, HIGH);
    Serial.println("Encendiendo LED");
  }

}

