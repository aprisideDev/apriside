/*global jQuery:false */
(function ($) {
    $(document).ready(function() {
        $('#fullpage').fullpage({
            navigation: true,
            scrollBar: true,
            anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
            menu: '.navbar-nav'
        });

        particlesJS.load('bg-particles', '/js/particles.json');
    });


	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
})(jQuery);
