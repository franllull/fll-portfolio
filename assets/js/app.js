$(document).ready(function($) {
	$(this).scrollTop(0);

	$(".nut").waypoint(function(up) {
		$(".nav").removeClass("scrolled").addClass("normal")
	});

	$(".nut").waypoint(function(down) {
		$(".nav").removeClass("normal").addClass("scrolled")
	});

	$(".intro-title").waypoint(function(up) {
		$(".navlist").removeClass("on").addClass("off")
	});

	$(".intro-title").waypoint(function(down) {
		$(".navlist").removeClass("off").addClass("on")
	});

	$('.websiteslink').click(function(){
	    $.scrollTo( $('#websites'), 800, {offset:-59} );
	});

});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.opaque').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});