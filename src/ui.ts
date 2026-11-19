// Dag 4: Funktioner som bygger sidans innehåll med DOM. Gör alla tester gröna på tests.html.
// Röda understrykningar tills du skrivit return är normalt. ratt.bild och ratt.beskrivning är valfria (string | undefined): använd ?? "" för att få en text.
// Regel: använd createElement och textContent. Använd INTE innerHTML med data.
import { formateraPris } from "./pris";
import type { Ratt } from "./typer";

// 1. Bygger ett kort för en rätt och returnerar det (anropar inte append själv).
//    <article data-id="1">
//      <img src="..." alt="Illustration av kardemummabulle">
//      <h3>Kardemummabulle</h3>
//      <p>Beskrivning</p>
//      <p class="pris">35 kr</p>
//    </article>
export function skapaRattKort(ratt: Ratt): HTMLElement {
  const rattKort = document.createElement("article");
  rattKort.setAttribute("data-id", `${ratt.id}`);

  const img = document.createElement("img");
  img.setAttribute("src", `${ratt.bild}`);
  img.setAttribute("alt", "Illustration av kardemummabulle");

  const heading3 = document.createElement("h3");
  heading3.textContent = `${ratt.namn}`;

  const p1 = document.createElement("p");
  p1.textContent = `${ratt.beskrivning}`;

  const p2 = document.createElement("p");
  p2.setAttribute("class", "pris");
  p2.textContent = formateraPris(ratt.pris);

  rattKort.appendChild(img);
  rattKort.appendChild(heading3);
  rattKort.appendChild(p1);
  rattKort.appendChild(p2);

  return rattKort;
}

// 2. Töm containern och lägg in ett kort per rätt.
//    Är listan tom: visa <p class="tom">Inga rätter hittades.</p> istället.
export function visaMeny(container: HTMLElement, ratter: Ratt[]): void {
  container.replaceChildren();
  if (ratter.length === 0) {
    const paragragh = document.createElement("p");
    paragragh.setAttribute("class", "tom");
    paragragh.textContent = "Inga rätter hittades.";
    container.appendChild(paragragh);
  } else {
    const rElement = ratter.map((r) => skapaRattKort(r));
    for (const element of rElement) {
      container.appendChild(element);
    }
  }
}

// 3. Sätt rubrikens text: "Meny (8 rätter)". Ett enda: "Meny (1 rätt)".
export function uppdateraRubrik(element: HTMLElement, antal: number): void {
  // TODO
}

// 4. Markera EN rätt som dagens rätt: klassen "dagens" ska finnas på kortet med rätt
//    data-id, och inte på något annat kort. Anropas igen = markeringen flyttas.
export function markeraDagensRatt(container: HTMLElement, id: number): void {
  // TODO
}
