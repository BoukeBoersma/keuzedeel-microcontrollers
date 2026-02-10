#include <Keypad.h>
#include <SPI.h>
#include <MFRC522.h>
#include <SoftwareSerial.h>

// COMMUNICATIE NAAR ARDUINO 2
SoftwareSerial link(3, A3);  // RX, TX

// RFID CONFIG
#define SS_PIN 10
#define RST_PIN 9
MFRC522 rfid(SS_PIN, RST_PIN);

// KEYPAD CONFIG
const byte ROWS = 4;
const byte COLS = 4;

char keys[ROWS][COLS] = {
  {'0','2','5','8'},
  {'#','3','6','9'},
  {'D','A','B','C'},
  {'*','1','4','7'}
};

byte rowPins[ROWS] = {7, 8, A0, 6};
byte colPins[COLS] = {5, 2, 3, 4};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() {
  Serial.begin(9600);
  link.begin(9600);

  SPI.begin();
  rfid.PCD_Init();

  Serial.println("Arduino 1 actief");
  Serial.println("Keypad + RFID klaar");
  Serial.println("----------------------");
}

void loop() {

  // KEYPAD
  char key = keypad.getKey();
  if (key) {
    Serial.print("Keypad: ");
    Serial.println(key);

    link.print("KEY:");
    link.println(key);
  }

  // RFID (ALLEEN PRINTEN ALS ER ECHT EEN KAART IS)
  if (!rfid.PICC_IsNewCardPresent()) return;
  if (!rfid.PICC_ReadCardSerial()) return;

  // kaart is echt gelezen
  Serial.println("RFID kaart gelezen!");

  String uidString = "";
  link.print("RFID:");

  for (byte i = 0; i < rfid.uid.size; i++) {
    byte b = rfid.uid.uidByte[i];

    // Debug naar Serial Monitor
    if (b < 0x10) Serial.print("0");
    Serial.print(b, HEX);
    Serial.print(" ");

    // Bouw string voor Arduino 2
    if (b < 0x10) uidString += "0";
    uidString += String(b, HEX);
    uidString += " ";
  }

  uidString.toUpperCase();
  uidString.trim();

  Serial.println();
  Serial.print("UID verstuurd: ");
  Serial.println(uidString);
  Serial.println("----------------------");

  link.println(uidString);

  rfid.PICC_HaltA();
}
