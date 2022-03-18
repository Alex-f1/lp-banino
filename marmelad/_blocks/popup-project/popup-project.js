function initPopupProjectSlider() {
  const swiperThumbs = new Swiper(".js-popup-project-slider-thumbs", {
    spaceBetween: 25,
    slidesPerView: 3,
    loop: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25
      }
    }
  });

  const swiper = new Swiper(".js-popup-project-slider", {
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs,
    },
    
  });

}

initPopupProjectSlider()