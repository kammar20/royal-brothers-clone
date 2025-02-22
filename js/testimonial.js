const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let items = document.querySelectorAll('.carousel-item');
const visibleItems = 3;
let index = 1;

const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

carouselInner.appendChild(firstClone);
carouselInner.insertBefore(lastClone, items[0]);

items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Function to calculate dynamic slide width
function getSlideWidth() {
  return items[0].offsetWidth + 20;
}

// initial position
carouselInner.style.transform = `translateX(${-index * getSlideWidth()}px)`;

function updateCarousel(smooth = true) {
  const slideWidth = getSlideWidth();
  carouselInner.style.transition = smooth
    ? 'transform 0.5s ease-in-out'
    : 'none';
  carouselInner.style.transform = `translateX(${-index * slideWidth}px)`;
  updateMiddleItem();
}

function updateMiddleItem() {
  items.forEach((item) => item.classList.remove('middle'));

  let middleIndex = index + Math.floor(visibleItems / 2);
  items[middleIndex]?.classList.add('middle');
}

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

window.addEventListener('resize', () => updateCarousel(false));
