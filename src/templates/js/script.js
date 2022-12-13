// ドキュメント読み込み時に実行
jQuery(function($) {
  $(function() {
    var scale, w, wn;
    $('a[href^="#"]').on('click', function() {
      var href, position, speed, target;
      speed = 500;
      href = $(this).attr("href");
      target = $(href === "#" || href === "" ? 'html' : href);
      position = target.offset().top;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
    $('html,body').animate({
      scrollTop: 0
    }, '1');
    // totopボタン
    $('#totop a[href^="#"]').on('click touchstart', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500);
      return false;
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 110) {
        return $("#totop").fadeIn();
      } else {
        return $("#totop").fadeOut();
      }
    });
    w = $(window).innerWidth();
    wn = $(window).innerWidth();
    scale = $(window).innerWidth() / 375;
    console.log(scale);
    if (w <= 768) {
      $('.slider-year-sp').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        infinite: false
      });
      $('.map-block').css('transform', 'scale(' + scale + ')');
      $(window).on('resize', function() {
        wn = $(window).innerWidth();
        scale = wn / 375;
        return $('.map-block').css('transform', 'scale(' + scale + ')');
      });
    }
    $(window).on('scroll load', function() {
      var scr;
      scr = $(window).scrollTop();
      if (scr <= 600) {
        return $('.js-cta-bottom').fadeOut();
      } else {
        return $('.js-cta-bottom').fadeIn();
      }
    });
    $(window).on('load', function() {
      return $('body').addClass('is-loaded');
    });
    // else
    // $('body').removeClass('is-inview-footer')
    $('.js-nav-close').on('click', function() {
      return $('#nav').fadeOut();
    });
    $('.js-nav-toggle').on('click', function() {
      return $('#nav').fadeIn();
    });
    return $('#nav a').on('click', function() {
      return $('#nav').fadeOut();
    });
  });
  (function() {
    return $(window).on('load', function() {
      return setTimeout(function() {
        $('html.home, body.home').addClass('is-loaded-go');
        return $('.inview').on('inview', function(event, isInView) {
          if (isInView) {
            return $(this).addClass('is-inview-go');
          }
        });
      }, 5000);
    });
  })();
  return (function() {    // モーダルの作成
    return $(function() {
      var slider;
      slider = $('.js-slider-gallery').slick({
        autoplay: true,
        arrows: true,
        // dots: true
        // slidesToShow: 1
        // centerMode: true
        infinite: true,
        variableWidth: true,
        fade: true,
        speed: 1200,
        autoplaySpeed: 2500,
        adaptiveHeight: true
      });
      $('.js-modal').on('click', function() {
        var target;
        target = $(this).data().id;
        slider.css('opacity', 0);
        slider.animate({
          'z-index': 1
        }, 2000, function() {
          slider.slick('setPosition');
          return slider.animate({
            'opacity': 1
          });
        });
        $('#modal-base').fadeIn().addClass('is-active');
        return $('#' + target).fadeIn().addClass('is-active');
      });
      $('#modal-base, .modal-content').on('click', function() {
        $('#modal-base').fadeOut().removeClass('is-active');
        return $('.modal-content').fadeOut().removeClass('is-active');
      });
      return $('.modal-block').on('click', function(e) {
        return e.stopPropagation();
      });
    });
  })();
});
