const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let items = document.querySelectorAll('.carousel-item');
const visibleItems = 3; // Change this if you want to display a different number of items
let index = 1; // Start at the first real item

// Clone first and last items for seamless infinite scroll
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

carouselInner.appendChild(firstClone);
carouselInner.insertBefore(lastClone, items[0]);

// Update items list after cloning
items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Function to calculate dynamic slide width
function getSlideWidth() {
  return items[0].offsetWidth + 20; // Adjust margin if needed
}

// Set initial position
carouselInner.style.transform = `translateX(${-index * getSlideWidth()}px)`;

function updateCarousel(smooth = true) {
  const slideWidth = getSlideWidth();
  carouselInner.style.transition = smooth
    ? 'transform 0.5s ease-in-out'
    : 'none';
  carouselInner.style.transform = `translateX(${-index * slideWidth}px)`;
  updateMiddleItem(); // Highlight next slide
}

// Function to highlight the NEXT active slide (like 123 → 234 effect)
function updateMiddleItem() {
  items.forEach((item) => item.classList.remove('middle'));

  let middleIndex = index + Math.floor(visibleItems / 2);
  items[middleIndex]?.classList.add('middle');
}

// Move Next (One Slide at a Time)
nextButton.addEventListener('click', () => {
  index++;
  updateCarousel();

  if (index === totalItems - 1) {
    setTimeout(() => {
      index = 1;
      updateCarousel(false);
    }, 500);
  }
});

// Move Previous (One Slide at a Time)
prevButton.addEventListener('click', () => {
  index--;
  updateCarousel();

  if (index === 0) {
    setTimeout(() => {
      index = totalItems - 2;
      updateCarousel(false);
    }, 500);
  }
});

// Initial Position
updateCarousel(false);

// Adjust on window resize
window.addEventListener('resize', () => updateCarousel(false));
