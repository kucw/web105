$(function () {
    //detecting window height
    var winheight = $(window).height();

    //testing section height to window height
    $('.text-container-right').css({
        'height': ((winheight)) + 'px'
    });


    // detecting mousewheel
    // Now bind the event to the desired element
    var moving = 0;
    $('.text-container-right').on('mousewheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.wheelDelta < 0) {
            if (!$(this).is(':last-child')) {
                if (moving == 0) {
                    d3.select(this)
                        .style("fill", "black")
                        .transition()
                        .duration(200)
                        .style("fill", "#DF2935");
                    transition(canvas, "forward");
                    moving = 1;
                }
                $('body').stop().animate({
                    scrollTop: $(this).next().offset().top
                }, '500', 'swing', function () {
                    moving = 0;
                });
            }
        } else {
            if (!$(this).is(':first-child')) {
                if (moving == 0) {
                    d3.select(this)
                        .style("fill", "black")
                        .transition()
                        .duration(200)
                        .style("fill", "#DF2935");
                    transition(canvas, "backward");
                    moving = 1;
                }
                $('body').stop().animate({
                    scrollTop: $(this).prev().offset().top
                }, '500', 'swing', function () {
                    moving = 0
                });

            }
        }
    });
});