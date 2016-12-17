$(function () {
    console.log("loading jquery successfully!");

    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        $('video').each(function () {
            if (scroll_position > $(this).position().top && !$(this).hasClass("played")) {
                $(this)[0].play();
                $(this).addClass("played");
            }
        });
    });

    //    $(window).scroll(function () {
    //        var scroll_position = $(window).scrollTop();
    //        if (scroll_position > $("#video1").position().top &&  !$("#video1").hasClass("played")) {
    //            $("#video1")[0].play();
    //            $("#video1").addClass("played");
    //        }
    //    });

});