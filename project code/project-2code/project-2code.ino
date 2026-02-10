const int ledRood = 6;
const int ledGeel = 7;
const int ledGroen = 8;
const int knop = 9;

void setup() {
  pinMode(ledRood, OUTPUT);
  pinMode(ledGeel, OUTPUT);
  pinMode(ledGroen, OUTPUT);

  pinMode(knop, INPUT_PULLUP);

  digitalWrite(ledRood, HIGH);
}

void loop() {
  if (digitalRead(knop) == LOW) {
    digitalWrite(ledRood, LOW);
    digitalWrite(ledGroen, HIGH);
    delay(3000);

    digitalWrite(ledGroen, LOW);
    digitalWrite(ledGeel, HIGH);
    delay(3000);

    digitalWrite(ledGeel, LOW);
    digitalWrite(ledRood, HIGH);
  }
}
