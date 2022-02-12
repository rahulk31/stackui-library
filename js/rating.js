const ratingStars = document.querySelectorAll("#rating-star");

for (let stars of ratingStars) {
  stars.addEventListener("click", (e) => {
    const currentStarValue = e.target.classList[0].slice(-1);

    for (let i = 0; i < currentStarValue; i++) {
      ratingStars[i].classList.add("rating-yellow-star");
    }

    for (let i = currentStarValue; i < 5; i++) {
      ratingStars[i].classList.remove("rating-yellow-star");
    }
  });
}
