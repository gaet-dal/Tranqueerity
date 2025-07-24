// Dati iniziali
if (!localStorage.getItem('places')) {
    const samplePlaces = [
        {
            id: 1,
            name: "Luogo 1",
            address: "Via Giovanni Paolo II",
            image: "img/rosthouse.jpg",
            reviews: [
                { user: "User1", rating: 5, comment: "Posto fantastico!" },
                { user: "User2", rating: 4, comment: "Molto accogliente." }
            ],
            tags: ["Accogliente", "Amichevole"]
        },
        {
            id: 2,
            name: "Luogo 2",
            address: "Via Giovanni Paolo II",
            image: "img/rosthouse.jpg",
            reviews: [
                { user: "User3", rating: 3, comment: "Carino, ma potrebbe migliorare." }
            ],
            tags: ["Economico"]
        },
        {
            id: 3,
            name: "Luogo 3",
            address: "Via Giovanni Paolo III",
            image: "img/rosthouse.jpg",
            reviews: [
                { user: "User3", rating: 3, comment: "Carino, ma potrebbe migliorare." }
            ],
            tags: ["Economico"]
        }
    ];
    localStorage.setItem('places', JSON.stringify(samplePlaces));
}

let events = [];
localStorage.setItem("events", JSON.stringify(events));

// Funzione per la creazione di una card dinamica
function createCard(place) {
    const card = document.createElement('div');
    card.className = 'card';
    card.addEventListener('click', () => {
        localStorage.setItem('place', place.id);
        window.location.href = "visualizzaRecensioni.html";
    });
    
    const img = document.createElement('img');
    img.src = place.image;
    img.alt = place.name;
    img.className = 'card-image';

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';
    
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = place.name;
    
    const address = document.createElement('p');
    address.className = 'card-address';
    address.textContent = place.address;

    console.log("Reviws count: ", place.reviews.length)
    let rating = 0;
    for (let r = 0; r<place.reviews.length; r++) {
        console.log("Vote: ", place.reviews[r].rating)
        rating += place.reviews[r].rating;
    }
    rating = Math.round(rating/place.reviews.length);
    console.log("Final rating: ", rating)
    
    const stars = document.createElement('div');
    stars.className = 'rating-vertical';
    for (let i = 0; i<5; i++) {
        let star = document.createElement("span");
        star.classList.add("star");
        star.textContent="★";
        star.value = i+1;
        if (i <= rating) {
            star.classList.add("filled");
        }
        stars.appendChild(star);
    }
    
    cardInfo.appendChild(title);
    cardInfo.appendChild(address);
    
    card.appendChild(img);
    card.appendChild(cardInfo);
    card.appendChild(stars);
    
    return card;
}

// Carica i luoghi all'avvio della pagina e li aggiunge al DOM
document.addEventListener('DOMContentLoaded', function() {
    const places = JSON.parse(localStorage.getItem('places')) || [];
    const cardList = document.querySelector('.card-list');

    // Elimina eventuali card esistenti
    cardList.innerHTML = '';
    
    // Crea le nuove card
    const placeToShow = parseInt(localStorage.getItem("placeToShow")); // può essere null

    const filteredPlaces = isNaN(placeToShow)
        ? places // se non è impostato, mostra tutti
        : places.filter(place => place.id === placeToShow); // altrimenti, solo uno

    filteredPlaces.forEach(place => {
        const card = createCard(place);
        cardList.appendChild(card);
    });

});

function locationOn() {
    const modal = document.getElementById("custom-modal");
    modal.classList.remove("hidden");

    const button = document.getElementById("location-active");
    button.addEventListener('click', function () {
        localStorage.setItem("placeToShow", 3); // mostriamo solamente il luogo con id 3;
        window.location.href = "dummyPosizione.html"; //ridirezioniamo alla pagina di caricamento;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("custom-modal");
    const confirmBtn = document.getElementById("location-active");
    const cancelBtn = document.getElementById("location-off");
    let currentButton = null;

    document.querySelectorAll('.search-locat').forEach(button => {
        button.addEventListener('click', function () {
            currentButton = button;
            modal.classList.remove('hidden');
        });
    });

    confirmBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
        alert("Geolocalizzazione attivata");
    });

    cancelBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
        alert("⚠️ Senza geolocalizzazione non potrai vedere i luoghi vicini.");
    });
});

const container = document.querySelector('.container');
const logoContainer = document.querySelector('.logo-container');

container.addEventListener('scroll', () => {
    if (container.scrollTop > 0) {
        logoContainer.classList.add('scrolled');
    } else {
        logoContainer.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function(){
    localStorage.removeItem("placeToShow");
})

