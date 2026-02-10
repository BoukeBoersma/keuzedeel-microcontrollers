#include <LiquidCrystal.h>

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int knopJa  = 7;
const int knopNee = 8;

const int ledJa   = 9;
const int ledNee  = 10;

const int aantalVragen = 5;
String vragen[aantalVragen] = {
  "Is de aarde rond?",
  "Is 5 > 10?",
  "Is water nat?",
  "Is 2+2=5?",
  "Is vuur koud?"
};

bool juisteAntwoord[aantalVragen] = {
  true,   // aarde rond? -> JA
  false,  // 5 > 10? -> NEE
  true,   // water nat? -> JA
  false,  // 2+2=5? -> NEE
  false   // vuur koud? -> NEE
};

int huidigeVraag = 0;
int score = 0;

void setup() {
  pinMode(knopJa, INPUT_PULLUP);
  pinMode(knopNee, INPUT_PULLUP);

  pinMode(ledJa, OUTPUT);
  pinMode(ledNee, OUTPUT);

  digitalWrite(ledJa, HIGH);
  digitalWrite(ledNee, HIGH);

  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Arduino Quiz");
  delay(1500);

  startQuiz();
}

void loop() {
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
  huidigeVraag = 0;
  score = 0;

  lcd.clear();
  lcd.print("Nieuwe quiz!");
  delay(1000);

  toonVraag();
}

void toonVraag() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Vraag ");
  lcd.print(huidigeVraag + 1);
  lcd.print("/5");

  lcd.setCursor(0, 1);
  lcd.print(vragen[huidigeVraag]);
}

void verwerkAntwoord(bool antwoordJa) {
  bool goed = (antwoordJa == juisteAntwoord[huidigeVraag]);

  if (goed) {
    score++;
  }

  delay(500);

  huidigeVraag++;

  if (huidigeVraag < aantalVragen) {
    toonVraag();
  } else {
    toonScore();
  }

  // Wachten tot knop los is
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
