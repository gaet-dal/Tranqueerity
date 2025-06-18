function addRecensione() {
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
    profilo.textContent = "Nuovo Utente";

    // Aggiungi il commento
    let testoRecensione = document.createElement("div");
    testoRecensione.classList.add("review");
    testoRecensione.textContent = commento;

    // Unisci gli elementi
    nuovaRecensione.appendChild(profilo);
    nuovaRecensione.appendChild(testoRecensione);

    // Aggiungi la nuova recensione alla sezione delle altre recensioni
    document.querySelector(".other-reviews").appendChild(nuovaRecensione);

    // Resetta la textarea dopo l'invio
    document.getElementById("comment").value = "";
}
