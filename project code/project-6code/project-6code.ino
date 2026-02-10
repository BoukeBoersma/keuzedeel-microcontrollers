#include <LiquidCrystal.h>
#include <Keypad.h>

// LCD‑scherm: RS, E, D4, D5, D6, D7
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Keypad‑grootte
const byte ROWS = 4;
const byte COLS = 4;

// Keypad‑indeling
char keys[ROWS][COLS] = {
  {'1','2','A','3'},
  {'4','5','B','6'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};

// Pin‑aansluitingen voor rijen en kolommen
byte rowPins[ROWS] = {6, 7, 8, 9};
byte colPins[COLS] = {10, 13, A0, A1};

// Keypad‑object
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

// Variabelen voor invoer en berekening
String invoer = "";          // Volledige invoer zoals getoond op LCD
String getal1 = "";          // Eerste operand
String getal2 = "";          // Tweede operand
char operatorChar = 0;       // Gekozen operator (A,B,C)
bool operatorGekozen = false;

void setup() {
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Arduino Calc");
  delay(1500);
  lcd.clear();
}

void loop() {
  char key = keypad.getKey();

  // Alleen verwerken als er een toets is ingedrukt
  if (key) {
    verwerkToets(key);
  }
}

void verwerkToets(char key) {

  // '#' = reset calculator
  if (key == '#') {
    resetAlles();
    return;
  }

  // '*' = backspace
  if (key == '*') {
    if (invoer.length() > 0) {
      invoer.remove(invoer.length() - 1);
      lcd.clear();
      lcd.print(invoer);
    }
    return;
  }

  // Operatoren: A = +, B = x, C = /
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

  // 'D' = berekenen
  if (key == 'D') {
    if (operatorGekozen) {
      bereken();
    }
    return;
  }

  // Cijfers toevoegen aan invoer
  if (key >= '0' && key <= '9') {
    invoer += key;
    lcd.clear();
    lcd.print(invoer);
  }
}

// Zet operator‑letter om naar symbool
String operatorSymbool(char op) {
  if (op == 'A') return "+";
  if (op == 'B') return "x";
  if (op == 'C') return "/";
  return "?";
}

void bereken() {
  // Zoek positie van operator in de invoer
  int pos = invoer.indexOf(operatorSymbool(operatorChar));

  // Splits invoer in twee getallen
  getal1 = invoer.substring(0, pos);
  getal2 = invoer.substring(pos + 1);

  float n1 = getal1.toFloat();
  float n2 = getal2.toFloat();
  float resultaat = 0;

  // Uitvoeren van de juiste berekening
  if (operatorChar == 'A') resultaat = n1 + n2;
  if (operatorChar == 'B') resultaat = n1 * n2;
  if (operatorChar == 'C') {
    if (n2 == 0) {
      lcd.clear();
      lcd.print("Fout: /0");
      delay(1500);
      resetAlles();
      return;
    }
    resultaat = n1 / n2;
  }

  // Toon resultaat
  lcd.clear();
  lcd.print(invoer);
  lcd.setCursor(0, 1);
  lcd.print("= ");
  lcd.print(resultaat);

  delay(2000);
  resetAlles();
}

void resetAlles() {
  // Reset alle variabelen en maak LCD leeg
  invoer = "";
  getal1 = "";
  getal2 = "";
  operatorChar = 0;
  operatorGekozen = false;

  lcd.clear();
}
