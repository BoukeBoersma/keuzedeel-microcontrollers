// LED‑uitgangen voor RGB‑LED
const int greenLEDPin = 10;   // Groene LED‑kanaal
const int redLEDPin = 11;     // Rode LED‑kanaal
const int blueLEDPin = 9;     // Blauwe LED‑kanaal

// Analoge ingangen voor de kleurensensor
const int redSensorPin = A0;   // Sensor rood kanaal
const int greenSensorPin = A1; // Sensor groen kanaal
const int blueSensorPin = A2;  // Sensor blauw kanaal

// Variabelen voor ruwe sensorwaarden
int redSensorValue = 0;
int greenSensorValue = 0;
int blueSensorValue = 0;

// Variabelen voor omgezette (0–255) waarden
int redValue = 0;
int greenValue = 0;
int blueValue = 0;

void setup() {
  Serial.begin(9600);

  // LED‑pinnen als uitgang
  pinMode(greenLEDPin, OUTPUT);
  pinMode(redLEDPin, OUTPUT);
  pinMode(blueLEDPin, OUTPUT);
}

void loop() {
  // Lees de drie kleurkanalen van de sensor
  redSensorValue = analogRead(redSensorPin);
  delay(5);
  greenSensorValue = analogRead(greenSensorPin);
  delay(5);
  blueSensorValue = analogRead(blueSensorPin);
  delay(5);

  // Toon de ruwe sensorwaarden in de seriële monitor
  Serial.print("Raw Sensor Values \t Red: ");
  Serial.print(redSensorValue);
  Serial.print("\t Green: ");
  Serial.print(greenSensorValue);
  Serial.print("\t Blue: ");
  Serial.println(blueSensorValue);

  // Zet waarden om van 0–1023 naar 0–255
  redValue = redSensorValue / 4;
  greenValue = greenSensorValue / 4;
  blueValue = blueSensorValue / 4;

  // Toon de omgezette waarden
  Serial.print("Mapped Sensor Values \t Red: ");
  Serial.print(redValue);
  Serial.print("\t Green: ");
  Serial.print(greenValue);
  Serial.print("\t Blue: ");
  Serial.println(blueValue);

  // Stuur de RGB‑LED aan op basis van de gemeten kleur
  analogWrite(redLEDPin, redValue);
  analogWrite(greenLEDPin, greenValue);
  analogWrite(blueLEDPin, blueValue);
}
