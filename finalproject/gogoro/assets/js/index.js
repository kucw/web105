$(function () {

    $(window).scroll(function (){
        var scroll_position = $(window).scrollTop();
        console.log("scroll_position: " + scroll_position);
        console.log("chart top: " + $('#chart').position().top);
        
        if ($('#chart').position().top < scroll_position){
            $('#chart').css("background-attachment", "fixed");
            console.log("ya");
        }
        else{
            $('#chart').css("background-attachment", "scroll");
            console.log("no");
        }
    });
    
    

   /* $('.section1').waypoint(function () {
        $('.section1').find("#intro-section1-image")
            .addClass('animated zoomIn')
            .css("visibility", "visible");
        $('.section1').find("#intro-section1-text")
            .addClass('animated zoomIn')
            .css("visibility", "visible");
    }, {
        offset: '60%'
    });
    $('.section2').waypoint(function () {
        $('.section2').find("#intro-section2-tag1")
            .addClass('animated fadeInLeft slide')
            .css("visibility", "visible");
        $('.section2').find("#intro-section2-tag2")
            .addClass('animated fadeInLeft slide')
            .css("visibility", "visible");
        $('.section2').find("#intro-section2-tag3")
            .addClass('animated fadeInLeft slide')
            .css("visibility", "visible");
        $('.section2').find("#intro-section2-text")
            .addClass('animated fadeInLeft slide')
            .css("visibility", "visible");
    }, {
        offset: '60%'
    });
    $('.section4').waypoint(function () {
        $('.section4').find("#intro-section4-image")
            .addClass('animated rollIn')
            .css("visibility", "visible");
        $('.section4').find("#intro-section4-text")
            .addClass('animated fadeInRight')
            .css("visibility", "visible");
    }, {
        offset: '60%'
    });
    */
});