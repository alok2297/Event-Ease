var button = document.querySelector('.swiper-button-next');

// Set the desired height and width
button.style.height = '30px';
button.style.width = '10px';



function toggleDropdown() {
  var dropdownMenu = document.getElementById("hero_sec_dropdownMenu");
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}

function selectItem(item) {
  var searchInput = document.getElementById("hero_sec_searchInput");
  searchInput.value = item;
  toggleDropdown();
}


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
