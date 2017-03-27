$(function () {
    $('#tofix').affix({
        offset: {
            top: 600
        }
    });
    $('#tofix2').affix({
        offset: {
            top: 300
        }
    });
    //    var window_width = $(window).width();
    var window_width = $(window).width() - $('#moved').width();
    console.log('window width\t' + $(window).width());
    console.log('object width\t' + $('#moved').width());
    var document_height = $(document).height() - $(window).height();
    
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        console.log("current: "+ scroll_position);
        
        
        var object_position_left = window_width * (scroll_position / document_height);
        console.log($(window).scrollTop() + "/" + object_position_left)
            //        $('#moved').animate({left:object_position_left});
        $('#moved').css({
            //            'width': object_position_left
            'left': object_position_left
        });
    });
});