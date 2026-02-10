#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN A5
#define RST_PIN A4

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  SPI.begin();
  rfid.PCD_Init();
  Serial.begin(9600);
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent()) return;
  if (!rfid.PICC_ReadCardSerial()) return;

  Serial.print("UID: ");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i], HEX);
    if (i < rfid.uid.size - 1) Serial.print(":");
  }
  Serial.println();

  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}
