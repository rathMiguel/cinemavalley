###
電話リンクの追加
###

tel = (targetClass, num) ->
	if _ua.Mobile
		$ ->
			$(targetClass).wrap '<a href="tel:' + num + '"></a>'