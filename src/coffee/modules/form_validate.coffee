###
フォームのバリデーション
###

do ->
	$ ->
		# インプット（テキスト、セレクト、テキストボックス）
		$('.input-required').on 'blur', ->
			val = $(this).val()
			if val == ""
				$(this).removeClass('valid')
			else
				$(this).addClass('valid')
			return

		# ラジオボタン
		radioChk = $('.group-required input[type="radio"]')
		if radioChk.prop('checked') == true
			$(radioChk).closest('.group-required').addClass('valid')

		$('.group-required input[type="radio"]').on 'change', ->
			if $(this).val() != ''
				$(this).closest('.group-required').addClass('valid')
			return

		# チェックボックス
		$('.group-required').find('input[type="checkbox"]').on 'change', ->
			selector = $(this).closest('.group-required')
			flag = false
			$(selector).find('input[type="checkbox"]').each ->
				validate = $(this).prop('checked')
				if validate == true
					flag = true
				if flag == true
					$(selector).addClass('valid')
				else
					$(selector).removeClass('valid')