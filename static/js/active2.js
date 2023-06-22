/*======================================
[ JS Table Of Contents ]
01. Mobile Menu JS
02. Sticky Header JS
03. Main Slider JS
04. Clients Slider JS
05. Portfolio Slider JS
06. Testimonial Slider JS
07. Testimonial Slider JS
08. Wow JS
09. CounterUp JS
10. Video Popup JS
11. Parallax JS
12. Theme Others JS
13. Scroll Up JS
14. Preloader JS
========================================*/

(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/*====================================
			01 - Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration:300,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			closeOnClick:true,
		});
		
		/*====================================
			02 - Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		/*====================================
			03 - Main Slider JS
		======================================*/ 
		$(".main-slider").owlCarousel({
			items:1,
			loop:true,
			autoplay:false,
			smartSpeed: 400,
			autoplayTimeout:2000,
			singleItem: true,
			autoplayHoverPause:true,
			center:false,
			margin:30,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
		});	
		
		/*====================================
			04 - Clients Slider JS
		======================================*/ 
		$(".clients-slider").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 400,
			autoplayTimeout:2000,
			singleItem: true,
			autoplayHoverPause:true,
			center:false,
			margin:30,
			nav:false,
			dots:false,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:2,
				},
				480: {
					items:3,
				},
				768: {
					items:4,
				},
				1170: {
					items:6,
				},
			}
		});	
		
		/*====================================
			05 - Portfolio Slider JS
		======================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:true,
			margin:30,
			navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:2,
				},
			}
		});
		
		/*====================================
			06 - Testimonial Slider JS
		======================================*/ 
		$(".testimonial-slider").owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});	
		
		/*====================================
			07 - Related Post Slider JS
		======================================*/ 
		$(".related-post-slider").owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:2,
				},
			}
		});	
		
		/*====================================
			08 - Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*=====================================
			09 - CounterUp JS
		======================================*/  
		$('.number').counterUp({
			time: 1000
		});
		
		/*=====================================
			10 - Video Popup JS
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*======================================
			11 - Parallax JS
		======================================*/ 
		$(window).stellar({
            responsive: true,
            positionProperty: 'position',
			horizontalOffset: 0,
			verticalOffset: 0,
            horizontalScrolling: false
        });
		
		/*====================================
			12 - Theme Others JS
		======================================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 0
				}, 900);
			e.preventDefault();
		});
		
		$('.player').mb_YTPlayer();	
	});
	
		/*====================================
			13 - Scroll Up JS
		======================================*/
		$.scrollUp({
			scrollText: '<span><i class="icofont-simple-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});  
		
		/* ==================================================
            14 - Preloader JS
         ===============================================*/
       jQuery(window).on('load', function () {
        $('.preloader').fadeOut()
	})
		
})(jQuery);