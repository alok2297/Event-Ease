var button = document.querySelector('.swiper-button-next');

// Set the desired height and width
button.style.height = '30px';
button.style.width = '10px';

var outerSlider = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var innerSlider = new Swiper(".popular_slider", {
  slidesPerView: 4.5,
  spaceBetween: 35,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
