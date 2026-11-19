// Dag 4: DOM. Kör npm run dev och titta i Console (F12).
// querySelector kan ge null om elementet saknas. Hantera det med if eller ?. (TypeScript kräver det).
// Tips: document.querySelector<HTMLElement>("#id") säger vilken sorts element du får.
import { meny } from "./data";
import { visaMeny, uppdateraRubrik, markeraDagensRatt } from "./ui";
import { billigast } from "./meny";

// DEL 1: utforska DOM:en ----------------------------------------------
// 1. Hämta h1 med document.querySelector("h1") och skriv ut dess textContent.
const headingOne = document.querySelector("h1");

if (headingOne) {
  console.log(headingOne.textContent);
} else {
  console.log("The value is missing.");
}
// 2. Ändra texten i #hero-rubrik till "Välkommen in!"
const headingText = document.querySelector("#hero-rubrik");

if (headingText) {
  headingText.textContent = "Välkommen in!";
} else {
  console.log("The value is missing.");
}

// 3. Hämta alla länkar i menyn med document.querySelectorAll("nav a").
//    Loopa med for...of och skriv ut varje länks href och text.
const menuLinks = document.querySelectorAll("nav a");

for (const link of menuLinks) {
  console.log(`href: ${link.getAttribute("href")}. Text: ${link.textContent}`);
}

// menuLinks.forEach((link) =>
//   console.log(`href: ${link.getAttribute("href")}. Text: ${link.textContent}`),
// );

// 4. Skapa ett nytt p-element (document.createElement), ge det texten
//    "Dagens tips: prova en kardemummabulle." och lägg det sist i #hero med append.

let paragraph = document.createElement("p");
paragraph.textContent = "Dagens tips: prova en kardemummabulle.";

let heroElement = document.getElementById("hero");

if (heroElement) {
  heroElement.append(paragraph);
} else {
  console.log("The value is missing.");
}

// 5. Lägg klassen "dagens" på #hero med classList.add. Ta bort den med classList.remove.

const k = document.querySelector("#hero");

if (k) {
  k.classList.add("dagens");
} else {
  console.log("The value is missing.");
}

k?.classList.remove("dagens");

// 6. Säkerhetsförsök: sätt p.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">'
//    Vad händer i Console? Byt sedan till p.textContent med samma text. Vad händer nu?
const p = document.querySelector("p");
// if (p) {
//   p.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">';
// }

if (p) {
  p.textContent = '<img src="x" onerror="console.log(\'Attack!\')">';
}

// • innerHTML: If untrusted user input contains injected <script> tags or malicious event handlers.
// • textContent: Automatically escapes HTML characters and renders them safely as literal text, completely eliminating script execution risks.

// DEL 2: koppla ihop med funktionerna i ui.js ----------------------------
// 7. Hämta #meny-lista och #meny-rubrik.
// 8. Anropa visaMeny med menyn, och uppdateraRubrik med antalet rätter.
// 9. Dagens rätt = den billigaste lunchen. Använd filter och billigast (från meny.js)
//    och markeraDagensRatt.
// TODO
