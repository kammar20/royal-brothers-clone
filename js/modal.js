const openModalBtn = document.querySelector('.btn-location');
const closeModalBtn = document.querySelector('.modal-close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container');

// Modal Open
function openModal() {
  document.body.classList.add('no-scroll');
  modalOverlay.classList.add('active');
  modalContainer.classList.add('active');
}

// Modal Close
function closeModal() {
  document.body.classList.remove('no-scroll');
  modalOverlay.classList.remove('active');
  modalContainer.classList.remove('active');
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Search Functionality in Modal
const searchInput = document.querySelector('.modal-search-bar');
const cityContainers = document.querySelectorAll('.modal-img-container');
const clearBtn = document.querySelector('.modal-clear-btn');

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();

  cityContainers.forEach((container) => {
    const cityName = container
      .querySelector('.modal-city-name')
      .textContent.toLowerCase();

    if (cityName.includes(searchValue)) {
      container.style.display = 'block'; //Show matching cities
      container.style.height = 'auto';
    } else {
      container.style.display = 'none'; // Hide non-matching cities
    }
  });
});

// Clear input field and reset city visibility when clicking the clear button
clearBtn.addEventListener('click', function () {
  searchInput.value = '';
  cityContainers.forEach((container) => {
    container.style.display = 'block'; // Show all cities
  });
});
