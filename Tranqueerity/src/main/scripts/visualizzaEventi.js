function creaEvento(event){
    const card = document.createElement('div');

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = event.name;

    const description = document.createElement('p');
    description.className = 'card-address';
    description.textContent = event.description;

    const icons = document.createElement('div');
    icons.className = 'card-icons';

    cardInfo.appendChild(title);
    cardInfo.appendChild(description);

    card.appendChild(cardInfo);
    card.appendChild(icons);

    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const cardList = document.querySelector('.card-list');

    // Elimina eventuali card esistenti
    cardList.innerHTML = '';


    events.forEach(event => {
        const card = creaEvento(event);
        cardList.appendChild(card);
    });

});