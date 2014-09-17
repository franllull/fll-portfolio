// $(document).ready(function(){
//     $('html').animate({scrollTop:0}, 1);
//     $('body').animate({scrollTop:0}, 1);
// });

$(document).ready(function($) {

    //sticking nav in homepage
    $(".intro-title").waypoint(function(up) {
    	$(".nav").removeClass("scrolled").addClass("normal")
    });
        $(".intro-title").waypoint(function(down) {
        	$(".nav").removeClass("normal").addClass("scrolled")
        });

    //changing nav on project page
    $(".introduction").waypoint(function(up) {
        $(".nav").removeClass("scrolled").addClass("normal")
    });
        $(".introduction").waypoint(function(down) {
            $(".nav").removeClass("normal").addClass("scrolled")
        });

    //sticking project-nav in project page
    $(".project-nav").waypoint(function(up) {
    	$(".project-nav").removeClass("scrolled").addClass("normal")
    });
        $(".project-nav").waypoint(function(down) {
        	$(".project-nav").removeClass("normal").addClass("scrolled")
        });

    //toggling nav in project page
    $(".list").click(function() {
        $(".nav").toggleClass("on");
        $(".project-nav").toggleClass("downed");
    })
    
    //disabling click on dead links
    $('.disabled').click(function(e) {
        e.preventDefault();
    });

    //init beautiful select boxes
    $(".chosen-select").chosen({width: "100%", disable_search_threshold: 10}); 

});

    $(window).scroll( function(){
        $('.opaque').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object - 50 ){
                $(this).animate({'opacity':'1'},1000).addClass("goup");
            }
        }); 
});