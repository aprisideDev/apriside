$(document).ready(function () {

    'use strict';

    var scrollTopButton  = $('#scrollTop'),
        scrollableAnchor = $('.link-scroll'),
        preloader        = $('.preloader'),
        body             = $('body');
    // ------------------------------------------------------------------- //
    // Move to the top of the page on clicking the scroll top button
    // ------------------------------------------------------------------- //
    scrollTopButton.on('click', function () {
        body.animate({ scrollTop: 0}, 1000);
    });


    // ---------------------------------------------------------- //
    // Navbar Background Changinig & Hiding on Scroll
    // ---------------------------------------------------------- //
    var c, currentScrollTop = 0,
        navbar = $('.navbar');

    $(window).on('scroll', function () {

        // Navbar change background on scroll
        if ($(this).scrollTop() >= 5) {
            navbar.addClass('active');
        } else {
            navbar.removeClass('active');
        }

        // Navbar auto hide on scroll down functionality
        var a = $(window).scrollTop(), b = navbar.height();

        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;


        // Hide/Show scroll to top button at a certain place [> 2000 px from the top]
        if ($(window).scrollTop() >= 2000) {
            scrollTopButton.addClass('active');
        } else {
            scrollTopButton.removeClass('active');
        }
    });


    // ---------------------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------------------- //
    scrollableAnchor.on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
