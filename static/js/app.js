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
});