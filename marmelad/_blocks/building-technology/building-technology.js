var buildingTechnologySliderInMobile = undefined;

function initBuildingTechnologySliderInMobile() {
  var windowWidth = $(window).width();

  if (windowWidth <= 959 && buildingTechnologySliderInMobile == undefined) {
    buildingTechnologySliderInMobile = new Swiper('.js-building-technology-slider', {
      slidesPerView: 2,
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
  } else if (windowWidth >= 960 && buildingTechnologySliderInMobile != undefined) {
    buildingTechnologySliderInMobile.destroy();
    buildingTechnologySliderInMobile = undefined;
    $('.js-building-technology-slider .swiper-wrapper').removeAttr('style');
    $('.js-building-technology-slider .swiper-slide').removeAttr('style');
  }
}

$(window).on('load resize', function () {
  initBuildingTechnologySliderInMobile();
});
