var advantagesSliderInMobile = undefined;

function initAdvantagesSliderInMobile() {
  var windowWidth = $(window).width();

  if (windowWidth <= 959 && advantagesSliderInMobile == undefined) {
    advantagesSliderInMobile = new Swiper('.js-advantages-slider', {
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
  } else if (windowWidth >= 960 && advantagesSliderInMobile != undefined) {
    advantagesSliderInMobile.destroy();
    advantagesSliderInMobile = undefined;
    $('.js-advantages-slider .swiper-wrapper').removeAttr('style');
    $('.js-advantages-slider .swiper-slide').removeAttr('style');
  }
}

$(window).on('load resize', function () {
  initAdvantagesSliderInMobile();
});
