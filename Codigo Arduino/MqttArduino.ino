#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>

PubSubClient client;

// LED
int ledPin = 4;
// Sensor Luz A
int sensorPinIn = 0;

byte mac[] = { 0x98, 0x4F, 0xEE, 0x01, 0xC8, 0x7F }; // Mac Ip, no necesaria si DHCP
IPAddress ip(192, 168, 1, 17); // Mi Ip
byte serverIp[] = { 192, 168, 1, 3 }; // Server Ip

unsigned long time;
char message_buff[ 100 ];

void setup() {
  // inicializar pin led como OUTPUT.
  pinMode( ledPin, OUTPUT );
  // inicializar consola de debug en Puerto 9600
  Serial.begin( 9600 );
  Serial.println();
  Serial.println( "Start mqtClient" );

  // Configurar conexion a red
  if ( Ethernet.begin( mac ) == 0 ) {
      Serial.println( "Failed to configure Ethernet using DHCP" );
    	// if DHCP fails, start with a hard-coded address:
      Ethernet.begin( mac, ip );
  }
  Serial.println( "connect to server..." );  
  
  client = PubSubClient( serverIp, 1883, callback, ethClient );

  Serial.println( "Setup ended" );
}

void loop() {
  // Bloque de reconexion del cliente
  if ( !client.connected() ) {
    Serial.println( "try connect client ..." );
    client.connect( "arduino-mqtt" );
    Serial.println( "auth ok" );
    // Suscribir cliente al canal ArduinoTopico
    client.subscribe( "ArduinoReceiveTopic" );
  }

  // leer sensor de luz (photocell)
  int lightRead = analogRead( sensorPinIn );

  // publicar lectura cada 1 segundo
  if ( millis() > ( time + 1000 ) ) {
    time = millis();
    // Componer mensaje json
    //String pubString = "{\"report\":{\"light\": \"" + String( lightRead ) + "\"}}";
    String pubString = String( lightRead );

    pubString.toCharArray( message_buff, pubString.length() + 1 );
    // publicar al canal Send Topico
    client.publish( "ArduinoSendTopic ", message_buff );
  }

  // procesado de loop ordinario del cliente MQTT 
  client.loop();
}

// recepcion del mensaje del topico suscrito
void callback( char* topic, byte* payload, unsigned int length ) {
  int i = 0;
  // creacion del buffer de recepcion
  // Quito los 2 primeros bytes, Bienen mal, ¿caracteres de longitud?
  for( i = 2; i < length; i++ ) {
    message_buff[ i - 2 ] = payload[ i ];
  }
 // message_buff[ i - 2 ] = '';

  String msgString = String( message_buff );
  Serial.println( msgString );

  // Procesar el mensaje. Encendido o apagado del LED
  if ( msgString.equals( "OFF" )) {
    analogWrite( ledPin, LOW );
  }
  else if ( msgString.equals( "ON" )) {{
    analogWrite( ledPin, HIGH );
  }
}
