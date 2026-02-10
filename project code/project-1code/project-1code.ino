const int knop = 2;
const int ledGeel = 3;
const int ledRood1 = 4;
const int ledRood2 = 5;

void setup() {
  pinMode(ledGeel, OUTPUT);
  pinMode(ledRood1, OUTPUT);
  pinMode(ledRood2, OUTPUT);
  pinMode(knop, INPUT_PULLUP);
  digitalWrite(ledGeel, HIGH);
}

void loop() {
  if (digitalRead(knop) == LOW) {
    digitalWrite(ledGeel, LOW);

    digitalWrite(ledRood1, HIGH);
    digitalWrite(ledRood2, LOW);
    delay(250);

    if (digitalRead(knop) == HIGH) return;

    digitalWrite(ledRood1, LOW);
    digitalWrite(ledRood2, HIGH);
    delay(250);

  } else {
    digitalWrite(ledRood1, LOW);
    digitalWrite(ledRood2, LOW);
    digitalWrite(ledGeel, HIGH);
  }
}
