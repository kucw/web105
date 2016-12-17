$(function () {
    var video_height = $('#video1').offset().top - 200;
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();

        if (scroll_position >  video_height && !$('#video1').hasClass("inversed")) {
            $('#video1')[0].play();
            $('#video1').on("ended", function(){
                $("#video1").attr("src", "zoomout.mp4");
                $("#video1").addClass("inversed");
            });
        }

        if(scroll_position < video_height && $('#video1').hasClass("inversed")){
            $('#video1')[0].play();
            $('#video1').on("ended", function(){
                $("#video1").attr("src", "zoomin.mp4");
                $("#video1").removeClass("inversed");
            });
        }

    });
});
