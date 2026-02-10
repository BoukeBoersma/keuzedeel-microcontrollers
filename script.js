// Projecten automatisch genereren
const projects = [];

// PROJECT 1 MET VOLLEDIGE INHOUD
projects.push({
  title: "LED‑Signaleringssysteem met Schakelaar",
  videoSrc: "filmjes/project-1.mp4",
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
  codeUrl: "project code/project-1code"
});

// PROJECTEN 2 T/M 10 AUTOMATISCH GENEREREN
for (let i = 2; i <= 10; i++) {
  projects.push({
    title: `Project-${i}`,
    videoSrc: `filmjes/project-${i}.mp4`,
    description: `Dit is project-${i} uit mijn keuzedeel microcontrollers.`,
    fullText: `Uitgebreide documentatie voor project-${i} komt hier.`,
    codeUrl: `project code/project-${i}code`
  });
}

// --------------------
// MODAL LOGICA
// --------------------

const projectsContainer = document.getElementById("projects");

const modal = document.getElementById("projectModal");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCodeLink = document.getElementById("modalCodeLink");
const closeBtn = document.querySelector(".close");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project-card";

  const videoWrapper = document.createElement("div");
  videoWrapper.className = "project-video";

  const video = document.createElement("video");
  video.src = project.videoSrc;
  video.controls = true;

  videoWrapper.appendChild(video);

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
    modalVideo.src = project.videoSrc;
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

// Popup sluiten
closeBtn.onclick = () => {
  modal.style.display = "none";
  modalVideo.pause();
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();
  }
};
