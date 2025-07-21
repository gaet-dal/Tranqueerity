document.addEventListener('DOMContentLoaded', function() {
    const placeId = localStorage.getItem('place');
    const places = JSON.parse(localStorage.getItem('places')) || [];
    const place = places.find(p => p.id == placeId);

    if (place) {
        document.querySelector('.location-title').textContent = place.name;
        document.querySelector('.location-address').textContent = place.address;
        document.querySelector('.image').src = place.image;

        const tagsContainer = document.querySelector('.tags');
        tagsContainer.innerHTML = ''; // Clear existing tags
        place.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        const reviewsContainer = document.querySelector('.other-reviews');
        reviewsContainer.innerHTML = ''; // Clear existing reviews
        place.reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';

            const profile = document.createElement('div');
            profile.className = 'profile';
            profile.textContent = review.user;

            const reviewContent = document.createElement('div');
            reviewContent.className = 'review';
            reviewContent.textContent = review.comment;

            const ratingReview = document.createElement('div');
            ratingReview.className = 'rating-review';

            for (let i = 0; i < 5; i++) {
                const star = document.createElement('div');
                star.className = 'r-icon';
                const starImg = document.createElement('img');
                starImg.src = i < review.rating ? 'img/star.png' : 'img/star_border.png';
                star.appendChild(starImg);
                ratingReview.appendChild(star);
            }

            reviewContent.appendChild(ratingReview);
            reviewItem.appendChild(profile);
            reviewItem.appendChild(reviewContent);
            reviewsContainer.appendChild(reviewItem);
        });
    }
});