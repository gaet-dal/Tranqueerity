function creaEvento(event){
    //recupero codide della card;
    const card = document.createElement('div');
    card.className = 'card';


    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';

    // Contenitore 2x2 per titolo e orario;
    const row1 = document.createElement('div');
    row1.className = 'card-row';

    //titolo dell'evento
    const title = document.createElement('h2');
    title.className = 'eventTitle';
    title.textContent = event.name;

    const time=document.createElement('p');
    time.className="OrarioEvento";
    time.textContent = "🕒 " + event.date; //orario dell'evento

    row1.appendChild(title);
    row1.appendChild(time);

    //contenitore 2x2 per descrizione e luogo;
    const row2 = document.createElement('div');
    row2.className = 'card-row';

    //descrizione dell'evento
    const description = document.createElement('p');
    description.className = 'cardDescription';
    description.textContent = event.description;

    const place=document.createElement('p');
    place.className="LuogoEvento";
    place.textContent = "📍 " + event.luogo; //luogo dell'evento

    const icons = document.createElement('div');

    row2.appendChild(description);
    row2.appendChild(place);

    // Assemblaggio finale
    cardInfo.appendChild(row1);
    cardInfo.appendChild(row2);

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