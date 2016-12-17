$(function () {
    var window_width = $(window).width()  - $('#moved').width();
    console.log('window width\t' + $(window).width());
    console.log('object width\t' + $('#moved').width());

    var document_height = $(document).height() - $(window).height();

//    $('.tile').on('scrollSpy:enter', function() {
//        console.log('enter:', $(this).attr('id'), '>', $(this).position().top);
//         var object_position_left = window_width * (($(this).position().top-400) / document_height);
//        $('#moved').animate({left:object_position_left});
////        $('#moved').css({
////            'left': object_position_left
////        });
//
//    });
//
////    $('.tile').on('scrollSpy:exit', function() {
////        console.log('exit:', $(this).attr('id'));
////    });
//
//    $('.tile').scrollSpy();

    var arr = [0,
               $('#area1').position().top, $('#area2').position().top, $('#area3').position().top, $('#area4').position().top, $('#area5').position().top, $(document).height()];

    console.log(arr);

    $(window).scroll(function (){
        var scroll_position = $(window).scrollTop();
        console.log(scroll_position);
        for (i = 0; i < arr.length-1; i++) {
            if(arr[i]< scroll_position && arr[i+1]> scroll_position){
                var object_position_left = window_width * (arr[i] / document_height);
               
               $('#moved').css({left:object_position_left});
//                $('#moved').animate({left:object_position_left});
            }
        }
    });


});
