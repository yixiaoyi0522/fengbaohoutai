$(function() {
	debugger
	$('.weui-tab .weui-tabbar a').click(function() {
		$(this).siblings().removeClass('weui-bar__item_on').end().addClass('weui-bar__item_on');
		$(this).siblings().children('img.img_off').show().end().children('img.img_on').hide();
		$(this).children('img.img_off').hide().end().children('img.img_on').show();

	})
})