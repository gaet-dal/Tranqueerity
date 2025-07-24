function addPlace(){
    // Get form values
    const placeName = document.getElementById('placeName').value;
    const placeAddress = document.getElementById('placeAddress').value;
    let placeImage = document.getElementById('placeImage').value;

    const regex = /^(?![^?]*\.(jpg|jpeg|png|gif|bmp|webp|tiff|svg)$).+/i;

    if (placeImage ===''){
        placeImage = 'img/rosthouse.jpg';
    } else if (!regex.test(placeImage)){
        alert("Devi inserire un link che non finisca con le estensioni di un file immagine!");
        return;
    }

    if(placeName === '' || placeAddress === '') {
        alert("Campi mancanti");
        return;
    }

    // Retrieve existing places from localStorage or initialize an empty array
    let places = JSON.parse(localStorage.getItem('places')) || [];

    // Create a new place object
    const newPlace = {
        id: places.length > 0 ? Math.max(...places.map(p => p.id)) + 1 : 1, // Generate a new ID
        name: placeName,
        address: placeAddress,
        image: placeImage
    };

    // Add the new place to the array
    places.push(newPlace);

    // Save the updated array back to localStorage
    localStorage.setItem('places', JSON.stringify(places));

    // Alert the user and redirect to the homepage
    alert('Luogo aggiunto con successo!');
    window.location.href = 'index.html'; // Redirect to homepage
}