###
ソーシャルボタンの挙動
###

do ->
  $ ->
    $(document).ajaxStop ->
      siteTitle = document.title
      siteUrl = window.location.href

      $('.button-mail-default').each ->
        $(this).attr 'href', 'mailto:?subject=' + siteTitle + '&body=' + siteUrl
        return
        
      $('.fb-like').each ->
        $(this).attr 'data-href', siteUrl
        return

      $('.social-button-line').each ->
        $(this).attr 'href', 'http://line.naver.jp/R/msg/text/?' + siteTitle + '　' + siteUrl
        return