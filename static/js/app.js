'use strict';
/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */

function setViewportProperty() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
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
          clickable: true
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
          clickable: true
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

  function initCatalogPreviewSlider() {
    var swiper = new Swiper(".js-catalog-preview-slider", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          spaceBetween: 20
        },
        361: {
          spaceBetween: 30
        }
      }
    });
    $(window).on('load resize', function () {
      var catalogPreviewWrapper = $('.js-catalog-preview-wrapper');
      var containOffSetLeft = $('.contain').offset().left + 20;
      catalogPreviewWrapper.css('margin-left', containOffSetLeft);
    });
  }

  initCatalogPreviewSlider();
  var catalogProjectsSliderInMobile = undefined;
  var catalogProjectsPreviewOffsetTop;

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
            clickable: true
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
        $(this).addClass('_is-active').siblings().removeClass('_is-active');

        if (windowWidth <= 767) {
          $(window).scrollTop(catalogProjectsPreviewOffsetTop);
        }

        $('.catalog-projects__preview').find('.js-catalog-projects-slider').removeClass('_is-active-show-preview').eq($(this).index()).addClass('_is-active-show-preview');
        catalogProjectsSliderInMobile = new Swiper(className, {
          slidesPerView: 3,
          effect: 'slide',
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
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
  $(window).on('load resize', function () {
    var specialistAdviceInner = $('.specialist-advice__inner');
    var containOffSetLeft = $('.contain').offset().left + 20;
    specialistAdviceInner.css('margin-left', containOffSetLeft);
  });
  $('.phone-mask').mask('+7 (000) 000-00-00');
});