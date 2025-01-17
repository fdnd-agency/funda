// Verbind HTML-elementen met JavaScript
let heartButton = document.getElementById('heart-button');
let fullHeart = document.getElementById('full-heart');
let emptyHeart = document.getElementById('empty-heart');
let counter = document.getElementById('favorite-counter');
let favoriteCount = 0; // Begin met 0 favorieten

// Voeg een klikgebeurtenis toe aan de hartknop
heartButton.addEventListener('click', function () {
    if (emptyHeart.style.display === '' || emptyHeart.style.display === 'block') {
        // Maak het lege hart onzichtbaar en het volle hart zichtbaar
        emptyHeart.style.display = 'none';
        fullHeart.style.display = 'block';

        // Verhoog de favorieten-teller naar 1
        favoriteCount = 1;
        counter.style.display = 'flex'; // Laat de teller zien
    } else {
        // Maak het volle hart onzichtbaar en het lege hart zichtbaar
        fullHeart.style.display = 'none';
        emptyHeart.style.display = 'block';

        // Zet de favorieten-teller terug naar 0
        favoriteCount = 0;
        counter.style.display = 'none'; // Verberg de teller
    }

    // Toon de nieuwe waarde van de teller
    counter.textContent = favoriteCount;
});


