// Pin‑definities
const int knop = 2;        // Ingang voor de knop (met interne pull‑up)
const int ledGeel = 3;     // Gele LED
const int ledRood1 = 4;    // Eerste rode LED
const int ledRood2 = 5;    // Tweede rode LED

void setup() {
  // Stel alle LED‑pinnen in als uitgang
  pinMode(ledGeel, OUTPUT);
  pinMode(ledRood1, OUTPUT);
  pinMode(ledRood2, OUTPUT);

  // Knop met interne pull‑up (knop LOW = ingedrukt)
  pinMode(knop, INPUT_PULLUP);

  // Gele LED standaard aan
  digitalWrite(ledGeel, HIGH);
}

void loop() {
  // Controleer of de knop is ingedrukt
  if (digitalRead(knop) == LOW) {

    // Gele LED uit wanneer de knop wordt ingedrukt
    digitalWrite(ledGeel, LOW);

    // Eerste rode LED aan, tweede uit
    digitalWrite(ledRood1, HIGH);
    digitalWrite(ledRood2, LOW);
    delay(250);

    // Als knop wordt losgelaten, stop de sequentie
    if (digitalRead(knop) == HIGH) return;

    // Eerste rode LED uit, tweede aan
    digitalWrite(ledRood1, LOW);
    digitalWrite(ledRood2, HIGH);
    delay(250);

  } else {
    // Knop niet ingedrukt: beide rode LEDs uit, gele LED aan
    digitalWrite(ledRood1, LOW);
    digitalWrite(ledRood2, LOW);
    digitalWrite(ledGeel, HIGH);
  }
}
