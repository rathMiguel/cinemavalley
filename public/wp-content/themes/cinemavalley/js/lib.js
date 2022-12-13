/*
ユーザーエージェント判別
_ua.Tablet -> タブレットの場合のみtrue
_ua.Mobile -> スマホの場合のみtrue
*/
window._ua = (function(u) {
  return {
    Tablet: u.indexOf('windows') !== -1 && u.indexOf('touch') !== -1 && u.indexOf('tablet pc') === -1 || u.indexOf('ipad') !== -1 || u.indexOf('android') !== -1 && u.indexOf('mobile') === -1 || u.indexOf('firefox') !== -1 && u.indexOf('tablet') !== -1 || u.indexOf('kindle') !== -1 || u.indexOf('silk') !== -1 || u.indexOf('playbook') !== -1,
    Mobile: u.indexOf('windows') !== -1 && u.indexOf('phone') !== -1 || u.indexOf('iphone') !== -1 || u.indexOf('ipod') !== -1 || u.indexOf('android') !== -1 && u.indexOf('mobile') !== -1 || u.indexOf('firefox') !== -1 && u.indexOf('mobile') !== -1 || u.indexOf('blackberry') !== -1
  };
})(window.navigator.userAgent.toLowerCase());

/*
スムーススクロール
*/
(function() {
  return $(function() {
    return $('a[href^="#"]').on('click', function() {
      var href, position, speed, target;
      speed = 500;
      href = $(this).attr("href");
      target = $(href === "#" || href === "" ? 'html' : href);
      position = target.offset().top;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });
})();

/*
タブレットの時だけビューポート変更の操作
*/
var viewport;

viewport = function(num) {
  if (_ua.Tablet) {
    return $(function() {
      return $('#viewport').attr('content', 'width=' + num + ', user-scalable=yes');
    });
  }
};
