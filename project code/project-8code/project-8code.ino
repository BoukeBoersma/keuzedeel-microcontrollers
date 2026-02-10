#include <LiquidCrystal.h>
#include <Keypad.h>

// LCD‑scherm: RS, E, D4, D5, D6, D7
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

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

// Pin‑aansluitingen voor rijen en kolommen
byte rowPins[ROWS] = {6, 7, 8, 9};     // R1–R4
byte colPins[COLS] = {10, 13, A1, A0}; // C1–C4

// Keypad‑object
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

// Variabelen voor invoer en berekening
String invoer = "";          // Volledige invoer zoals getoond op LCD
String getal1 = "";          // Eerste operand
String getal2 = "";          // Tweede operand
char operatorChar = 0;       // Gekozen operator (A,B,C)
bool operatorGekozen = false;
bool resultaatGetoond = false; // Blokkeert nieuwe invoer tot reset

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

  // Als er een toets is ingedrukt
  if (key) {

    // Als er net een resultaat stond, eerst resetten
    if (resultaatGetoond) {
      resetAlles();
      resultaatGetoond = false;
    }

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

  // Cijfers (0–9)
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
      resultaatGetoond = true;
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

  // Resultaat blijft staan tot nieuwe invoer
  resultaatGetoond = true;
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
