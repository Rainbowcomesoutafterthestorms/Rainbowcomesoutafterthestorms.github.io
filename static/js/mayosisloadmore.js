jQuery(function($){  	
    $('.infinite-content').infinitescroll({
	  navSelector: ".nav-links",
	  nextSelector: ".nav-links a:first",
	  itemSelector: ".infinite-post,.infinite-content .product-grid",
	  loading: {
		msgText: "Loading more items...",
		finishedMsg: "Sorry, no more items"
	  },
	
	  errorCallback: function(){ $(".inf-load-more").css("display", "none") }
	});
	$(window).unbind('.infscr');
	$(".inf-load-more").click(function(){
   		$('.infinite-content').infinitescroll('retrieve');
        	return false;
	});
	$(window).load(function(){
		if ($('.nav-links a').length) {
			$('.inf-load-more').css('display','inline-block');
		} else {
			$('.inf-load-more').css('display','none');
		}
	});
});



jQuery(function($){  

var $container = $('.product-masonry.infinite-content-masonry');

$container.imagesLoaded(function () {
    $container.isotope({
        itemSelector: '.infinite-content-masonry .product-masonry-item',
        filter: '*:not(.hidden),.infinite-content-masonry .product-masonry-item',
        animationEngine: 'best-available',
        layoutMode: "masonry",
       
       
    });

    $container.infinitescroll({
         navSelector: ".nav-links,.pagination",
	  nextSelector: ".nav-links a:first,.pagination a:first",
        itemSelector: '.infinite-content-masonry .product-masonry-item', // selector for all items you'll retrieve
        pixelsFromNavToBottom: Math.round($(window).height() * 2.5),
        bufferPx: Math.round($(window).height() * 2.5),
         loading: {
		msgText: "Loading more items...",
		finishedMsg: "Sorry, no more items"
	  },
    },
    // call Isotope as a callback
    function (newElements) {
        var $newElems = $(newElements);
        $newElems.imagesLoaded(function () {
            $container.isotope('insert', $newElems);
                             
            setTimeout(function () {
                $('.infinite-content-masonry .product-masonry').isotope('reLayout');
                //$('.products-grid-wrap').isotope({
                //sortBy: 'category',
                    //sortAscending: false });
            }, 500);
        });
    $('.product-masonry-filter li a').click(function () {
    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector
    });

    return false;
}); 
    });            

});   

$(window).unbind('.infscr');
	$(".inf-load-more").click(function(){
   		$('.product-masonry.infinite-content-masonry').infinitescroll('retrieve');
        	return false;
	});
	$(window).load(function(){
		if ($('.nav-links a').length) {
			$('.inf-load-more').css('display','inline-block');
		} else {
			$('.inf-load-more').css('display','none');
		}
	});
});