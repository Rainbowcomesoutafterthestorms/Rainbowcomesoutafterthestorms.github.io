(function($){
    'use strict';

    /*----- ELEMENTOR LOAD FUNCTION CALL ---*/

    $( window ).on( 'elementor/frontend/init', function() {

       // Initial

        var Beforeafter = function (){
        // You can put any js function here without windows on load
        
         new BeerSlider( document.getElementById( "mayosis-before-after" ), {start: 50} );

        }
        
        var Testimonialm = function (){
        // You can put any js function here without windows on load
         var swiper = new Swiper("#carousel-testimonial-elmentor", {
           loop: true,
   slidesPerView: 'auto',
   centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets',
        },
        navigation: {
    nextEl: '.elementor-swiper-button-next',
    prevEl: '.elementor-swiper-button-prev',
  },
      });

        }
        
 
         
        
    
 var Productslider = function (){
        // You can put any js function here without windows on load
        
         $('.mayosis-full-product-slider').lightSlider({
           gallery:false,
        item:1,
        pager:false,
        slideMargin: 0,
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        pauseOnHover: true,
        speed: 600, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: false,
        pause: 4000,
        enableDrag:true,
        adaptiveHeight:true,
        onSliderLoad: function() {
            $('.mayosis-full-product-slider').removeClass('cS-hidden');
        }  
    });
    

        }
        
        
        var Productcarousel = function (){
        // You can put any js function here without windows on load
        
       $('.mayosis-full-product-carousel').lightSlider({
        gallery:true,
        item:3,
        pager:false,
        slideMargin: 30,
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        pauseOnHover: true,
        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 8000,
        enableDrag:true,
        adaptiveHeight:false,
        onSliderLoad: function() {
            $('.mayosis-full-product-carousel').removeClass('cS-hidden');
        }  
    });
    
    
        }
        
        
    
    var Catcarousel = function (){
        // You can put any js function here without windows on load
        
    $('.grid-cat-edd-3').lightSlider({
      gallery:false,
      item:3,
      slideMargin:15,
      pager:false,
       onSliderLoad: function() {
            $('.grid-cat-edd').removeClass('cS-hidden');
        }  
      

    
    });
    
     $('.grid-cat-edd-4').lightSlider({
      gallery:false,
      item:4,
      slideMargin:15,
      pager:false,
       onSliderLoad: function() {
            $('.grid-cat-edd').removeClass('cS-hidden');
        }  
      

    
    });
    
    
     $('.grid-cat-edd-5').lightSlider({
      gallery:false,
      item:5,
      slideMargin:15,
      pager:false,
       onSliderLoad: function() {
            $('.grid-cat-edd').removeClass('cS-hidden');
        }  
      

    
    });
    
     $('.grid-cat-edd-6').lightSlider({
      gallery:false,
      item:6,
      slideMargin:15,
      pager:false,
       onSliderLoad: function() {
            $('.grid-cat-edd').removeClass('cS-hidden');
        }  
      

    
    });
    
     $('.grid-cat-edd-7').lightSlider({
      gallery:false,
      item:7,
      slideMargin:15,
      pager:false,
       onSliderLoad: function() {
            $('.grid-cat-edd').removeClass('cS-hidden');
        }  
      

    
    });
    
    }

        //BeforeAfter
        elementorFrontend.hooks.addAction( 'frontend/element_ready/mayosis-before-after.default', function($scope, $){
            Beforeafter();
        } );
        
        
        //Testiminial
        elementorFrontend.hooks.addAction( 'frontend/element_ready/mayosis-theme-testimonial.default', function($scope, $){
            Testimonialm();
        } );
        
        
        //product Slider
        elementorFrontend.hooks.addAction( 'frontend/element_ready/mayosis-edd-slider.default', function($scope, $){
            Productslider();
        } );
        
        
         //product Carousel
        elementorFrontend.hooks.addAction( 'frontend/element_ready/mayosis-edd-carousel.default', function($scope, $){
            Productcarousel();
        } );
        
        
         //Category Carousel
        elementorFrontend.hooks.addAction( 'frontend/element_ready/mayosis-edd-category.default', function($scope, $){
            Catcarousel();
        } );
        
    
        
        
        

   

 } );
})(jQuery);
