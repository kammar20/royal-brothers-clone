document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');

  // Clone images to create a seamless infinite loop
  images.forEach((img) => {
    let clone = img.cloneNode(true);
    slider.appendChild(clone);
  });
});
