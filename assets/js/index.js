$(document).ready(function() {
	"use strict";
	$('.header .layer').particleground({
		dotColor: '#abc',
		parallaxMultiplier: 15
	});
	$('.footer .col').css({
		width: 65 / $('.footer .col').length + '%'
	});
	var pull = $('.header .pull'),
		menu = $('.header .menu'),
		menuHeight = menu.height();
	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});