$(window).on('load resize', function () {
  const specialistAdviceInner = $('.specialist-advice__inner');
  let containOffSetLeft = $('.contain').offset().left + 20;

  specialistAdviceInner.css('margin-left', containOffSetLeft);
});

$('.phone-mask').mask('+7 (000) 000-00-00');