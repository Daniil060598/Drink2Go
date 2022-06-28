const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav_nojs");

navToggle.addEventListener("click", function () {
if (navMain.classList.contains("main-nav_closed")) {
navMain.classList.remove("main-nav_closed");
navMain.classList.add("main-nav_opened");
} else {
navMain.classList.add("main-nav_closed");
navMain.classList.remove("main-nav_opened");
}
});

// init Swiper:
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: ".slider__nav_next",
    prevEl: ".slider__nav_prev",
  },
  pagination: {
    el: ".slider__pagination",
    bulletElement: "button",
    bulletClass: "slider__pagination-button",
    bulletActiveClass: "slider__pagination-button_current",
    clickable: true,
  },
});
