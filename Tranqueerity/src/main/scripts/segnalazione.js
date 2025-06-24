let currentReviewItem = null;
let reportedReviews = [0, 0, 0, 0];

function report() {
    document.querySelectorAll('.report-button').forEach(button => {
        button.addEventListener('click', function () {
            currentReviewItem = button.closest(".review");

            // Ottieni il testo della recensione
            const reviewText = currentReviewItem?.childNodes[0]?.nodeValue.trim();

            // Estrai il numero usando una regex
            const match = reviewText.match(/Recensione\s+(\d+)/);
            const numero = match ? parseInt(match[1]) : null;

            if (numero !== null) {
                console.log("Segnalata recensione numero " + numero);
                reportedReviews[numero-1]++;

                if (reportedReviews[numero-1] > 2) {
                    currentReviewItem.innerHTML = "<em>Recensione rimossa per segnalazioni multiple</em>";
                }
            } else {
                console.warn("Numero recensione non trovato nel testo:", reviewText);
            }
        });
    });
}