function searchPlace() {
    const input = document.querySelector("input.search-text");
    const name = input?.value?.trim() || "sample";

    console.log(name);

    const places = JSON.parse(localStorage.getItem('places')) || [];

    const filteredPlaces = places.filter(place => place.name === name);

    const cardList = document.querySelector('.card-list');

    cardList.innerHTML = '';
    filteredPlaces.forEach(place => {
        const card = createCard(place);
        cardList.appendChild(card);
    });

    localStorage.setItem('places', JSON.stringify(places));
}

