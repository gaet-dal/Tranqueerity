function creaEvento(event){
    //recupero codide della card;
    const card = document.createElement('div');

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    //titolo dell'evento
    const title = document.createElement('h2');
    title.className = 'eventTitle';
    title.textContent = event.name;

    //descrizione dell'evento
    const description = document.createElement('p');
    description.className = 'cardDescription';
    description.textContent = event.description;

    const time=document.createElement('p');
    time.className="OrarioEvento";
    time.textContent = event.date; //orario dell'evento

    const place=document.createElement('p');
    place.className="LuogoEvento";
    place.textContent= event.luogo; //luogo dell'evento

    const icons = document.createElement('div');
    icons.className = 'card-icons';

    cardInfo.appendChild(title);
    cardInfo.appendChild(description);
    cardInfo.appendChild(time);
    cardInfo.appendChild(place);

    card.appendChild(cardInfo); //attacca il nuovo elemento a quelli già esistenti;
    card.appendChild(icons);

    console.log("card" + card);
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