const reviewContainer = document.getElementsByClassName("review-container")[0];
const reviews = document.getElementsByClassName("review");
let currentIndex = 0;
function showReviews(index) {
  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[index].style.display = "block";
}

function SwipeLeft() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReviews(currentIndex);
}
function SwipeRight() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReviews(currentIndex);
}
showReviews(0);
