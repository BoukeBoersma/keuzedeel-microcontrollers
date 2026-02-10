#include <LiquidCrystal.h>
#include <Keypad.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const byte ROWS = 4;
const byte COLS = 4;

char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

byte rowPins[ROWS] = {6, 7, 8, 9};     // R1–R4
byte colPins[COLS] = {10, 13, A1, A0}; // C1–C4

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

String invoer = "";
String getal1 = "";
String getal2 = "";
char operatorChar = 0;
bool operatorGekozen = false;
bool resultaatGetoond = false;

void setup() {
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Arduino");
  lcd.setCursor(0, 1);
  lcd.print("Calculator");
  delay(1500);
  lcd.clear();
}

void loop() {
  char key = keypad.getKey();

  if (key) {
    if (resultaatGetoond) {
      resetAlles();
      resultaatGetoond = false;
    }

    verwerkToets(key);
  }
}

void verwerkToets(char key) {

  if (key == '#') {
    resetAlles();
    return;
  }

  if (key == '*') {
    if (invoer.length() > 0) {
      invoer.remove(invoer.length() - 1);
      lcd.clear();
      lcd.print(invoer);
    }
    return;
  }

  if (key == 'A' || key == 'B' || key == 'C') {
    if (!operatorGekozen && invoer.length() > 0) {
      operatorChar = key;
      operatorGekozen = true;
      invoer += operatorSymbool(key);
      lcd.clear();
      lcd.print(invoer);
    }
    return;
  }

  if (key == 'D') {
    if (operatorGekozen) {
      bereken();
    }
    return;
  }

  // CIJFERS (0–9)
  if (key >= '0' && key <= '9') {
    invoer += key;
    lcd.clear();
    lcd.print(invoer);
  }
}

String operatorSymbool(char op) {
  if (op == 'A') return "+";
  if (op == 'B') return "x";
  if (op == 'C') return "/";
  return "?";
}

void bereken() {
  int pos = invoer.indexOf(operatorSymbool(operatorChar));
  getal1 = invoer.substring(0, pos);
  getal2 = invoer.substring(pos + 1);

  float n1 = getal1.toFloat();
  float n2 = getal2.toFloat();
  float resultaat = 0;

  if (operatorChar == 'A') resultaat = n1 + n2;
  if (operatorChar == 'B') resultaat = n1 * n2;
  if (operatorChar == 'C') {
    if (n2 == 0) {
      lcd.clear();
      lcd.print("Fout: /0");
      resultaatGetoond = true;
      return;
    }
    resultaat = n1 / n2;
  }

  lcd.clear();
  lcd.print(invoer);
  lcd.setCursor(0, 1);
  lcd.print("= ");
  lcd.print(resultaat);

  // Resultaat blijft staan
  resultaatGetoond = true;
}

void resetAlles() {
  invoer = "";
  getal1 = "";
  getal2 = "";
  operatorChar = 0;
  operatorGekozen = false;

  lcd.clear();
}
