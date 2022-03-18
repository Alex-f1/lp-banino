function initQualityCertificatesSlider() {
  const swiper = new Swiper(".js-quality-certificates-slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      960: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });
}

initQualityCertificatesSlider();