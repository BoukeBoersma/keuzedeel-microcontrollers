#include <Keypad.h>

// Grootte van het keypad (4 rijen, 4 kolommen)
const byte ROWS = 4;
const byte COLS = 4;

// Layout van het keypad
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

// Pin‑aansluitingen van de rijen en kolommen
byte rowPins[ROWS] = {6, 7, 8, 9};
byte colPins[COLS] = {10, 11, 12, 13};

// Keypad‑object
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

// LED‑pinnen
const int ledGroen = 3;
const int ledGeel  = 4;
const int ledRood  = 5;

// Variabelen voor ingevoerde code
String ingevoerd = "";            // Wat de gebruiker intikt
String correcteCode = "1234";     // Juiste code

void setup() {
  // LEDs instellen als uitgang
  pinMode(ledGroen, OUTPUT);
  pinMode(ledGeel, OUTPUT);
  pinMode(ledRood, OUTPUT);

  // Starttoestand: geel aan (wachten op invoer)
  digitalWrite(ledGeel, HIGH);
  digitalWrite(ledGroen, LOW);
  digitalWrite(ledRood, LOW);
}

void loop() {
  // Lees een toets van het keypad
  char toets = keypad.getKey();

  // Alleen verder als er een toets is ingedrukt
  if (toets) {

    // '*' = reset invoer
    if (toets == '*') {
      ingevoerd = "";
      digitalWrite(ledGeel, HIGH);
      digitalWrite(ledGroen, LOW);
      digitalWrite(ledRood, LOW);
      return;
    }

    // Voeg cijfers toe aan de ingevoerde code
    if (isDigit(toets)) {
      ingevoerd += toets;
    }

    // Als er 4 cijfers zijn ingevoerd, controleer de code
    if (ingevoerd.length() == 4) {

      digitalWrite(ledGeel, LOW);  // Geel uit tijdens controle

      if (ingevoerd == correcteCode) {
        // Code juist → groen aan
        digitalWrite(ledGroen, HIGH);
        delay(2000);
        digitalWrite(ledGroen, LOW);
      } else {
        // Code fout → rood aan
        digitalWrite(ledRood, HIGH);
        delay(2000);
        digitalWrite(ledRood, LOW);
      }

      // Reset voor volgende poging
      ingevoerd = "";
      digitalWrite(ledGeel, HIGH);
    }
  }
}
