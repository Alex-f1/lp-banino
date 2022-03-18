var advantagesProductSliderInMobile = undefined;

function initAdvantagesProductSliderInMobile() {
  var windowWidth = $(window).width();

  if (windowWidth <= 959 && advantagesProductSliderInMobile == undefined) {
    advantagesProductSliderInMobile = new Swiper('.js-advantages-product-slider', {
      slidesPerView: 3,
      effect: 'slide',
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25
        }
      }
    });
  } else if (windowWidth >= 960 && advantagesProductSliderInMobile != undefined) {
    advantagesProductSliderInMobile.destroy();
    advantagesProductSliderInMobile = undefined;
    $('.js-advantages-product-slider .swiper-wrapper').removeAttr('style');
    $('.js-advantages-product-slider .swiper-slide').removeAttr('style');
  }
}

$(window).on('load resize', function () {
  initAdvantagesProductSliderInMobile();
});
