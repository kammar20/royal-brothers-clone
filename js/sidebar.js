const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openSidebar = document.getElementById('openSidebar');
const closeSidebar = document.getElementById('closeSidebar');

// Open Sidebar
openSidebar.addEventListener('click', function () {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll'); // Prevent scrolling
});

// Close Sidebar (Click X or Outside)
function closeMenu() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

closeSidebar.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Accordion in sidebar
const accHeader = document.querySelectorAll('.accordion-header');

const accBody = document.querySelector('.accordion-body');

for (let head of accHeader) {
  head.addEventListener('click', function () {
    head.classList.toggle('active');
  });
}
