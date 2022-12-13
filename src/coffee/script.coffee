# ドキュメント読み込み時に実行
jQuery ($) ->
  $ ->
    $('a[href^="#"]').on 'click', ->
      speed = 500;
      href= $(this).attr("href");
      target = $(if href == "#" || href == "" then 'html' else href);
      position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      false;

    $('html,body').animate({ scrollTop: 0 }, '1')

    # totopボタン
    $('#totop a[href^="#"]').on 'click touchstart', ->
      $('html, body').animate { scrollTop: 0 }, 1500
      false
    $(window).scroll ->
      if $(this).scrollTop() > 110
        $("#totop").fadeIn()
      else
        $("#totop").fadeOut()

    w = $(window).innerWidth()
    wn = $(window).innerWidth()
    scale = $(window).innerWidth() / 375
    console.log scale

    if w <= 768

      $('.slider-year-sp').slick
        autoplay: false
        arrows: true
        dots: true
        infinite: false

      $('.map-block').css('transform', 'scale(' + scale + ')')

      $(window).on 'resize', ->
        wn = $(window).innerWidth()
        scale = wn / 375
        $('.map-block').css('transform', 'scale(' + scale + ')')


    $(window).on 'scroll load', ->
      scr = $(window).scrollTop()

      if scr <= 600
        $('.js-cta-bottom').fadeOut()
      else
        $('.js-cta-bottom').fadeIn()

    $(window).on 'load', ->
      $('body').addClass('is-loaded')


      # else
        # $('body').removeClass('is-inview-footer')

    $('.js-nav-close').on 'click', ->
      $('#nav').fadeOut()

    $('.js-nav-toggle').on 'click', ->
      $('#nav').fadeIn()

    $('#nav a').on 'click', ->
      $('#nav').fadeOut()

  do ->
    $(window).on 'load', ->
      setTimeout(
        ->
          $('html.home, body.home').addClass('is-loaded-go')

          $('.inview').on 'inview', (event, isInView) ->
            if isInView
              $(this).addClass('is-inview-go')
        , 5000)

  # モーダルの作成
  do ->
    $ ->
      slider = $('.js-slider-gallery').slick
        autoplay: true
        arrows: true
        # dots: true
        # slidesToShow: 1
        # centerMode: true
        infinite: true
        variableWidth: true
        fade: true
        speed: 1200
        autoplaySpeed: 2500
        adaptiveHeight: true

      $('.js-modal').on 'click', ->
        target = $(this).data().id
        slider.css 'opacity', 0
        slider.animate { 'z-index': 1 }, 2000, ->
          slider.slick 'setPosition'
          slider.animate 'opacity': 1
        $('#modal-base').fadeIn().addClass('is-active')
        $('#'+target).fadeIn().addClass 'is-active'

      $('#modal-base, .modal-content').on 'click', ->
        $('#modal-base').fadeOut().removeClass('is-active')
        $('.modal-content').fadeOut().removeClass('is-active')

      $('.modal-block').on 'click', (e) ->
        e.stopPropagation()
