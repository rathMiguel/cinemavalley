###
タブレットの時だけビューポート変更の操作
###

viewport = (num) ->
	if _ua.Tablet
		$ ->
			$('#viewport').attr 'content','width=' + num + ', user-scalable=yes'