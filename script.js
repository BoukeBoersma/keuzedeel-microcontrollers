// Projecten automatisch genereren
const projects = [];

// Helper: YouTube URL → embed URL
function convertToEmbed(url) {
  if (!url.includes("youtu")) return url;

  // Shorts → embed
  if (url.includes("shorts")) {
    const id = url.split("/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // Normale YouTube links
  const id = url.split("v=")[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${id}`;
}

// PROJECT 1 MET VOLLEDIGE INHOUD
projects.push({
  title: "LED‑Signaleringssysteem met Schakelaar",
videoSrc: "https://www.youtube.com/embed/nOrnRGMs_LI",
  description: "In dit project bouwde ik een LED‑signaleringssysteem dat reageert op een schakelaar. Het systeem toont basisprincipes van digitale input, output en logische aansturing met een Arduino.",
  fullText: `
1. Inleiding

Voor het keuzedeel Programmeren van microcontrollers heb ik een eerste project gerealiseerd waarbij drie lampjes (LED’s) en een schakelaar worden aangestuurd met een Arduino‑microcontroller. Het doel van dit project is om een eenvoudige maar functionele schakeling te bouwen die reageert op gebruikersinput en verschillende outputs aanstuurt op basis van logica in de code.

Dit project sluit aan bij de kerntaak: “Realiseert de aansturing van apparatuur door middel van microcontrollers.”

2. Doel van het project

Het doel is om een werkende schakeling te maken waarbij:

• Lampje 1 (geel) standaard aan staat.  
• Wanneer de schakelaar wordt ingedrukt:  
  – Lampje 1 gaat uit.  
  – Lampje 2 en 3 (rood) knipperen om en om met een interval van 0,5 seconde.  
• Wanneer de schakelaar wordt losgelaten:  
  – Lampje 2 en 3 gaan uit.  
  – Lampje 1 gaat weer aan.

Dit project demonstreert basiskennis van digitale input, digitale output, timing en logische aansturing.

3. Benodigde materialen

• Arduino Uno  
• Breadboard  
• 3 LED’s (1 geel, 2 rood)  
• 3 weerstanden (220Ω)  
• 1 drukschakelaar  
• Jumper wires  
• USB‑kabel

4. Schema / Opbouw van de schakeling

LED 1 (geel) → digitale pin [invullen]  
LED 2 (rood) → digitale pin [invullen]  
LED 3 (rood) → digitale pin [invullen]  
Schakelaar → digitale input met pulldown of interne pullup

Alle GND‑lijnen zijn verbonden met de GND‑pin van de Arduino.

5. Werking van de software

• In setup() worden de pinnen ingesteld als input of output.  
• In loop() wordt continu gecontroleerd of de schakelaar is ingedrukt.  
• Niet ingedrukt: LED 1 aan, LED 2 en 3 uit.  
• Wel ingedrukt: LED 1 uit, LED 2 en 3 knipperen om en om met 500 ms delay.

6. Testplan

1. Arduino opstarten → LED 1 aan ✔  
2. Schakelaar indrukken → LED 1 uit ✔  
3. Ingedrukt houden → LED 2 en 3 knipperen ✔  
4. Loslaten → LED 2 en 3 uit, LED 1 aan ✔  
5. Herhaald testen → gedrag blijft consistent ✔

7. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzoek naar pinnen, werking schakelaar, schema gemaakt, logica uitgedacht.

D1‑K1‑W2 – Bouwen  
• Schakeling opgebouwd, LED’s correct aangesloten, schakelaar getest, code geschreven en getest.

D1‑K1‑W3 – Testen  
• Verschillende scenario’s getest, timing gecontroleerd, video opgenomen.

8. Mogelijke toepassing

Dit systeem kan dienen als basis voor signaleringssystemen zoals:  
• Veiligheidsindicatoren  
• Waarschuwingslampen  
• Reset‑ of bedieningssystemen  
  `,
  codeUrl: "project code/project-2code/project-2code.ino"
});
projects.push({
  title: "Arduino Stoplichtsysteem met Schakelaar",
  videoSrc: "https://www.youtube.com/embed/A4PdyQNBvAY",
  description: "In dit project heb ik een realistisch stoplichtsysteem gebouwd met een Arduino. Met een schakelaar wordt de verkeerslichtvolgorde gestart, inclusief correcte timing en LED‑aansturing.",
  fullText: `
1. Inleiding

In dit project heb ik een stoplicht nagebouwd met behulp van een Arduinomicrocontroller, drie LED’s en een schakelaar. Het doel was om een realistische verkeerslichtvolgorde te programmeren en te testen.

Het stoplicht bestaat uit:
• Rode LED  
• Gele LED  
• Groene LED  

Standaardstatus: rood.  
Wanneer de schakelaar wordt ingedrukt doorloopt het systeem:

Rood → Groen  
Groen blijft 3 seconden aan  
Groen → Geel  
Geel blijft 3 seconden aan  
Geel → Rood  

2. Doel van het project

• Een verkeerslichtlogica programmeren  
• Leren werken met tijdsintervallen  
• Een schakelaar gebruiken als starttrigger  
• Meerdere LED’s in een vaste volgorde aansturen  
• Een realistische stoplichtsimulatie maken  

3. Benodigde materialen

• Arduino Uno  
• 3 LED’s (rood, geel, groen)  
• 3 weerstanden (220Ω)  
• 1 drukschakelaar  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Standaardstatus: alleen rood brandt.  
Bij indrukken van de schakelaar:

• Rood uit, groen aan (3 sec)  
• Groen uit, geel aan (3 sec)  
• Geel uit, rood aan  

5. Beschrijving van de schakeling

LED’s:
• Rood → digitale pin [invullen]  
• Geel → digitale pin [invullen]  
• Groen → digitale pin [invullen]  

Schakelaar:
• Aangesloten op digitale input  
• Werkt met pulldown  

6. Wat is geleerd

• Timing en logica  
• Inputdetectie  
• Outputaansturing  
• Hardwarevaardigheden  

7. Testplan

1. Arduino opstarten → rood brandt ✔  
2. Schakelaar indrukken → rood uit, groen aan ✔  
3. Na 3 sec → groen uit, geel aan ✔  
4. Na 3 sec → geel uit, rood aan ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
D1‑K1‑W2 – Bouwen  
D1‑K1‑W3 – Testen  

9. Mogelijke toepassing

• Verkeersregelinstallaties  
• Stoplichten bij kruispunten  
• Voetgangerslichten  
• Signaleringssystemen in industrie  
• Onderwijsvoorbeelden voor automatisering  
  `,
  codeUrl: "project code/project-2code/project-2code.ino"
});

projects.push({
  title: "RGB‑Lichtsysteem met Fotoresistors en Schakelaar",
videoSrc: "https://www.youtube.com/embed/k0aUFM6feOU",
  description: "In dit project stuur ik een RGB‑LED aan met drie fotoresistors. De LED‑kleur verandert op basis van lichtsterkte, en een schakelaar forceert de LED naar blauw.",
  fullText: `
1. Inleiding

In dit project heb ik geleerd hoe je lichtsensoren (fotoresistors) gebruikt om een RGB‑LED aan te sturen. Een fotoresistor verandert zijn weerstand afhankelijk van de hoeveelheid licht. Door drie fotoresistors te koppelen aan de drie kleuren van een RGB‑LED (rood, groen en blauw), ontstaat een systeem waarbij de LED‑kleur reageert op lichtsterkte.

Daarnaast is er een schakelaar toegevoegd die een speciale functie heeft:
→ Wanneer de schakelaar wordt ingedrukt, blijft alleen de blauwe LED aan, ongeacht de lichtwaarden.

Dit project combineert sensoren, analoge input, digitale input en meerdere outputs tegelijk.

2. Doel van het project

• Werken met meerdere analoge sensoren tegelijk  
• Sensorwaarden omzetten naar LED‑helderheid  
• Een RGB‑LED afzonderlijk aansturen  
• Een schakelaar toevoegen die de normale werking overschrijft  
• Een dynamisch lichtsysteem bouwen dat reageert op de omgeving  

3. Benodigde materialen

• Arduino Uno  
• 3 fotoresistors (LDR’s)  
• 3 weerstanden (10kΩ)  
• RGB‑LED (common cathode of anode)  
• 3 LED‑weerstanden (220Ω)  
• 1 drukschakelaar  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Normale werking (schakelaar NIET ingedrukt):
• LDR 1 bepaalt helderheid rood  
• LDR 2 bepaalt helderheid groen  
• LDR 3 bepaalt helderheid blauw  
Hoe meer licht, hoe hoger de LED‑helderheid.

Speciale werking (schakelaar WEL ingedrukt):
• Alleen blauw brandt  
• Rood en groen worden uitgeschakeld  
• Blauw kan vast of sensor‑gestuurd zijn (afhankelijk van code)

De video toont:
• De RGB‑LED verandert van kleur bij beweging van je hand  
• De schakelaar dwingt de LED naar blauw  

5. Beschrijving van de schakeling

Fotoresistors:
• LDR 1 → analoge pin A0  
• LDR 2 → analoge pin A1  
• LDR 3 → analoge pin A2  
Elke LDR vormt een spanningsdeler met een weerstand.

RGB‑LED:
• Rood → digitale pin [invullen]  
• Groen → digitale pin [invullen]  
• Blauw → digitale pin [invullen]  
Elke kleur heeft een eigen weerstand.

Schakelaar:
• Aangesloten op digitale input  
• Werkt met pulldown  

6. Wat is geleerd

Sensorwerking:
• Hoe fotoresistors werken als spanningsdelers  
• Analoge waarden uitlezen  
• Lichtsterkte omzetten naar getallen  

RGB‑LED aansturing:
• Drie kleuren afzonderlijk aansturen  
• Kleuren mengen met PWM  
• Sensorwaarden omzetten naar LED‑helderheid  

Inputprioriteit:
• Schakelaar overschrijft normale werking  
• Logica afhankelijk van meerdere inputs  

Hardware:
• Werken met meerdere sensoren tegelijk  
• Correct aansluiten van RGB‑LED en schakelaar  

Software:
• Analoge input verwerken  
• PWM‑uitgangen gebruiken  
• If‑statements combineren met sensorlogica  
• Prioriteit geven aan een schakelaar  

7. Testplan

1. Arduino opstarten → RGB‑LED reageert op licht ✔  
2. Hand boven LDR 1 → rood wordt zwakker ✔  
3. Hand boven LDR 2 → groen wordt zwakker ✔  
4. Hand boven LDR 3 → blauw wordt zwakker ✔  
5. Schakelaar indrukken → alleen blauw brandt ✔  
6. Schakelaar loslaten → LED reageert weer op alle LDR’s ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzoek naar fotoresistors en spanningsdelers  
• Schema gemaakt  
• Pinnen bepaald voor RGB‑aansturing  

D1‑K1‑W2 – Bouwen  
• Drie LDR’s aangesloten  
• RGB‑LED correct aangesloten  
• Schakelaar getest  
• Code stap voor stap opgebouwd  

D1‑K1‑W3 – Testen  
• Helderheid getest door licht te blokkeren  
• Schakelaar getest als override  
• Video opgenomen als bewijs  

9. Mogelijke toepassing

• Automatische verlichting  
• Nachtlampjes  
• Slimme tuinverlichting  
• Robots die licht volgen  
• Kunstinstallaties  
• Overridesystemen in machines  
  `,
  codeUrl: "project code/project-3code/project-3code.ino"
});

projects.push({
  title: "Keypad Toegangssysteem met LED‑Feedback en Resetfunctie",
videoSrc: "https://www.youtube.com/embed/LQRr-13Hy2U",
  description: "In dit project bouwde ik een toegangssysteem met een keypad. De gebruiker voert een viercijferige code in, krijgt LED‑feedback en kan met de *‑toets de invoer direct resetten.",
  fullText: `
1. Inleiding

In dit project heb ik een flexibel keypad gebruikt om een viercijferige toegangscode in te voeren. Het systeem geeft feedback via drie LED’s:

• Geel → standaard aan (standby)  
• Rood → foutieve code  
• Groen → correcte code  

Daarnaast bevat het systeem een extra functie:
→ Wanneer de gebruiker op het sterretje (*) drukt, wordt de ingevoerde code direct gereset.

Dit maakt het systeem gebruiksvriendelijker en voorkomt dat de gebruiker een foutieve invoer moet afmaken.

2. Doel van het project

• Een keypad gebruiken voor het invoeren van een viercijferige code  
• LED‑feedback geven bij correcte of foutieve invoer  
• Een standby‑status programmeren  
• Een resetfunctie toevoegen via de *‑toets  
• Inputbuffers beheren en legen  

3. Benodigde materialen

• Arduino Uno  
• Flexibel keypad (4×3 of 4×4)  
• 3 LED’s (rood, geel, groen)  
• 3 weerstanden (220Ω)  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Standaardstatus:
• Gele LED brandt  
• Rood en groen zijn uit  
• Invoerbuffer is leeg  

Code invoeren:
• De gebruiker voert vier cijfers in via het keypad  
• Arduino slaat elke toets op totdat er vier cijfers zijn ingevoerd  

Resetfunctie (*):
• Invoer wordt direct gewist  
• Systeem blijft in standby  
• Gele LED blijft aan  

Codecontrole:

Correcte code:
• Geel uit  
• Groen 2 sec aan  
• Buffer wordt geleegd  
• Geel weer aan  

Foutieve code:
• Geel uit  
• Rood 2 sec aan  
• Buffer wordt geleegd  
• Geel weer aan  

5. Beschrijving van de schakeling

Keypad:
• Aangesloten op meerdere digitale pinnen  
• Arduino leest rijen en kolommen om toetsen te detecteren  

LED’s:
• Rode LED → digitale pin [invullen]  
• Gele LED → digitale pin [invullen]  
• Groene LED → digitale pin [invullen]  

Schakelaar / keypad input:
• Werkt met pulldown  

6. Wat is geleerd

Keypad‑input:
• Hoe een matrix‑keypad werkt  
• Hoe je toetsen uitleest  
• Hoe je een invoerbuffer maakt  

Resetfunctie:
• Invoer wissen met één toets  
• Speciale functie koppelen aan *  
• Voorkomen dat foutieve invoer wordt verwerkt  

Codeverwerking:
• Vergelijken van ingevoerde code met ingestelde code  
• Buffer legen na elke poging  

Feedbacksystemen:
• Standby status (geel)  
• Foutmelding (rood)  
• Succesmelding (groen)  

7. Testplan

1. Arduino opstarten → gele LED brandt ✔  
2. Vier cijfers invoeren (fout) → geel uit → rood 2 sec → geel aan ✔  
3. Vier cijfers invoeren (goed) → geel uit → groen 2 sec → geel aan ✔  
4. Tijdens invoer op * drukken → invoer direct gereset ✔  
5. Na reset opnieuw invoeren → systeem werkt normaal ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzoek naar keypad‑werking  
• Schema gemaakt  
• Logica voorbereid voor codecontrole en reset  

D1‑K1‑W2 – Bouwen  
• Keypad aangesloten  
• LED’s aangesloten  
• Code geschreven en getest  
• Resetfunctie toegevoegd  

D1‑K1‑W3 – Testen  
• Goede en foute codes getest  
• Resetfunctie getest  
• Video opgenomen als bewijs  

9. Mogelijke toepassing

Toegangscontrole:
• Deurcodesystemen  
• Alarmbediening  
• Kluisjes en lockers  

Industrie:
• Bedieningspanelen  
• Veiligheidsbevestiging via code  

Consumententoepassingen:
• Speelgoed met geheime codes  
• Escaperoom puzzels  
• Elektronische sloten  
  `,
  codeUrl: "project code/project-4code/project-4code.ino"
});

projects.push({
  title: "RFID‑Toegangssysteem met LED‑Feedback",
videoSrc: "https://www.youtube.com/embed/E_bbASFlh4M",
  description: "In dit project lees ik een RFID‑pasje uit en controleer ik of de ID overeenkomt met een ingestelde toegangs‑ID. Het systeem geeft LED‑feedback voor correcte en foutieve pasjes.",
  fullText: `
1. Inleiding

In dit project heb ik een RFID‑lezer gebruikt om een RFID‑pasje te scannen. Het doel is om de unieke ID van het pasje uit te lezen en daarna te controleren of deze ID overeenkomt met een vooraf ingestelde, toegestane ID.

Het project bestaat uit twee delen:

RFID‑ID uitlezen:
• De unieke ID van een pasje wordt uitgelezen en in de seriële monitor getoond.  
• Deze ID wordt later gebruikt als “juiste ID”.

RFID‑ID controleren:
• De gescande ID wordt vergeleken met de ingestelde correcte ID.  
• LED‑feedback geeft aan of de ID juist of fout is:

Geel = standby  
Groen = correcte ID  
Rood = foutieve ID  

Dit project introduceert RFID‑technologie, seriële communicatie, ID‑vergelijking en feedbacksystemen.

2. Doel van het project

• Een RFID‑lezer gebruiken om pasjes te scannen  
• De unieke ID van een RFID‑tag uitlezen  
• Een ID‑controle programmeren  
• LED‑feedback geven bij correcte of foutieve ID’s  
• Een standby‑status maken met een gele LED  

3. Benodigde materialen

• Arduino Uno  
• RFID‑lezer (MFRC522)  
• RFID‑pasje of tag  
• 3 LED’s (rood, geel, groen)  
• 3 weerstanden (220Ω)  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Deel 1 – RFID‑ID uitlezen:
• De RFID‑lezer scant een pasje  
• Arduino leest de unieke ID uit  
• De ID wordt in de seriële monitor weergegeven  
• Deze ID wordt later gebruikt als toegangs‑ID  

Deel 2 – RFID‑ID controleren:

Standaardstatus:
• Gele LED brandt  
• Rood en groen zijn uit  

Wanneer een pasje wordt gescand:
• Arduino leest de ID  
• De ID wordt vergeleken met de ingestelde correcte ID  

Feedback:

Correcte ID:
• Geel uit  
• Groen 2 sec aan  
• Daarna geel weer aan  

Foutieve ID:
• Geel uit  
• Rood 2 sec aan  
• Daarna geel weer aan  

De video toont dat:
• De RFID‑lezer pasjes correct uitleest  
• De LED’s reageren op correcte en foutieve ID’s  
• Het systeem automatisch terugkeert naar standby  

5. Beschrijving van de schakeling

RFID‑lezer (MFRC522) aangesloten via SPI:

• SDA → pin [invullen]  
• SCK → pin [invullen]  
• MOSI → pin [invullen]  
• MISO → pin [invullen]  
• RST → pin [invullen]  
• 3.3V en GND  

LED’s:
• Rode LED → digitale pin [invullen]  
• Gele LED → digitale pin [invullen]  
• Groene LED → digitale pin [invullen]  

Elke LED heeft een eigen weerstand.

6. Wat is geleerd

RFID‑technologie:
• Hoe een RFID‑lezer werkt  
• Hoe je een pasje scant  
• Hoe je de unieke ID uitleest  

Seriële communicatie:
• ID’s weergeven in de seriële monitor  
• Data controleren en kopiëren  

ID‑controle:
• Vergelijken van gescande ID met ingestelde ID  
• Werken met arrays of strings  
• Foutafhandeling bij onjuiste ID’s  

Feedbacksystemen:
• Standby status (geel)  
• Foutmelding (rood)  
• Succesmelding (groen)  

Hardware:
• Aansluiten van een RFID‑module via SPI  
• Overzichtelijk werken met meerdere LED’s  

7. Testplan

1. Arduino opstarten → gele LED brandt ✔  
2. Juiste pasje scannen → geel uit → groen 2 sec → geel aan ✔  
3. Fout pasje scannen → geel uit → rood 2 sec → geel aan ✔  
4. Meerdere pogingen → systeem blijft correct reageren ✔  
5. Geen pasje scannen → systeem blijft in standby ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzoek naar RFID‑technologie  
• Schema gemaakt van SPI‑aansluitingen  
• Eerst de ID uitgelezen om de juiste code te bepalen  

D1‑K1‑W2 – Bouwen  
• RFID‑module aangesloten  
• LED’s aangesloten  
• Code geschreven voor uitlezen en controleren  
• Systeem stap voor stap getest  

D1‑K1‑W3 – Testen  
• Juiste en foutieve pasjes getest  
• LED‑feedback gecontroleerd  
• Video opgenomen als bewijs  

9. Mogelijke toepassing

Toegangscontrole:
• Deur‑ en poortsystemen  
• Bedrijfspasjes  
• Schoolpasjes  

Beveiliging:
• Alarmontgrendeling  
• Apparatuur die alleen werkt met een geldig pasje  

Registratie:
• Aanwezigheidsregistratie  
• Tijdregistratie  
• Inventarisbeheer  
  `,
  codeUrl: "project code/project-5code/project-5code.ino"
});

projects.push({
  title: "LCD‑Groetsysteem met Schakelaar",
videoSrc: "https://www.youtube.com/embed/aXy5TCMMUQw",
  description: "In dit project laat ik een LCD-scherm een boodschap tonen wanneer een schakelaar wordt ingedrukt. De tekst op het display verandert van standaardtekst naar “Arduino groet je”.",
  fullText: `
1. Inleiding

In dit project heb ik een LCD‑scherm gekoppeld aan een Arduino en een schakelaar. Het doel was om te leren hoe je tekst op een LCD kunt weergeven en hoe je een schakelaar gebruikt om een actie te activeren.

Wanneer de gebruiker op de schakelaar drukt, verschijnt er op het LCD‑scherm de tekst:

"Arduino groet je"

Dit project introduceert het gebruik van LCD‑displays, libraries, digitale input en eenvoudige gebruikersinteractie.

2. Doel van het project

• Een LCD‑scherm aansturen met een Arduino  
• Tekst op een display schrijven en wissen  
• Een schakelaar gebruiken als trigger  
• Input en output combineren in één systeem  
• Een eenvoudige gebruikersinteractie programmeren  

3. Benodigde materialen

• Arduino Uno  
• 16×2 LCD‑scherm (met of zonder I2C‑module)  
• 1 drukschakelaar  
• 1 weerstand (10kΩ voor pulldown)  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Standaardstatus:
• Het LCD‑scherm is leeg of toont een standaardtekst zoals: "Druk op de knop"

Wanneer de schakelaar wordt ingedrukt:
• De Arduino detecteert de input  
• Het LCD‑scherm wist de oude tekst  
• Het LCD toont de boodschap: "Arduino groet je"

Wanneer de schakelaar wordt losgelaten:
• Het scherm keert terug naar de standaardtekst  
  of  
• Het blijft de groet tonen (afhankelijk van de code)

De video toont dat:
• De schakelaar correct wordt gelezen  
• De tekst op het LCD verandert zodra de knop wordt ingedrukt  

5. Beschrijving van de schakeling

LCD‑scherm:

Zonder I2C‑module:
• 6 digitale pinnen nodig (RS, E, D4, D5, D6, D7)  
• Voeding: 5V en GND  
• Contrast via potmeter  

Met I2C‑module:
• Slechts 2 pinnen nodig:  
  – SDA → A4  
  – SCL → A5  
• Voeding: 5V en GND  

Schakelaar:
• Aangesloten op een digitale input  
• Werkt met pulldown  

6. Wat is geleerd

LCD‑aansturing:
• Hoe je een LCD‑scherm aansluit  
• Hoe je de LiquidCrystal‑library gebruikt  
• Hoe je tekst schrijft, wist en cursorposities instelt  

Inputdetectie:
• Hoe je een schakelaar uitleest  
• Hoe je een actie koppelt aan een input  

Gebruikersinteractie:
• Hoe je een systeem laat reageren op een fysieke handeling  
• Hoe je feedback geeft via een display  

Hardware:
• Correct aansluiten van een LCD  
• Werken met I2C of parallelle verbindingen  
• Testen van verbindingen en contrastinstellingen  

7. Testplan

1. Arduino opstarten → LCD toont standaardtekst ✔  
2. Schakelaar indrukken → LCD toont "Arduino groet je" ✔  
3. Schakelaar loslaten → LCD keert terug naar standaardtekst ✔  
4. Meerdere keren testen → systeem blijft correct reageren ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzoek naar werking van LCD  
• Schema gemaakt van aansluitingen  
• Tekst en gedrag van het display bepaald  

D1‑K1‑W2 – Bouwen  
• LCD aangesloten op Arduino  
• Schakelaar toegevoegd  
• Code geschreven voor tekstweergave  
• Systeem stap voor stap getest  

D1‑K1‑W3 – Testen  
• Schakelaar meerdere keren getest  
• LCD‑tekst gecontroleerd  
• Video opgenomen als bewijs  

9. Mogelijke toepassing

Informatiesystemen:
• Welkomstschermen  
• Bedieningspanelen  
• Statusmeldingen voor apparaten  

Interactieve systemen:
• Menubediening  
• Knoppeninterfaces  
• Simpele terminals  

Onderwijs:
• Introductie tot displays  
• Basisgebruik van libraries  
• Eerste stap richting HMI‑systemen (Human Machine Interface)  
  `,
  codeUrl: "project code/project-6code/project-6code.ino"
});

projects.push({
  title: "Interactieve JA/NEE‑Quiz met LCD en LED‑Feedback",
videoSrc: "https://www.youtube.com/embed/9zHisHGK-Xk",
  description: "In dit project bouwde ik een interactieve JA/NEE‑quiz met een LCD‑scherm, twee knoppen en vier LED’s. De gebruiker beantwoordt vijf vragen en krijgt directe feedback.",
  fullText: `
1. Inleiding

In dit project heb ik een interactieve quiz gebouwd met behulp van een Arduino, een LCD‑scherm, twee schakelaars en vier LED’s. De schakelaars worden gebruikt om JA of NEE te antwoorden op vijf meerkeuzevragen.

Bij elke schakelaar staat een LED:
• Groene LED bij JA‑knop  
• Rode LED bij NEE‑knop  

Daarnaast zijn er twee extra LED’s bovenaan:
• Groen = antwoord is correct  
• Rood = antwoord is fout  

Het LCD‑scherm toont:
• De vraag  
• De score aan het einde van de quiz  

Dit project combineert input, output, logica, feedback en gebruikersinteractie.

2. Doel van het project

• Een interactieve quiz maken met JA/NEE‑knoppen  
• Een LCD‑scherm gebruiken voor vragen en score  
• LED‑feedback geven voor correcte en foutieve antwoorden  
• Meerdere vragen in een vaste volgorde programmeren  
• Een puntentelling bijhouden  

3. Benodigde materialen

• Arduino Uno  
• 16×2 LCD‑scherm (met of zonder I2C‑module)  
• 2 drukschakelaars (JA en NEE)  
• 4 LED’s (2 voor knoppen, 2 voor feedback)  
• 4 weerstanden (220Ω)  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Vragenlijst (5 vragen):
1. Is de aarde rond? → JA  
2. Is 5 groter dan 10? → NEE  
3. Is water nat? → JA  
4. Is 2+2 = 5? → NEE  
5. Kunnen mensen zonder zuurstof leven? → NEE  

Bediening:
• Linker knop = JA  
• Rechter knop = NEE  
• Bij elke knop brandt een LED om te tonen welke keuze je maakt  

Feedback:
• Goed antwoord → groene feedback‑LED 1 sec aan  
• Fout antwoord → rode feedback‑LED 1 sec aan  
Daarna gaat het systeem automatisch door naar de volgende vraag.

Eindscore:
Na alle vijf vragen toont het LCD‑scherm:
"Je score: X/5"

5. Beschrijving van de schakeling

LCD‑scherm:
• Aangesloten via I2C of parallel  
• Toont vragen en score  

Schakelaars:
• JA‑knop → digitale pin [invullen]  
• NEE‑knop → digitale pin [invullen]  
• Werkt met pulldown  

LED’s:
• JA‑LED (groen) → digitale pin [invullen]  
• NEE‑LED (rood) → digitale pin [invullen]  
• Feedback‑groen → digitale pin [invullen]  
• Feedback‑rood → digitale pin [invullen]  

6. Wat is geleerd

Inputverwerking:
• Twee knoppen uitlezen  
• JA/NEE‑keuzes omzetten naar logica  

LCD‑aansturing:
• Tekst tonen  
• Regels wissen  
• Dynamisch vragen weergeven  

Feedbacksystemen:
• LED’s gebruiken om keuzes te tonen  
• LED’s gebruiken om correct/fout aan te geven  

Logica en puntentelling:
• Vragen in een array opslaan  
• Antwoorden vergelijken  
• Score bijhouden  
• Eindresultaat tonen  

Hardware:
• Overzichtelijk werken met meerdere LED’s  
• Correct aansluiten van knoppen  
• LCD‑communicatie  

7. Testplan

1. Arduino opstarten → LCD toont eerste vraag ✔  
2. JA‑knop indrukken → JA‑LED aan, feedback correct/fout ✔  
3. NEE‑knop indrukken → NEE‑LED aan, feedback correct/fout ✔  
4. Alle 5 vragen beantwoorden → LCD toont score ✔  
5. Meerdere rondes spelen → systeem blijft correct werken ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Vragenlijst opgesteld  
• Logica uitgewerkt voor JA/NEE‑keuzes  
• Schema gemaakt van LED’s, knoppen en LCD  

D1‑K1‑W2 – Bouwen  
• LCD aangesloten  
• Twee knoppen aangesloten  
• Vier LED’s aangesloten  
• Code geschreven voor vragen, feedback en score  

D1‑K1‑W3 – Testen  
• Alle vragen getest  
• Correcte en foutieve antwoorden gecontroleerd  
• Eindscore getest  
• Video opgenomen als bewijs  

9. Mogelijke toepassing

Onderwijs:
• Quizsystemen  
• Oefentoetsen  
• Interactieve leeropstellingen  

Entertainment:
• Triviagames  
• Escaperooms  
• Speelgoed met quizfuncties  

Industrie:
• Bedieningspanelen met ja/nee‑keuzes  
• Veiligheidsvragen voor toegang  
• Trainingssimulaties  
  `,
  codeUrl: "project code/project-7code/project-7code.ino"
});

projects.push({
  title: "Arduino Rekenmachine met Keypad en LCD‑Display",
videoSrc: "https://www.youtube.com/embed/eEfYT7pkZLE",
  description: "In dit project bouwde ik een rekenmachine met een keypad en een LCD‑scherm. De gebruiker voert cijfers en operators in, en de Arduino berekent de uitkomst.",
  fullText: `
1. Inleiding

In dit project heb ik een rekenmachine gebouwd met behulp van een Arduino, een keypad en een LCD‑scherm. De gebruiker voert getallen en bewerkingen in via het keypad, en het LCD‑scherm toont zowel de invoer als de uitkomst.

De rekenmachine ondersteunt:
• A → optellen (+)  
• B → vermenigvuldigen (×)  
• C → delen (÷)  
• D → uitrekenen (=)  
• * → één teken verwijderen (backspace)  
• # → alles wissen (clear)  

Dit project combineert inputverwerking, string‑manipulatie, LCD‑output en rekenlogica.

2. Doel van het project

• Een keypad gebruiken als invoermethode  
• Een LCD‑scherm gebruiken voor dynamische tekst  
• Rekenlogica programmeren (optellen, vermenigvuldigen, delen)  
• Een backspacefunctie maken  
• Een volledige resetfunctie maken  
• Een uitrekenfunctie (=) implementeren  

3. Benodigde materialen

• Arduino Uno  
• 16×2 LCD‑scherm (met of zonder I2C‑module)  
• Keypad (4×4)  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Invoer via keypad:
• De gebruiker voert cijfers in (0–9)  
• De gebruiker kiest één operator:  
  – A = +  
  – B = ×  
  – C = ÷  
• De invoer wordt direct op het LCD‑scherm weergegeven  

Verwijderen:
• * verwijdert het laatste teken (backspace)  
• # wist de volledige invoer en begint opnieuw  

Uitrekenen:
• D voert de berekening uit  
• Het LCD toont de uitkomst  
• Daarna kan de gebruiker direct een nieuwe berekening starten  

5. Voorbeeld van een berekening

Invoer:
1 2 A 3 4 D  

LCD toont:
12+34  
= 46  

Andere voorbeelden:
• 5 B 6 D → 30  
• 9 C 3 D → 3  

6. Beschrijving van de schakeling

Keypad:
• Aangesloten op 7–8 digitale pinnen (afhankelijk van type)  
• Arduino leest rijen en kolommen om toetsen te detecteren  

LCD‑scherm:
• Aangesloten via I2C of parallel  
• Toont invoer en uitkomst  

Voeding:
• Arduino levert 5V en GND  

7. Wat is geleerd

Keypad‑input:
• Toetsen uitlezen  
• Cijfers en operators verwerken  
• Speciale toetsen gebruiken (*, #, A, B, C, D)  

LCD‑aansturing:
• Dynamisch tekst tonen  
• Regels wissen  
• Cursorposities instellen  

Rekenlogica:
• Getallen opslaan als strings  
• Strings omzetten naar integers  
• Operators herkennen  
• Uitkomsten berekenen  
• Delen door nul voorkomen  

Gebruikersinteractie:
• Backspacefunctie  
• Resetfunctie  
• Direct nieuwe berekeningen starten  

8. Testplan

1. Cijfers invoeren → LCD toont cijfers ✔  
2. Operator invoeren → LCD toont operator ✔  
3. Backspace (*) → laatste teken verdwijnt ✔  
4. Clear (#) → LCD wordt volledig gewist ✔  
5. Uitrekenen (D) → LCD toont correcte uitkomst ✔  
6. Nieuwe berekening → systeem werkt opnieuw ✔  

9. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzocht hoe een rekenmachine werkt  
• Logica uitgewerkt voor operators en invoer  
• Schema gemaakt van keypad en LCD‑aansluitingen  

D1‑K1‑W2 – Bouwen  
• Keypad aangesloten  
• LCD aangesloten  
• Code geschreven voor invoer, operatoren en uitrekenen  
• Backspace en clear toegevoegd  

D1‑K1‑W3 – Testen  
• Verschillende berekeningen getest  
• Foutafhandeling getest (bijv. delen door nul)  
• Video opgenomen als bewijs  

10. Mogelijke toepassing

Onderwijs:
• Rekenmachines  
• Leerhulpmiddelen  
• Programmeeropdrachten  

Industrie:
• Bedieningspanelen met numerieke invoer  
• Embedded systemen die berekeningen uitvoeren  

Consumententoepassingen:
• Simpele calculators  
• Speelgoed  
• Interactieve apparaten  
  `,
  codeUrl: "project code/project-8code/project-8code.ino"
});

projects.push({
  title: "RFID + Keypad Tweestaps Toegangssysteem",
videoSrc: "https://www.youtube.com/embed/62d-qzFkhAY",
  description: "In dit project combineer ik RFID, keypad-invoer en een LCD-scherm tot een tweestaps beveiligingssysteem. Eerst moet het pasje kloppen, daarna de code.",
  fullText: `
1. Inleiding

In dit project combineer ik meerdere technieken die ik in eerdere projecten heb geleerd:

• RFID‑pasje scannen  
• Code invoeren via een flexibel keypad  
• Sterretjes tonen op een LCD‑scherm  
• Een naam tonen die gekoppeld is aan het pasje  

Het systeem werkt als een tweestaps beveiliging:

1. Eerst moet het RFID‑pasje correct zijn  
2. Daarna moet de gebruiker een juiste toegangscode invoeren  

Als beide stappen kloppen, verschijnt de naam van de eigenaar van het pasje op het LCD‑scherm.  
Als er iets fout gaat, brandt de rode LED en moet de gebruiker opnieuw beginnen.

Dit project is het meest complete en complexe systeem van alle opdrachten.

2. Doel van het project

• RFID‑identificatie combineren met keypad‑codecontrole  
• Een LCD‑scherm gebruiken voor sterretjes en tekst  
• LED‑feedback geven voor succes of fout  
• Een beveiligde toegangssimulatie bouwen  
• Meerdere inputs en outputs samen laten werken  

3. Benodigde materialen

• Arduino Uno  
• RFID‑lezer (MFRC522 of vergelijkbaar)  
• RFID‑pasje of tag  
• Flexibel keypad (4×4)  
• 16×2 LCD‑scherm (met of zonder I2C‑module)  
• Breadboard  
• Jumper wires  
• USB‑kabel  

4. Werking van het systeem

Stap 1 – RFID‑pasje scannen:
• Gebruiker houdt pasje bij de RFID‑lezer  
• Arduino leest de unieke ID  
• Als ID klopt → doorgaan naar stap 2  
• Als ID fout is → rode LED + foutmelding → reset  

Stap 2 – Code invoeren via keypad:
• LCD toont: "Voer code in:"  
• Gebruiker typt een code (bijv. 4 cijfers)  
• LCD toont sterretjes (****)  
• Als code klopt → doorgaan naar stap 3  
• Als code fout is → foutmelding → reset  

Stap 3 – Naam tonen:
• LCD toont: "Welkom, [naam]"  
• Na enkele seconden keert systeem terug naar beginstatus  

Foutafhandeling:
• LCD toont: "Foute code"  
• Rode LED brandt  
• Systeem reset  

5. Beschrijving van de schakeling

RFID‑module (MFRC522) via SPI:
• SDA → [invullen]  
• SCK → [invullen]  
• MOSI → [invullen]  
• MISO → [invullen]  
• RST → [invullen]  
• 3.3V en GND  

Keypad:
• Aangesloten op digitale pinnen  
• Gebruikt voor cijferinvoer en speciale toetsen  

LCD‑scherm:
• Aangesloten via I2C of parallel  
• Toont sterretjes, foutmeldingen en naam  

LED’s:
• Groen → digitale pin [invullen]  
• Rood → digitale pin [invullen]  

6. Wat is geleerd

RFID‑technologie:
• Hoe je een pasje scant  
• Hoe je ID’s uitleest en vergelijkt  
• Hoe je meerdere pasjes kunt koppelen aan namen  

Keypad‑input:
• Cijfers uitlezen  
• Sterretjes tonen in plaats van echte cijfers  
• Een codebuffer maken  

LCD‑aansturing:
• Dynamisch tekst tonen  
• Regels wissen  
• Namen en foutmeldingen tonen  

Beveiligingslogica:
• Tweestaps verificatie  
• Foutafhandeling  
• Resetmechanismen  

Hardware:
• Combineren van meerdere modules  
• Overzichtelijk bouwen  
• Testen van inputs en outputs  

7. Testplan

1. Fout pasje scannen → rode LED + foutmelding + reset ✔  
2. Correct pasje scannen → LCD vraagt om code ✔  
3. Foute code invoeren → rode LED + foutmelding + reset ✔  
4. Juiste code invoeren → groene LED + naam op LCD ✔  
5. Meerdere rondes testen → systeem blijft correct werken ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzocht hoe RFID en keypad samen kunnen werken  
• Logica uitgewerkt voor tweestaps verificatie  
• Schema gemaakt van alle aansluitingen  

D1‑K1‑W2 – Bouwen  
• RFID‑module aangesloten  
• Keypad aangesloten  
• LCD aangesloten  
• LED’s aangesloten  
• Code geschreven voor alle stappen  

D1‑K1‑W3 – Testen  
• Foute en correcte pasjes getest  
• Foute en correcte codes getest  
• Naamweergave getest  
• Video opgenomen als bewijs  

9. Mogelijke toepassing

Toegangscontrole:
• Deur‑ en poortsystemen  
• Bedrijfspasjes + pincode  
• Schoolpasjes  

Beveiliging:
• Tweestaps verificatie  
• Alarmontgrendeling  
• Persoonsidentificatie  

Registratie:
• Aanwezigheidsregistratie  
• Tijdregistratie  
• Personeelsbeheer  
  `,
  codeUrl: "project code/project-9code/project-9code.ino"
});

projects.push({
  title: "RFID + Keypad Toegangssysteem met Twee Arduino’s",
videoSrc: "https://www.youtube.com/embed/39avyBYPrR8",
  description: "In dit project bouwde ik een volledig tweestaps toegangssysteem met RFID, keypad, LCD en signaallampen. Twee Arduino’s werken samen om toegang te verlenen.",
  fullText: `
1. Inleiding

In dit project heb ik een volledig elektronisch toegangssysteem gebouwd met behulp van twee Arduino‑microcontrollers, een RFID‑lezer, een keypad, een LCD‑scherm en drie signaallampen (rood, geel en groen). Het systeem werkt vergelijkbaar met moderne toegangscontrolesystemen: eerst moet een gebruiker een geldige RFID‑pas scannen, daarna moet de juiste pincode worden ingevoerd.

Het systeem bestaat uit:
• Arduino 1 → leest RFID en keypad  
• Arduino 2 → verwerkt de logica, stuurt LCD en lampjes aan  
• RFID‑scanner  
• 4×4 keypad  
• 16×2 LCD‑scherm  
• Drie LED’s (rood, geel, groen)  
• Seriële communicatie tussen beide Arduino’s  

Het systeem toont duidelijke meldingen op het LCD‑scherm en geeft feedback via de LED’s:
• Geel = standby  
• Groen = toegang verleend  
• Rood = toegang geweigerd  

Dit project laat zien dat ik input, output, communicatie tussen microcontrollers, timing en logica kan combineren tot één compleet werkend systeem.

2. Doel van het project

• Een veilig toegangssysteem bouwen met twee verificatiestappen  
• Werken met RFID‑technologie  
• Een keypad gebruiken voor pincode‑invoer  
• Een LCD‑scherm aansturen voor gebruikersfeedback  
• Twee Arduino’s met elkaar laten communiceren  
• Een logische workflow programmeren met foutafhandeling  
• Signaallampen gebruiken voor visuele statusweergave  

3. Benodigde materialen

• 2× Arduino Uno  
• RFID‑module  
• 4×4 keypad  
• 16×2 LCD‑scherm  
• 3 LED’s (rood, geel, groen)  
• 3 weerstanden (220Ω)  
• Breadboards  
• Jumper wires  
• USB‑kabels  

4. Werking van het systeem

Startscherm:
• LCD toont: "Scan je pasje"  
• Gele LED brandt (standby)  

Stap 1 – RFID‑controle:
• Gebruiker scant een RFID‑kaart  
• Arduino 1 stuurt UID naar Arduino 2  
• Arduino 2 vergelijkt UID met bekende kaarten  

Correcte kaart:
• Groen licht 2 sec  
• LCD: "Pasje OK"  
• Daarna: "Vul de pincode in"  

Foute kaart:
• Rood licht 2 sec  
• LCD: "Dit is niet correct"  
• Terug naar startscherm  

Stap 2 – PIN‑controle:
• LCD toont: "Voer code in:"  
• Gebruiker typt 4 cijfers via keypad  
• LCD toont sterretjes (****)  

Correcte PIN:
• Groen licht 2 sec  
• LCD toont: "Welkom [naam]"  
• Terug naar startscherm  

Foute PIN:
• Rood licht 2 sec  
• LCD toont: "Incorrect!"  
• Terug naar startscherm  

Bekende gebruikers:
• Marco → UID: 51 45 0D 02 → PIN: 1234  
• Bouke → UID: 24 CF 14 17 → PIN: 5678  

5. Beschrijving van de schakeling

Arduino 1:
• Leest RFID‑module  
• Leest keypad  
• Stuurt UID en PIN via seriële communicatie naar Arduino 2  

Arduino 2:
• Ontvangt data van Arduino 1  
• Vergelijkt UID en PIN  
• Stuurt LCD‑scherm aan  
• Stuurt rode, gele en groene LED aan  

6. Wat is geleerd

Communicatie tussen microcontrollers:
• SoftwareSerial gebruiken  
• Dataformaten ontwerpen  
• Betrouwbare UID‑herkenning  

RFID‑technologie:
• Uitlezen van UID’s  
• Vergelijken met bekende kaarten  

Keypad‑input:
• PIN‑buffer opbouwen  
• Speciale toetsen (# en *) verwerken  

LCD‑aansturing:
• Dynamische schermupdates  
• Statusmeldingen tonen  

Beveiligingslogica:
• Tweestaps verificatie  
• Foutafhandeling  
• Automatische reset  

Hardwarevaardigheden:
• Overzichtelijke bedrading  
• Werken met meerdere modules tegelijk  
• Debuggen via Serial Monitor  

7. Testplan

1. Arduino’s opstarten → LCD toont “Scan je pasje”, gele LED aan ✔  
2. Geldige RFID scannen → groen LED 2 sec, daarna pincode invoeren ✔  
3. Ongeldige RFID scannen → rood LED 2 sec, foutmelding ✔  
4. Juiste PIN invoeren → groen LED 2 sec, naam op LCD ✔  
5. Foute PIN invoeren → rood LED 2 sec, foutmelding ✔  
6. Systeem reset → terug naar startscherm ✔  

8. Reflectie

D1‑K1‑W1 – Voorbereiden  
• Onderzocht hoe RFID werkt  
• Workflow ontworpen  
• Schema gemaakt voor beide Arduino’s  

D1‑K1‑W2 – Bouwen  
• Arduino’s gekoppeld  
• RFID, keypad, LCD en LED’s aangesloten  
• Code stap voor stap opgebouwd  

D1‑K1‑W3 – Testen  
• RFID getest  
• Keypad getest  
• LCD getest  
• LED’s getest  
• Volledige systeemtest uitgevoerd  

9. Mogelijke toepassingen

Beveiliging:
• Toegangscontrole  
• Personeelsregistratie  
• Lockersystemen  

Industrie:
• Machine‑autorisatie  
• Veiligheidszones  

Onderwijs:
• Introductie tot embedded systems  
• Voorbeeld van multi‑microcontroller communicatie  
• RFID‑technologie in praktijk  
  `,
  codeUrl: "project code/project-10code/project-10code.ino"
  codeUrl: "project code/project-10code/project-10code.ino"

});


// ------------------------------
// GENEREREN VAN PROJECTKAARTEN
// ------------------------------

const projectsContainer = document.getElementById("projects");

const modal = document.getElementById("projectModal");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCodeLink = document.getElementById("modalCodeLink");
const closeBtn = document.querySelector(".close");

// Helper: YouTube URL → embed URL
function convertToEmbed(url) {
  if (!url.includes("youtu")) return url;

  // Shorts → embed
  if (url.includes("shorts")) {
    const id = url.split("/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // Normale YouTube links
  const id = url.split("v=")[1] || url.split("/").pop();
  return `https://www.youtube.com/embed/${id}`;
}

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project-card";

  const videoWrapper = document.createElement("div");
  videoWrapper.className = "project-video";

  const isYouTube = project.videoSrc.includes("youtu");

  let videoElement;

  if (isYouTube) {
    videoElement = document.createElement("iframe");
    videoElement.src = convertToEmbed(project.videoSrc);
    videoElement.allowFullscreen = true;
  } else {
    videoElement = document.createElement("video");
    videoElement.src = project.videoSrc;
    videoElement.controls = true;
  }

  videoWrapper.appendChild(videoElement);

  const title = document.createElement("h2");
  title.className = "project-title";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const footer = document.createElement("div");
  footer.className = "project-footer";

  const readMore = document.createElement("a");
  readMore.className = "code-link";
  readMore.href = "#";
  readMore.textContent = "Lees meer";

  readMore.addEventListener("click", () => {
    modal.style.display = "block";

    const isYT = project.videoSrc.includes("youtu");

    // Verwijder oude iframe indien aanwezig
    const oldIframe = document.getElementById("modalIframe");
    if (oldIframe) oldIframe.remove();

    if (isYT) {
      modalVideo.style.display = "none";

      const iframe = document.createElement("iframe");
      iframe.id = "modalIframe";
      iframe.src = convertToEmbed(project.videoSrc);
      iframe.allowFullscreen = true;
      iframe.style.width = "100%";
      iframe.style.aspectRatio = "16/9";
      iframe.style.borderRadius = "10px";

      document.querySelector(".modal-video").appendChild(iframe);
    } else {
      modalVideo.style.display = "block";
      modalVideo.src = project.videoSrc;
    }

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.fullText;
    modalCodeLink.href = project.codeUrl;
  });

  footer.appendChild(readMore);

  card.appendChild(videoWrapper);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(footer);

  projectsContainer.appendChild(card);
});

// ------------------------------
// MODAL SLUITEN
// ------------------------------

closeBtn.onclick = () => {
  modal.style.display = "none";
  modalVideo.pause();

  const iframe = document.getElementById("modalIframe");
  if (iframe) iframe.remove();
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();

    const iframe = document.getElementById("modalIframe");
    if (iframe) iframe.remove();
  }
};
