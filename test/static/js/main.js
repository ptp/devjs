$(function() {
	$('#particles').particleground({
		dotColor: '#FFB84D',
		lineColor: '#FFB84D',
		parallaxMultiplier: 15
	});

	var bodyHeight = $('#body').height();
	var footerHeight = $('.footer').height();
	$('.footer').css({
		'margin-top': bodyHeight / 2 - footerHeight
	});
});