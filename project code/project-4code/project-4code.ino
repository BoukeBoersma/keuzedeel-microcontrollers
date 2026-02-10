#include <Keypad.h>

const byte ROWS = 4;
const byte COLS = 4;

char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte rowPins[ROWS] = {6, 7, 8, 9};
byte colPins[COLS] = {10, 11, 12, 13};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

const int ledGroen = 3;
const int ledGeel  = 4;
const int ledRood  = 5;

String ingevoerd = "";
String correcteCode = "1234";

void setup() {
  pinMode(ledGroen, OUTPUT);
  pinMode(ledGeel, OUTPUT);
  pinMode(ledRood, OUTPUT);

  digitalWrite(ledGeel, HIGH);
  digitalWrite(ledGroen, LOW);
  digitalWrite(ledRood, LOW);
}

void loop() {
  char toets = keypad.getKey();

  if (toets) {

    if (toets == '*') {
      ingevoerd = "";
      digitalWrite(ledGeel, HIGH);
      digitalWrite(ledGroen, LOW);
      digitalWrite(ledRood, LOW);
      return;
    }

    if (isDigit(toets)) {
      ingevoerd += toets;
    }

    if (ingevoerd.length() == 4) {

      digitalWrite(ledGeel, LOW);

      if (ingevoerd == correcteCode) {
        digitalWrite(ledGroen, HIGH);
        delay(2000);
        digitalWrite(ledGroen, LOW);
      } else {
        digitalWrite(ledRood, HIGH);
        delay(2000);
        digitalWrite(ledRood, LOW);
      }

      ingevoerd = "";
      digitalWrite(ledGeel, HIGH);
    }
  }
}
