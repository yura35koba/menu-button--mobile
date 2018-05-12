$(document).ready(function () {
	$('.nav-link').click(function () {
		$('.navigation-mobile').toggleClass('navigation-mobile_active');
	});
	$('.navigation-close').click(function () {
		$('.navigation-mobile').toggleClass('navigation-mobile_active');
	});
});