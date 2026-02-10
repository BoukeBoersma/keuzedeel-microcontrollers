#include <SPI.h>
#include <MFRC522.h>
#include <LiquidCrystal.h>
#include <Keypad.h>

// LCD‑scherm: RS, E, D4, D5, D6, D7
LiquidCrystal lcd(9, 10, A3, A2, A1, A0);

// RFID‑module pinnen
#define SS_PIN A5
#define RST_PIN A4
MFRC522 rfid(SS_PIN, RST_PIN);

// Keypad‑grootte
const byte ROWS = 4;
const byte COLS = 4;

// Keypad‑indeling
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

// Keypad‑pinnen
byte rowPins[ROWS] = {2, 3, 0, 4};  
byte colPins[COLS] = {5, 6, 7, 8};  

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

// Toegestane RFID‑UIDs
String uidBouke = "51:45:0D:02";
String uidMarco = "24:CF:14:17";

// Correcte pincode
String correctCode = "5668";

// Zet UID om naar leesbare HEX‑string
String getUID() {
  String uid = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    uid += String(rfid.uid.uidByte[i], HEX);
    if (i < rfid.uid.size - 1) uid += ":";
  }
  uid.toUpperCase();
  return uid;
}

// Startscherm tonen
void showStart() {
  lcd.clear();
  lcd.print("Pasje scannen...");
}

void setup() {
  lcd.begin(16, 2);
  showStart();

  SPI.begin();
  rfid.PCD_Init();
}

void loop() {

  // Wachten op RFID‑kaart
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  // UID uitlezen
  String uid = getUID();
  String naam = "";

  // Check of UID bekend is
  if (uid == uidBouke) naam = "Bouke";
  if (uid == uidMarco) naam = "Marco";

  // Onbekend pasje → terug naar start
  if (naam == "") {
    showStart();
    rfid.PICC_HaltA();
    return;
  }

  // Bekende gebruiker begroeten
  lcd.clear();
  lcd.print("Hallo ");
  lcd.print(naam);
  delay(1500);

  // Pincode invoer
  lcd.clear();
  lcd.print("Voer code in:");
  lcd.setCursor(0,1);

  String entered = "";

  // Wacht tot 4 cijfers zijn ingevoerd
  while (entered.length() < 4) {
    char key = keypad.getKey();
    if (key && key >= '0' && key <= '9') {
      entered += key;

      // Toon sterretjes
      lcd.setCursor(0,1);
      for (int i = 0; i < entered.length(); i++) {
        lcd.print("*");
      }
    }
  }

  // Code controleren
  if (entered == correctCode) {
    lcd.clear();
    lcd.print("Welkom ");
    lcd.print(naam);
    delay(5000);
  } else {
    lcd.clear();
    lcd.print("Foute code!");
    delay(2000);
  }

  // Terug naar start
  showStart();
  rfid.PICC_HaltA();
}
