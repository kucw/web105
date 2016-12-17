$(function () {
    console.log("load jquery successfully!");
    $('nav').hide();


    $.getJSON("a2048.json", {
            format: "json"
        })
        .done(function (result) {
            var items = [];
            var contents = [];
            $.each(result, function (i, data) {
                items.push("<li style='display:inline-block;padding-left:20px'><a href='" + data['link'] +
                    "'><p>" + data['title'] +
                    "</p></a></li>");

                contents.push("<div class='col-sm-4'><div><img src='"+data['pic']+"'\><h3><a href='" + data['link'] +
                    "'>"+ data['title']+"</a></h3><p>"+data['content']+"</p></div></div>");
            });

            $("<ul />", {
                html: items.join("")
            }).appendTo("#shortcut");
            $("<div />", {
                class:"row",
                html: contents.join("")
            }).appendTo("#content");

        });
    var navPos = $('#shortcut').position().top;
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        console.log(scroll_position);
        if (scroll_position > navPos) {
            $('nav').show();
        }
        if (scroll_position < navPos) {
            $('nav').hide();
        }
    });
});
