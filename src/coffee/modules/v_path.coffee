###
vzoneテストサーバーの場合、パスを切り替える
###

vzPath = ->
	dir = location.href.split('/')
	dir2 = dir[4]
	if document.URL.match(/vzone2.dip.jp/)
		return '/test3/' + dir2 + '/'
	else
		return '/'