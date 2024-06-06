// Selecteer het <html> element
const htmlElement = document.documentElement;

// Voeg de class "js" toe aan het <html> element
htmlElement.classList.add("js");

const checkbox = document.querySelector(".theme");
const body = document.body;
const hero = document.querySelector("nav:nth-child(1) a img"); // Selects the IMG in the first nav
const openBtn = document.querySelector(".openbtn");
const mobilenav = document.querySelector(".wrapper-nav nav ul");

document.addEventListener("DOMContentLoaded", (event) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      body.classList.add("alter");
    } else {
      body.classList.remove("alter");
    }

    if (checkbox.checked) {
      // Check if the checkbox is checked
      hero.src = "/images/01-funda-Orange.png"; // Set the image to dark mode
    } else {
      hero.src = "/images/02-funda-Blue.png"; // Set the image to light mode
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
    mobilenav.classList.toggle("moved");
  });
});
