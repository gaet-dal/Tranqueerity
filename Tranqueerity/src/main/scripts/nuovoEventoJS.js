
document.addEventListener("DOMContentLoaded", function () {
    const btnConferma = document.querySelector("button.circle-icon");
    const nome = document.getElementById("nomeEvento");
    const orario = document.getElementById("orarioEvento");
    const descrizione = document.getElementById("descrizioneEvento");
    const conferma = document.getElementById("conferma");
    const errore = document.getElementById("errore");
    const form = document.getElementById("event-form");

    let events = JSON.parse(localStorage.getItem("events"));

    btnConferma.addEventListener("click", () => {
        const orarioPattern = /^([01]\d|2[0-3]):([0-5]\d)$/; // formato 24H hh:mm

        if (
            nome.value.trim() &&
            orario.value.trim() &&
            descrizione.value.trim()
        ) {
            if (!orarioPattern.test(orario.value.trim())) {
                errore.textContent = "⚠ Inserisci un orario valido nel formato 24H (es. 13:45)";
                errore.style.display = "block";
                return;
            }

            const newEvent = {
                name : nome.value.trim(),
                date : orario.value.trim(),
                description : descrizione.value.trim(),
            };

            events.push(newEvent);
            localStorage.setItem("events", JSON.stringify(events));

            form.style.display = "none";
            btnConferma.style.display = "none";
            errore.style.display = "none";
            conferma.style.display = "block";


            window.location.href = "visualizzaEventi.html";

        } else {
            errore.textContent = "⚠ Compila tutti i campi prima di confermare!";
            errore.style.display = "block";
        }
    });


    //tasti per tornare indietro e per chiudere la finestra dopo conferma di creazione evento
    btnBack.addEventListener("click", () => {
        window.location.href = "recensioneLuogo.html";
    });

    btnClose.addEventListener("click", () => {
        window.location.href = "recensioneLuogo.html";
    });
});



