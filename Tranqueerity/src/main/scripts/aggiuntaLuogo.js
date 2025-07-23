function addPlace(){
    // Get form values
    const placeName = document.getElementById('placeName').value;
    const placeAddress = document.getElementById('placeAddress').value;
    const placeImage = document.getElementById('placeImage').value;

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