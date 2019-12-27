$(document).ready(function () {
  /** Masked Input **/
  $('input[name=phone]').mask('+38(099) 999 99 99');

  /** Anchor link **/
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

  $('.open-search').on('click', function() {
    $('.input-search').val('');
    $('.input-search').toggleClass('input-search--visible');
    $('.input-search').focus();
  });


  var banner = new Swiper ('.top-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })


});
