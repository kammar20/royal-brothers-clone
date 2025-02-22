const track = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length / 2;
let currentIndex = 0;

function moveSlides() {
  currentIndex++;
  track.style.transform = `translateX(${-currentIndex * 300}px)`;

  // Reset to the first duplicate slide when reaching the end
  if (currentIndex >= totalSlides) {
    setTimeout(() => {
      track.style.transition = 'none'; // Disable transition for instant reset
      track.style.transform = 'translateX(0)';
      currentIndex = 0;
    }, 1000);
  } else {
    track.style.transition = 'transform 1s ease-in-out';
  }
}

// Move slides every 3 seconds
setInterval(moveSlides, 3000);
