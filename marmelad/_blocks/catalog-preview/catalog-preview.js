function initCatalogPreviewSlider() {
  const swiper = new Swiper(".js-catalog-preview-slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      361: {
        spaceBetween: 30,
      },
    },
  });

  $(window).on('load resize', function () {
    const catalogPreviewWrapper = $('.js-catalog-preview-wrapper');
    let containOffSetLeft = $('.contain').offset().left + 20;

    catalogPreviewWrapper.css('margin-left', containOffSetLeft);
  });
}

initCatalogPreviewSlider();