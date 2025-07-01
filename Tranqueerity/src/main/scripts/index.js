// Dati iniziali
if (!localStorage.getItem('places')) {
    const samplePlaces = [
        {
            id: 1,
            name: "Luogo 1",
            address: "Via Giovanni Paolo II",
            image: "https://placehold.co/296x143",
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
            image: "https://placehold.co/296x144",
            reviews: [
                { user: "User3", rating: 3, comment: "Carino, ma potrebbe migliorare." }
            ],
            tags: ["Economico"]
        },
        {
            id: 3,
            name: "Luogo 3",
            address: "Via Giovanni Paolo III",
            image: "https://placehold.co/296x144",
            reviews: [
                { user: "User3", rating: 3, comment: "Carino, ma potrebbe migliorare." }
            ],
            tags: ["Economico"]
        }
    ];
    localStorage.setItem('places', JSON.stringify(samplePlaces));
}

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
    
    const icons = document.createElement('div');
    icons.className = 'card-icons';
    
    cardInfo.appendChild(title);
    cardInfo.appendChild(address);
    
    card.appendChild(img);
    card.appendChild(cardInfo);
    card.appendChild(icons);
    
    return card;
}

// Carica i luoghi all'avvio della pagina e li aggiunge al DOM
document.addEventListener('DOMContentLoaded', function() {
    const places = JSON.parse(localStorage.getItem('places')) || [];
    const cardList = document.querySelector('.card-list');

    // Elimina eventuali card esistenti
    cardList.innerHTML = '';
    
    // Crea le nuove card
    places.forEach(place => {
        const card = createCard(place);
        cardList.appendChild(card);
    });
});