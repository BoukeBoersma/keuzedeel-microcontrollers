#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);

const int ledGroen = 3;
const int ledGeel  = 4;
const int ledRood  = 5;

String correcteID = "51 45 0D 02";

String gelezenID = "";

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();

  pinMode(ledGroen, OUTPUT);
  pinMode(ledGeel, OUTPUT);
  pinMode(ledRood, OUTPUT);

  digitalWrite(ledGeel, HIGH);
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent()) return;
  if (!rfid.PICC_ReadCardSerial()) return;

  gelezenID = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    char buffer[3];
    sprintf(buffer, "%02X", rfid.uid.uidByte[i]);
    gelezenID += buffer;
    if (i < rfid.uid.size - 1) gelezenID += " ";
  }

  Serial.print("Gescande ID: ");
  Serial.println(gelezenID);

  digitalWrite(ledGeel, LOW);

  if (gelezenID == correcteID) {
    digitalWrite(ledGroen, HIGH);
    delay(2000);
    digitalWrite(ledGroen, LOW);
  } else {
    digitalWrite(ledRood, HIGH);
    delay(2000);
    digitalWrite(ledRood, LOW);
  }

  digitalWrite(ledGeel, HIGH);
  rfid.PICC_HaltA();
}
