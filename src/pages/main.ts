import jQuery from 'jquery'
import 'slick-carousel'
import 'jquery-inview'

import '../scss/foundation/_reset.scss'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import '../scss/style.scss'

/**
  ユーザーエージェント判別
  @return _ua.Tablet -> タブレットの場合のみtrue, _ua.Mobile -> スマホの場合のみtrue
*/

const userAgent = (function(u) {
  return {
    Tablet: u.indexOf('windows') !== -1 && u.indexOf('touch') !== -1 && u.indexOf('tablet pc') === -1 || u.indexOf('ipad') !== -1 || u.indexOf('android') !== -1 && u.indexOf('mobile') === -1 || u.indexOf('firefox') !== -1 && u.indexOf('tablet') !== -1 || u.indexOf('kindle') !== -1 || u.indexOf('silk') !== -1 || u.indexOf('playbook') !== -1,
    Mobile: u.indexOf('windows') !== -1 && u.indexOf('phone') !== -1 || u.indexOf('iphone') !== -1 || u.indexOf('ipod') !== -1 || u.indexOf('android') !== -1 && u.indexOf('mobile') !== -1 || u.indexOf('firefox') !== -1 && u.indexOf('mobile') !== -1 || u.indexOf('blackberry') !== -1
  };
})(window.navigator.userAgent.toLowerCase())

/**
 * @param target 対象の変数
 * @returns 値がundefinedなら0を返す
 */

const isUndefinedNumber = (target: number | undefined) => {
  if(target === undefined){
    return 0
  } else {
    return target
  }
}

jQuery(function($) {
  if (userAgent.Tablet) {
    $(function() {
      $('#viewport').attr('content', 'width="1280", user-scalable=yes')
    })
  }
  
  $(function() {

    $('#totop a[href^="#"]').on('click touchstart', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500);
      return false
    })

    $(window).on('scroll', function() {
      let scr: number | undefined = $(this).scrollTop()
      if (scr === undefined) {
        scr = 0
      }

      if (scr > 110) {
        return $("#totop").fadeIn();
      } else {
        return $("#totop").fadeOut();
      }
    });

    let w: number | undefined = $(window).innerWidth()
    w = isUndefinedNumber(w)
    
    let wn: number | undefined = $(window).innerWidth()
    wn = isUndefinedNumber(wn)
    
    let scale: number | undefined = $(window).innerWidth()
    scale = isUndefinedNumber(scale)
    
    if(scale !== 0){
      scale = scale / 375
    }
  
    if (w <= 768) {
      $('.slider-year-sp').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        infinite: false
      });

      $('.map-block').css('transform', 'scale(' + scale + ')')

      $(window).on('resize', function() {
        wn = $(window).innerWidth()
        wn = isUndefinedNumber(wn)
        scale = wn / 375;

        $('.map-block').css('transform', 'scale(' + scale + ')')
      });

    }

    $(window).on('scroll load', function() {
      let scr: number | undefined = $(window).scrollTop();
      scr = isUndefinedNumber(scr)

      if (scr <= 600) {
        $('.js-cta-bottom').fadeOut()
      } else {
        $('.js-cta-bottom').fadeIn()
      }
    })

    $(window).on('load', function() {
      $('body').addClass('is-loaded')
    })

    
    $('.js-nav-close').on('click', function() {
      $('#nav').fadeOut()
    })

    $('.js-nav-toggle').on('click', function() {
      $('#nav').fadeIn()
    })

    $('#nav a').on('click', function() {
      $('#nav').fadeOut()
    })
  });

  (function() {
    $(window).on('load', function() {
      setTimeout(function() {
        $('html.home, body.home').addClass('is-loaded-go')
        $('.inview').on('inview', function(event, isInView) {
          console.log(event)
          if (isInView) {
            $(this).addClass('is-inview-go')
          }
        });
      }, 5000)
    })
  })();

  (function() {

    $(function() {
      const sliderOptions: JQuerySlickOptions = {
        autoplay: true,
        arrows: true,
        infinite: true,
        variableWidth: true,
        fade: true,
        speed: 1200,
        autoplaySpeed: 2500,
        adaptiveHeight: true
      }
      const slider: JQuery<HTMLElement> = $('.js-slider-gallery').slick(sliderOptions);

      $('.js-modal').on('click', function() {
        let target = $(this).data().id

        slider.css('opacity', 0)
        slider.animate({
          'z-index': 1
        }, 2000, function() {
          slider.slick('setPosition');
          slider.animate({
            'opacity': 1
          })
        })

        $('#modal-base').fadeIn().addClass('is-active')
        $('#' + target).fadeIn().addClass('is-active')
      })

      $('#modal-base, .modal-content').on('click', function() {
        $('#modal-base').fadeOut().removeClass('is-active')
        $('.modal-content').fadeOut().removeClass('is-active')
      })
      
      $('.modal-block').on('click', function(e) {
        e.stopPropagation()
      })

    })
  })();
  
  (function () {
    /**
     * 音楽ファイルの取得
     */
    const music: HTMLAudioElement = new Audio('/assets/morino_soupuya_no_yoru.mp3')
    
    /**
     * ループ再生を行う
     */
    music.addEventListener('ended', function () {
      music.currentTime = 0
      music.play()
    }, false)
    let musicPlayFlag = false
  
    /**
     * サウンドボタンの挙動
     */
    $('.sound-button').on('click', function (){
      if(musicPlayFlag === false){
        $(this).find('img').attr('src', '/img/soundbutton_pause.svg')
        music.play()
        musicPlayFlag = true
        
      } else {
        $(this).find('img').attr('src', '/img/soundbutton_play.svg')
        music.pause()
        musicPlayFlag = false
      }
    })
  }())

})
