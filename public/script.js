// Selecteer het <html> element
const htmlElement = document.documentElement;

// Voeg de class "js" toe aan het <html> element
htmlElement.classList.add("js");

const checkbox = document.querySelector(".theme"); //theme button
const body = document.body; //body
const hero = document.querySelector("nav:nth-child(1) a img"); // nav logo

const openBtn = document.querySelector(".openbtn"); // burgermenu button
const mobilenav = document.querySelector(".wrapper-nav nav ul"); // open/close menu (for mobile)

const houseButtons = document.querySelectorAll(".houseDetail details[id^='house']"); // rate button
let starForms = document.querySelectorAll(".houseDetail form[id^='houseForm']"); // form section inside the li
const formSubmit = document.querySelector(".wrapper-house ul .houseDetail form button[id^='houseSubmit']"); // submit rate button


// changes funda theme [alter is de secondary color pallete]
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      body.classList.add("alter");
      hero.src = "/images/01-funda-Orange.png"; // Set the image to dark mode
    } else {
      body.classList.remove("alter");
      hero.src = "/images/02-funda-Blue.png"; // Set the image to light mode
    }
  });

//  burgermenu function
  openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
    mobilenav.classList.toggle("moved");
  });


// show form
houseButtons.forEach((detailsElement) => {
  const summaryElement = detailsElement.querySelector('summary');

  detailsElement.addEventListener('toggle', () => {
    if (detailsElement.open) {
      summaryElement.textContent = "Sluiten";
      summaryElement.classList.add("rotate");
    } else {
      summaryElement.textContent = "Beoordeel huis";
      summaryElement.classList.remove("rotate");
    }
  });
});


// clientside voor de post
// Voeg een event listener toe aan elk formulier

starForms.forEach((starForm) => {
  starForm.addEventListener("submit", function (event) {

    // Maak een FormData-object van het formulier
    let starItem = new FormData(this);

    // Voeg 'clientside' toe aan de FormData
    starItem.append("clientside", true);

    // Voer het fetch-verzoek uit naar de server
    fetch(this.action, {
      method: this.method,
      body: new URLSearchParams(starItem),
    }).then();

    // Wanneer het item succesvol is verzonden, voert hij het volgende uit
    let formSubmit = this.querySelector("button[type='submit']");
    formSubmit.classList.add("succes");
    formSubmit.innerText = "Gelukt"; // Change the text of the button to "Gelukt"
    formSubmit.disabled = true; // Disable the button

    // Voorkom standaardgedrag van het formulier
    event.preventDefault();
  });
});

// animation child delay

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("ul .houseDetail, .wrapper-lists ul li")
    .forEach((li, index) => {
      li.style.animationDelay = `${index * 0.2}s`;
    });
});
