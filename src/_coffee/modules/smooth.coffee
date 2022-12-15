###
スムーススクロール
###

do ->
	$ ->
		$('a[href^="#"]').on 'click', ->
			speed = 500;
			href= $(this).attr("href"); 
			target = $(if href == "#" || href == "" then 'html' else href);
			position = target.offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			false;