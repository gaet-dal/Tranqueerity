function addRecensione() {
    console.log("Bottone cliccato");
    // Ottieni il valore del commento dalla textarea
    let commento = document.getElementById("comment").value.trim();

    // Controlla che il commento non sia vuoto
    if (commento === "") {
        alert("Il commento non può essere vuoto!");
        return;
    }

    // Crea un nuovo elemento di recensione
    let nuovaRecensione = document.createElement("div");
    nuovaRecensione.classList.add("review-item");

    // Aggiungi un profilo generico per il commento
    let profilo = document.createElement("div");
    profilo.classList.add("profile");
    profilo.textContent = "Lucia";

    // Aggiungi il commento
    let testoRecensione = document.createElement("div");
    testoRecensione.classList.add("review");
    testoRecensione.textContent = commento;

    // Unisci gli elementi
    nuovaRecensione.appendChild(profilo);
    nuovaRecensione.appendChild(testoRecensione);

    const rating = document.querySelectorAll('#starRating.star');

    let selected = 0;
    rating.forEach((star, idx) => {
        star.addEventListener('click', () => {
            selected = star.value;
            highlightStars(selected);
            console.log("Hai votato:", selected);
        });
    });


    let starValue = document.createElement("div");
    starValue.classList.add("rating")
    for(let i = 0; i < selected; i++){
        let star = document.createElement("span");
        star.classList.add("star");
        starValue.appendChild(star);
    }

    nuovaRecensione.appendChild(starValue);

    console.log(starValue);

    // Aggiungi la nuova recensione alla sezione delle altre recensioni
    document.querySelector(".other-reviews").appendChild(nuovaRecensione);

    // Resetta la textarea dopo l'invio
    document.getElementById("comment").value = "";
}
