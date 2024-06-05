const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
const fullfavitem = document.querySelector('.favorites li');
const loadingcircle = document.querySelector('.delete svg');


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


let deleteForm = document.querySelector('.delete');

// clientside voor de delete
deleteForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van het formulier
    loadingcircle.classList.add("load")
    // Maak een FormData-object van het formulier
    let deleteItem = new FormData(this);

    // Voeg 'favoriteclient' toe aan de FormData
    deleteItem.append('favoriteclient', true);

    // Voer het fetch-verzoek uit naar de delete-endpoint van de server
    fetch(this.action, {
        method: this.method,
        body: deleteItem
    })
    .then(response => {
        if (response.ok) {
            // waneer het item succesvol is verwijderd voert hij het volgende uit
            console.log('Item succesvol verwijderd');
            fullfavitem.classList.add('gone')
        } else {
            // Als er een fout optreedt, geef dan een foutmelding weer
            console.error('Er is een fout opgetreden bij het verwijderen van het item');
        }
    })
    .catch(error => {
        console.error('Er is een fout opgetreden:', error);
    });
    
});


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('js-enabled');
});

function grow(event) {
    const item = event.currentTarget;
    item.classList.toggle('active');
}