#include <SPI.h>
#include <MFRC522.h>

// RFID‑module pinnen
#define SS_PIN 10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);   // RFID‑object

// LED‑pinnen
const int ledGroen = 3;
const int ledGeel  = 4;
const int ledRood  = 5;

// Correcte toegangs‑ID (hexadecimaal, spaties tussen bytes)
String correcteID = "51 45 0D 02";

// Variabele voor de gescande ID
String gelezenID = "";

void setup() {
  Serial.begin(9600);
  SPI.begin();          // Start SPI‑communicatie
  rfid.PCD_Init();      // Initialiseer RFID‑lezer

  // LEDs instellen als uitgang
  pinMode(ledGroen, OUTPUT);
  pinMode(ledGeel, OUTPUT);
  pinMode(ledRood, OUTPUT);

  // Starttoestand: geel aan (wachten op kaart)
  digitalWrite(ledGeel, HIGH);
}

void loop() {
  // Controleer of er een nieuwe kaart aanwezig is
  if (!rfid.PICC_IsNewCardPresent()) return;

  // Lees de UID van de kaart
  if (!rfid.PICC_ReadCardSerial()) return;

  // Zet UID om naar een leesbare hex‑string
  gelezenID = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    char buffer[3];
    sprintf(buffer, "%02X", rfid.uid.uidByte[i]);  // Byte → hex string
    gelezenID += buffer;
    if (i < rfid.uid.size - 1) gelezenID += " ";
  }

  // Toon de gescande ID
  Serial.print("Gescande ID: ");
  Serial.println(gelezenID);

  digitalWrite(ledGeel, LOW);   // Geel uit tijdens controle

  // Vergelijk gescande ID met de correcte ID
  if (gelezenID == correcteID) {
    digitalWrite(ledGroen, HIGH);   // Toegang toegestaan
    delay(2000);
    digitalWrite(ledGroen, LOW);
  } else {
    digitalWrite(ledRood, HIGH);    // Toegang geweigerd
    delay(2000);
    digitalWrite(ledRood, LOW);
  }

  // Terug naar wachtstand
  digitalWrite(ledGeel, HIGH);

  // Stop communicatie met de kaart
  rfid.PICC_HaltA();
}
