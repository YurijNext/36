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
    if($(window).width() < 500 ) {
      $('.mobile-search').slideDown(200);
      $('.mobile-search input').val('');
      $('.mobile-search input').focus();
    } else {
      $('.input-search').val('');
      $('.input-search').toggleClass('input-search--visible');
      $('.input-search').focus();
    }
  });

  $('.btn-close').on('click', function() {
    $('.mobile-search').slideUp(200);
  });


  const banner = new Swiper ('.top-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Navigation arrows
    navigation: {
      nextEl: '.big-next',
      prevEl: '.big-prev',
    },

  });

  const bannerInner = new Swiper ('.slider-inner', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Navigation arrows
    navigation: {
      nextEl: '.inner-next',
      prevEl: '.inner-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },

  });


  $('.drop').on('click', function() {
      $(this).siblings('.footer-col__list').slideToggle('200');
  });

  $('.drop-in ').on('click', function() {
    $(this).children('.footer-col__list').slideToggle('200');
  });

  $('.hamburger').on('click', function() {
    $('.category-name').siblings('.dropdown').slideUp('10');
    $(this).toggleClass('is-active');
    $('html').toggleClass('no-scroll');
    $('body').toggleClass('no-scroll');
    $('.mobile-menu-box').toggleClass('menu-active');
  });



  $('.category-name').on('click', function() {
    $(this).siblings('.dropdown').slideToggle('200');
    $('.category-name').not($(this)).siblings('.dropdown').slideUp('50');
  });


});
