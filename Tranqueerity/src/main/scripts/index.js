// Dati iniziali
if (!localStorage.getItem('places')) {
    const samplePlaces = [
        {
            id: 1,
            name: "Luogo 1",
            address: "Via Giovanni Paolo II",
            image: "https://placehold.co/296x143"
        },
        {
            id: 2,
            name: "Luogo 2",
            address: "Via Giovanni Paolo II",
            image: "https://placehold.co/296x144"
        }
    ];
    localStorage.setItem('places', JSON.stringify(samplePlaces));
}

// Funzione per la creazione di una card dinamica
function createCard(place) {
    const card = document.createElement('div');
    card.className = 'card';
    
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