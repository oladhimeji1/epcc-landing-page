const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: true,
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
