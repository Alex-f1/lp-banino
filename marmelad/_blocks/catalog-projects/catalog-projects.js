var catalogProjectsSliderInMobile = undefined;
let catalogProjectsPreviewOffsetTop;

function initCatalogProjectsSliderInMobile() {

  var windowWidth = $(window).width();

  $.each($('.js-catalog-projects-slider'), function (i, el) {
    var className = '.js-catalog-projects-slider-id' + i;
    $(el).addClass(className.replace('.', ''));
    
    if (windowWidth <= 959 && catalogProjectsSliderInMobile == undefined) {
      catalogProjectsSliderInMobile = new Swiper(className, {
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
          768: {
            slidesPerView: 2,
            spaceBetween: 25
          }
        }
      });

    } else if (windowWidth >= 960 && catalogProjectsSliderInMobile != undefined) {
      catalogProjectsSliderInMobile.destroy();
      catalogProjectsSliderInMobile = undefined;
      $('.js-catalog-projects-slider .swiper-wrapper').removeAttr('style');
      $('.js-catalog-projects-slider .swiper-slide').removeAttr('style');
    }

    $('.js-toggle-button').on('click', function () {
      $(this)
        .addClass('_is-active')
        .siblings().removeClass('_is-active');
      if (windowWidth <= 767) {
        $(window).scrollTop(catalogProjectsPreviewOffsetTop);
      }
  
      $('.catalog-projects__preview')
        .find('.js-catalog-projects-slider')
        .removeClass('_is-active-show-preview')
        .eq($(this).index()).addClass('_is-active-show-preview');
      
      catalogProjectsSliderInMobile = new Swiper(className, {
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
          768: {
            slidesPerView: 2,
            spaceBetween: 25
          }
        }
      });

      if (windowWidth >= 960 && catalogProjectsSliderInMobile != undefined) {
        catalogProjectsSliderInMobile.destroy();
        catalogProjectsSliderInMobile = undefined;
        $('.js-catalog-projects-slider .swiper-wrapper').removeAttr('style');
        $('.js-catalog-projects-slider .swiper-slide').removeAttr('style');
      }
    });
  });
}

$(window).on('load resize', function () {
  
  catalogProjectsPreviewOffsetTop = $('.catalog-projects__preview').offset().top - 25;

  initCatalogProjectsSliderInMobile();
});
