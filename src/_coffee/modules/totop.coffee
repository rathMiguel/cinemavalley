###
トップへ戻るボタン
###

totop = (option) ->
	$ ->
		# トップへ戻るボタン
		$('body').append(option.html)
		$(option.target + ' a[href^=#]').on 'click touchstart', ->
			$('html, body').animate { scrollTop: 0 }, 500
			false
		$(window).scroll ->
			if $(this).scrollTop() > 110
				$(option.target).fadeIn()
			else
				$(option.target).fadeOut()