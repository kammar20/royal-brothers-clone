document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.slide-track');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length / 2; // Since we have duplicates
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
      }, 1000); // Wait for transition to end, then reset
    } else {
      track.style.transition = 'transform 1s ease-in-out'; // Restore smooth transition
    }
  }

  // Move slides every 5 seconds
  setInterval(moveSlides, 5000);
});
