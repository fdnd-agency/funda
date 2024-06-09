// Selecteer het <html> element
const htmlElement = document.documentElement;

// Voeg de class "js" toe aan het <html> element
htmlElement.classList.add("js");

const checkbox = document.querySelector(".theme"); //theme button
const body = document.body; //body
const hero = document.querySelector("nav:nth-child(1) a img"); // nav logo 
const openBtn = document.querySelector(".openbtn"); // burgermenu button
const mobilenav = document.querySelector(".wrapper-nav nav ul"); // open/close menu (for mobile)
const houseButtons = document.querySelectorAll(".houseDetail button[id^='house']"); // rate button
let starForms = document.querySelectorAll(".houseDetail form[id^='houseForm']"); // form section inside the li
const loadingcircle = document.querySelector('.circular'); // loading circle for the loading state
const formSubmit = document.querySelector('.wrapper-house ul .houseDetail form button[type="submit"]') // submit rate button


// changes funda logo
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


//  burgermenu function
document.addEventListener("DOMContentLoaded", () => {
  openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
    mobilenav.classList.toggle("moved");
  });
});

// show form
document.addEventListener("DOMContentLoaded", () => {
  houseButtons.forEach(button => {
    button.addEventListener("click", () => {
      const houseId = button.id.replace('house', 'houseForm');
      const starFormElement = document.getElementById(houseId);
      if (starFormElement) {
        starFormElement.classList.toggle("ShowForm");
        
        if (starFormElement.classList.contains("ShowForm")) {
          button.textContent = "Close";
          button.classList.add("rotate");
        } else {
          button.textContent = "Rate";
          button.classList.remove("rotate");
        }
      }
    });
  });
});

// client side submit star rating (!!submit button krijgt ook atribuut disabled, gelukt als text en een groene text color als submit succesvol is (not done yet!!)


// clientside voor de post
starForms.addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van het formulier
    loadingcircle.classList.add("load")
    // Maak een FormData-object van het formulier
    let starItem = new FormData(this);

    // Voeg 'clientside' toe aan de FormData
    starItem.append('clientside', true);

    // Voer het fetch-verzoek uit naar de delete-endpoint van de server
    fetch(this.action, {
        method: this.method,
        body: starItem
    })
    .then(response => {
        if (response.ok) {
            // waneer het item succesvol is verwijderd voert hij het volgende uit
            loadingcircle.classList.remove("load");
            formSubmit.classList.add('succes')
        } else {
            // Als er een fout optreedt, geef dan een foutmelding weer
            console.error('Er is een fout opgetreden');
        }
    })
    .catch(error => {
        console.error('Er is een fout opgetreden:', error);
    });
    
});

