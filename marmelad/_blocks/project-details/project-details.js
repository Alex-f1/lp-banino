function projectDetailsPoint() {
  if ($(window).width() >= 1280) {
    $('.project-details__point').on('click', function () {
      $(this)
        .addClass('_is-active')
        .siblings().removeClass('_is-active');
    
      $('.project-details__text')
        .removeClass('_is-active-show')
        .eq($(this).index()).addClass('_is-active-show');
    });
    
    $(document).on('click', function (e) {
      if ($(e.target).closest('.project-details__schema').length) {
        return;
      }
    
      $('.project-details__point').removeClass('_is-active');
      $('.project-details__text').removeClass('_is-active-show');
    });
  }
}

projectDetailsPoint()

var projectDetailsSliderInMobile = undefined;

function initProjectDetailsSliderInMobile() {
  var windowWidth = $(window).width();

  if (windowWidth <= 1279 && projectDetailsSliderInMobile == undefined) {
    projectDetailsSliderInMobile = new Swiper('.js-project-details-slider', {
      spaceBetween: 30,
      slidesPerView: 3,
      effect: 'slide',
      loop: false,
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
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      on: {
        init: function () {
          $('.project-details__point').first().addClass('_is-active');
        },
      },
    });
    $('.project-details__point').on('click', function () {

      $(this)
        .addClass('_is-active')
        .siblings().removeClass('_is-active');
      let $thisIndexPoint = $(this).data('index-point')

      projectDetailsSliderInMobile.slideTo($thisIndexPoint);

    });

    projectDetailsSliderInMobile.on('transitionStart', function () {

      $('.project-details__point')
        .removeClass('_is-active')
        .eq(projectDetailsSliderInMobile.activeIndex).addClass('_is-active');

    });
  } else if (windowWidth >= 1280 && projectDetailsSliderInMobile != undefined) {
    projectDetailsSliderInMobile.destroy();
    projectDetailsSliderInMobile = undefined;
    $('.js-project-details-slider .swiper-wrapper').removeAttr('style');
    $('.js-project-details-slider .swiper-slide').removeAttr('style');
  }
  
}

$(window).on('load resize', function () {
  initProjectDetailsSliderInMobile();
});
