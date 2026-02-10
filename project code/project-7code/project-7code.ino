#include <LiquidCrystal.h>

// LCD‑scherm: RS, E, D4, D5, D6, D7
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Knoppen voor JA/NEE
const int knopJa  = 7;
const int knopNee = 8;

// LEDs voor feedback
const int ledJa   = 9;
const int ledNee  = 10;

// Vragen en antwoorden
const int aantalVragen = 5;
String vragen[aantalVragen] = {
  "Is de aarde rond?",
  "Is 5 > 10?",
  "Is water nat?",
  "Is 2+2=5?",
  "Is vuur koud?"
};

// true = JA is juist, false = NEE is juist
bool juisteAntwoord[aantalVragen] = {
  true,
  false,
  true,
  false,
  false
};

int huidigeVraag = 0;   // Index van de huidige vraag
int score = 0;          // Aantal goede antwoorden

void setup() {
  // Knoppen met interne pull‑up
  pinMode(knopJa, INPUT_PULLUP);
  pinMode(knopNee, INPUT_PULLUP);

  // LEDs als uitgang
  pinMode(ledJa, OUTPUT);
  pinMode(ledNee, OUTPUT);

  // Beide LEDs aan als startindicatie
  digitalWrite(ledJa, HIGH);
  digitalWrite(ledNee, HIGH);

  // LCD initialiseren
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Arduino Quiz");
  delay(1500);

  startQuiz();
}

void loop() {
  // Als alle vragen zijn geweest: wacht op nieuwe start
  if (huidigeVraag >= aantalVragen) {
    if (digitalRead(knopJa) == LOW || digitalRead(knopNee) == LOW) {
      delay(300);
      startQuiz();
    }
    return;
  }

  // Normale quizbediening
  if (digitalRead(knopJa) == LOW) {
    verwerkAntwoord(true);
  } else if (digitalRead(knopNee) == LOW) {
    verwerkAntwoord(false);
  }
}

void startQuiz() {
  // Reset quizvariabelen
  huidigeVraag = 0;
  score = 0;

  lcd.clear();
  lcd.print("Nieuwe quiz!");
  delay(1000);

  toonVraag();
}

void toonVraag() {
  lcd.clear();

  // Bovenste regel: vraagnummer
  lcd.setCursor(0, 0);
  lcd.print("Vraag ");
  lcd.print(huidigeVraag + 1);
  lcd.print("/5");

  // Onderste regel: vraagtekst
  lcd.setCursor(0, 1);
  lcd.print(vragen[huidigeVraag]);
}

void verwerkAntwoord(bool antwoordJa) {
  // Controleer of het antwoord klopt
  bool goed = (antwoordJa == juisteAntwoord[huidigeVraag]);

  if (goed) {
    score++;
  }

  delay(500);

  // Ga naar volgende vraag
  huidigeVraag++;

  if (huidigeVraag < aantalVragen) {
    toonVraag();
  } else {
    toonScore();
  }

  // Wachten tot knop wordt losgelaten
  while (digitalRead(knopJa) == LOW || digitalRead(knopNee) == LOW) {}
}

void toonScore() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Je score:");

  lcd.setCursor(0, 1);
  lcd.print(score);
  lcd.print("/");
  lcd.print(aantalVragen);
}
