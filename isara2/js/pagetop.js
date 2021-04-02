$(function() {

  // ボタンを消す
  $('#pagetop').hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 60) {
			$('#pagetop').fadeIn();
		} else {
			$('#pagetop').fadeOut();
		}
	});

  // ボタンが押されたら
  $('#pagetop').click(function() {
    $('body, html').animate( {
      scrollTop: 0
    }, 500);
    return false;
  });

  $('.startpoint').click(function() {
    var contactPadding = 40;
    var targetTop = $('#contactform').offset().top;
    $('html, body').animate({
      scrollTop: taretTop - contactPadding
  }, 500);
  return false;
});