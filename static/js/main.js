(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		
			// Mobile Menu  //
		$(function(){
			$('#nav').slicknav({
				'label' : '',
				'prependTo': '.mobile-menu',
				
			});
		});

		
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});
		
		$('.testimonial-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			animateIn:'bounceInRight',
			animateOut:'bounceOutRight',
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});
		
		
		//  Portfolio //
		$('.single-pf').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			animateIn:'lightSpeedIn',
			animateOut:'lightSpeedOut',
			autoplayHoverPause:true,
			margin:15,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		});
		
		//  Client Slider //
		$('.clients-slider').owlCarousel({
			items:6,
			autoplay:true,
			autoplayTimeout:4500,
			margin:15,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:3,
				},
				768: {
					items:5,
				}
			}
		});
		
		/*====================================
			Progressbar Appear JS
		======================================*/ 
		$('.progress.two .progress-bar').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		
		
		
		
		$('.counter').counterUp({
			delay: 10,
			time: 5000
			
		});
		$('.search a').on( "click", function(){
			$('.search-form').toggleClass('active');
		});
		
		
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
	
		$('#nav').onePageNav({
			changeHash: false,
			scrollSpeed: 1000,
			filter: '',
		});

		$('.popup').magnificPopup({
			type: 'image',
			gallery:{
			enabled:true
			}
		});
		
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		
		var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			  // the callback is fired every time an animation is started
			  // the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		  }
		);
		wow.init();
		
		
		
		/*====================================
			Isotop
		======================================*/ 
		$(window).on('load', function() {
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
		

	
		$(function () {
		  $.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		  });
		});    

		// Animate Scroll
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});

		/*====================================
			Google  Maps
		======================================*/
		var map = new GMaps({
				el: '#map',
				lat: 23.011245,
				lng: 90.884780,
				scrollwheel: false,
			});
			map.addMarker({
				lat: 23.011245,
				lng: 90.884780,
				title: 'Marker with InfoWindow',
				infoWindow: {
				content: '<p>welcome to Akhtar</p>'
			}
		
		});
		
		
		
		
	});
	
		
	
})(jQuery);
