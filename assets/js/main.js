/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// Theme toggle
(function() {
  var storageKey = 'portfolio-theme';
  var root = document.documentElement;

  function getPreferredTheme() {
    try {
      var savedTheme = localStorage.getItem(storageKey);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch (error) {
      return 'dark';
    }

    return 'dark';
  }

  function applyTheme(theme) {
    var isLight = theme === 'light';
    root.classList.toggle('light-theme', isLight);
    syncLogoFrames(theme);

    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
      toggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
      toggle.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }
  }

  function syncLogoFrames(theme) {
    var frames = document.querySelectorAll('.portfolio-logo-frame');
    frames.forEach(function(frame) {
      var source = frame.getAttribute('src');
      if (!source) {
        return;
      }

      var url = new URL(source, window.location.href);
      if (url.searchParams.get('theme') === theme) {
        return;
      }

      url.searchParams.set('theme', theme);
      frame.setAttribute('src', url.href);
    });
  }

  applyTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) {
      return;
    }

    toggle.addEventListener('click', function() {
      var nextTheme = root.classList.contains('light-theme') ? 'dark' : 'light';
      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch (error) {}
      applyTheme(nextTheme);
    });
  });
})();

if (window.jQuery) !(function($) {

  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a, .hero-actions a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $('.nav-menu, .mobile-nav').find('a[href="' + hash + '"]').parent('li').addClass('active');

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
 // $(document).ready(function() {
  //  $('.venobox').venobox();
 // });

})(jQuery);
else console.warn("jQuery not loaded; template features disabled.");
// Image gallery lightbox (fullscreen on click)
// Image gallery lightbox (fullscreen on click)
// Image gallery lightbox (fullscreen on click)
