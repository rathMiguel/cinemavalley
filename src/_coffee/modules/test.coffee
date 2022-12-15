do ->
  $(window).on 'load', ->
    $('body').prepend('<div id="test-modal">')
    $('#test-modal').append('<div id="test-modal-in">')

    pageTitle = document.title
    $('#test-modal-in').append("<dl><dt>タイトル：</dt><dd>#{pageTitle}</dd></dl>")

    # titles
    $('#test-modal-in').append("<span class='title'>h1～h6</span>")
    $('#test-modal-in').append("<ul id='test-titlelist'></ul>")

    $('h1, h2, h3, h4, h5, h6').each ->
      headingType = $(this).prop("tagName")
      headingContent = $(this).text()
      if headingType == 'H1'
        $('#test-titlelist').append("<li style='color: red'>#{headingType}=>#{headingContent}</li>")
      else
        $('#test-titlelist').append("<li>#{headingType} => #{headingContent}</li>")

    # iamges
    $('#test-modal-in').append("<span class='title'>Images</span>")
    $('#test-modal-in').append("<ul id='test-imagelist'></ul>")

    $('img').each ->
      imageSrc = $(this).attr('src')
      imageAlt = $(this).attr('alt')
      $('#test-imagelist').append("<li>#{imageSrc} => #{imageAlt}</li>")

    $('#test-modal').on 'click', ->
      $(this).fadeOut('fast')

    $('#test-modal-in').on 'click', (event) ->
      event.stopPropagation()