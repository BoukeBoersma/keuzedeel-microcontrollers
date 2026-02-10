// Pin‑definities voor de drie LEDs en de knop
const int ledRood = 6;     // Rode LED
const int ledGeel = 7;     // Gele LED
const int ledGroen = 8;    // Groene LED
const int knop = 9;        // Knop (met interne pull‑up)

void setup() {
  // Stel alle LED‑pinnen in als uitgang
  pinMode(ledRood, OUTPUT);
  pinMode(ledGeel, OUTPUT);
  pinMode(ledGroen, OUTPUT);

  // Knop als ingang met interne pull‑up (LOW = ingedrukt)
  pinMode(knop, INPUT_PULLUP);

  // Starttoestand: rood aan
  digitalWrite(ledRood, HIGH);
}

void loop() {
  // Controleer of de knop wordt ingedrukt
  if (digitalRead(knop) == LOW) {

    // Rood uit, groen aan (bijv. 'doorgaan')
    digitalWrite(ledRood, LOW);
    digitalWrite(ledGroen, HIGH);
    delay(3000);

    // Groen uit, geel aan (waarschuwing)
    digitalWrite(ledGroen, LOW);
    digitalWrite(ledGeel, HIGH);
    delay(3000);

    // Geel uit, rood weer aan (stop)
    digitalWrite(ledGeel, LOW);
    digitalWrite(ledRood, HIGH);
  }
}
