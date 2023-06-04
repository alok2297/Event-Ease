var button = document.querySelector('.swiper-button-next');

// Set the desired height and width
button.style.height = '30px';
button.style.width = '10px';

var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".popular_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});