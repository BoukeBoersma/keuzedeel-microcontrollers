#include <LiquidCrystal.h>
#include <SoftwareSerial.h>

// LCD: rs, en, d4, d5, d6, d7
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// SoftwareSerial: RX = 8, TX = 9
SoftwareSerial link(8, 9);

// Lampjes
#define LED_RED    A5
#define LED_YELLOW A4
#define LED_GREEN  A3

// Systeemstatus
String buffer = "";
String currentUID = "";
String enteredPIN = "";
bool waitingForPIN = false;

// Bekende kaarten
String UID_MARCO = "51 45 0D 02";
String UID_BOUKE = "24 CF 14 17";

// PIN codes
String PIN_MARCO = "1234";
String PIN_BOUKE = "5678";

// UID NORMALISEREN
String normalizeUID(String uid) {
  uid.trim();
  uid.toUpperCase();

  // dubbele spaties verwijderen
  while (uid.indexOf("  ") != -1) {
    uid.replace("  ", " ");
  }

  return uid;
}

// STARTSCHERM
void showStartScreen() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Scan je pasje");

  waitingForPIN = false;
  enteredPIN = "";
  currentUID = "";

  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_YELLOW, HIGH);
}

void setup() {
  Serial.begin(9600);
  link.begin(9600);

  lcd.begin(16, 2);

  pinMode(LED_RED, OUTPUT);
  pinMode(LED_YELLOW, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);

  digitalWrite(LED_YELLOW, HIGH);

  showStartScreen();
}

void loop() {
  while (link.available()) {
    char c = link.read();

    if (c == '\r') continue;

    if (c == '\n') {
      processMessage(buffer);
      buffer = "";
    } else {
      buffer += c;
    }
  }
}

// BERICHT VERWERKEN
void processMessage(String msg) {
  Serial.print("Ontvangen: ");
  Serial.println(msg);

  if (msg.startsWith("RFID:")) {
    handleRFID(msg.substring(5));
  }

  if (msg.startsWith("KEY:")) {
    handleKey(msg.substring(4));
  }
}

// RFID VERWERKEN
void handleRFID(String uidRaw) {
  String uid = normalizeUID(uidRaw);

  Serial.print("UID ontvangen: ");
  Serial.println(uid);

  if (uid == UID_MARCO || uid == UID_BOUKE) {
    correctRFID(uid);
  } else {
    wrongRFID();
  }
}

void correctRFID(String uid) {
  digitalWrite(LED_YELLOW, LOW);
  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_GREEN, HIGH);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Pasje OK");

  delay(2000);

  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_YELLOW, HIGH);

  currentUID = uid;
  waitingForPIN = true;

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Vul pincode in");
}

void wrongRFID() {
  digitalWrite(LED_YELLOW, LOW);
  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_RED, HIGH);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Dit is niet");
  lcd.setCursor(0, 1);
  lcd.print("correct!");

  delay(2000);

  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_YELLOW, HIGH);

  showStartScreen();
}

// --------------------
// PIN VERWERKEN
// --------------------
void handleKey(String key) {
  if (!waitingForPIN) return;

  if (key == "#") {
    checkPIN();
    return;
  }

  if (key == "*") {
    enteredPIN = "";
    lcd.clear();
    lcd.print("PIN gewist");
    delay(1000);
    lcd.clear();
    lcd.print("Vul pincode in");
    return;
  }

  if (key >= "0" && key <= "9") {
    if (enteredPIN.length() < 4) {
      enteredPIN += key;
      lcd.clear();
      lcd.print("PIN: ");
      for (int i = 0; i < enteredPIN.length(); i++) lcd.print("*");
    }
  }
}

void checkPIN() {
  String correctPIN = "";

  if (currentUID == UID_MARCO) correctPIN = PIN_MARCO;
  if (currentUID == UID_BOUKE) correctPIN = PIN_BOUKE;

  if (enteredPIN == correctPIN) {
    correctPINAction();
  } else {
    wrongPINAction();
  }
}

void correctPINAction() {
  digitalWrite(LED_YELLOW, LOW);
  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_GREEN, HIGH);

  lcd.clear();
  lcd.setCursor(0, 0);

  if (currentUID == UID_MARCO) lcd.print("Welkom Marco");
  if (currentUID == UID_BOUKE) lcd.print("Welkom Bouke");

  delay(2000);

  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_YELLOW, HIGH);

  showStartScreen();
}

void wrongPINAction() {
  digitalWrite(LED_YELLOW, LOW);
  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_RED, HIGH);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Incorrect!");

  delay(2000);

  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_YELLOW, HIGH);

  showStartScreen();
}
