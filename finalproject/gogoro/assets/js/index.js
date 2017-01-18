$(function () {

    // set height of cover
    $('#cover').css("height", $(window).height());

    // for google map 
    var googlemap_shift = ($(window).height() - $("#google-map").height()) / 2;
    var count = 200;

    $(window).scroll(function () {
        //=====================================
        // fixed pie chart background-image
        //=====================================
        var scroll_position = $(window).scrollTop();
        var width = $(window).width();
        var height = $(window).height();
        var rate = width * 830 / 1280;

        if ($('#chart').position().top < scroll_position - (736 - height)) {
            $('#chart').css("background-attachment", "fixed")
                .css("background-position", "0px " + -(736 - height) + "px")
                .css("background-size", "cover");
        } else {
            $('#chart').css("background-attachment", "scroll")
                .css("background-position", "0px 0px")
                .css("background-size", width + "px " + rate + "px");
        }


        //=====================================
        // fixed gostation google map
        //=====================================
        var scroll_position = $(window).scrollTop();
        var station_top = $('#station').position().top;
        var station_bottom = $('#end').position().top;
        var width = $(window).width();
        var height = $(window).height();


        if (station_top < scroll_position && station_bottom - height > scroll_position) {
            $('#station').find("#google-map")
                .css("margin-top", scroll_position - station_top + 30 + (200 - count) + "px");
            if (200-count < googlemap_shift - 30)
                count = count - 5;
        }
    });



    $('#sales').waypoint(function () {
        //update title and text
        $('#sales').find("#sales-title")
            .addClass('animated zoomIn')
            .css("visibility", "visible");
        $('#sales').find("#sales-text")
            .addClass('animated zoomIn')
            .css("visibility", "visible");

        // update Qggr
        $('#sales').find("#ggr-april")
            .addClass('move-april')
            .css("visibility", "visible");
        $('#sales').find("#ggr-may")
            .addClass('move-may')
            .css("visibility", "visible");
        $('#sales').find("#ggr-june")
            .addClass('move-june')
            .css("visibility", "visible");
        $('#sales').find("#ggr-july")
            .addClass('move-july')
            .css("visibility", "visible");


        //update all rect in svg-sales
        var svg = d3.select("#svg-sales");
        svg.selectAll("rect.april")
            .transition()
            .delay(function (d, i) {
                if (i < 10) return i * 100;
                else if (i < 15) return 1000 + (i - 10) * 130;
                else return 1650 + (i - 15) * 160;
            })
            .duration(100)
            .attr({
                class: "animated fadeInLeft",
                visibility: "visible"
            });

        svg.selectAll("rect.may")
            .transition()
            .delay(function (d, i) {
                if (i < 16) return i * 90;
                else if (i < 18) return 1440 + (i - 16) * 130;
                else return 1700 + (i - 18) * 160;
            })
            .duration(100)
            .attr({
                class: "animated fadeInLeft",
                visibility: "visible"
            });

        svg.selectAll("rect.june")
            .transition()
            .delay(function (d, i) {
                if (i < 3) return i * 90;
                else if (i < 20) return 270 + (i - 3) * 55;
                else if (i < 27) return 1260 + (i - 20) * 90;
                else return 1890 + (i - 27) * 160;
            })
            .duration(100)
            .attr({
                class: "animated fadeInLeft",
                visibility: "visible"
            });

        svg.selectAll("rect.july")
            .transition()
            .delay(function (d, i) {
                if (i < 3) return i * 90;
                else if (i < 20) return 270 + (i - 3) * 48;
                else if (i < 27) return 1150 + (i - 20) * 90;
                else return 1800 + (i - 27) * 160;
            })
            .duration(100)
            .attr({
                class: "animated fadeInLeft",
                visibility: "visible"
            });

        //update sale number
        svg.selectAll("text.number")
            .transition()
            .delay(3000)
            .duration(100)
            .attr({
                class: "animated flipInX",
                visibility: "visible"
            });

    }, {
        offset: '40%'
    });


    $('#professor').waypoint(function () {
        $('#professor').find("#p1-img")
            .addClass('animated zoomIn')
            .css("visibility", "visible");
        $('#professor').find("#p1-name")
            .addClass('animated flipInX')
            .css("visibility", "visible");
        $('#professor').find("#p1-textbox")
            .addClass('animated flipInX')
            .css("visibility", "visible");
        $('#professor').find("#p1-text")
            .addClass('animated flipInX')
            .css("visibility", "visible");

        setTimeout(function () {
            $('#professor').find("#p2-img")
                .addClass('animated zoomIn')
                .css("visibility", "visible");
            $('#professor').find("#p2-name")
                .addClass('animated flipInX')
                .css("visibility", "visible");
            $('#professor').find("#p2-textbox")
                .addClass('animated flipInX')
                .css("visibility", "visible");
            $('#professor').find("#p2-text")
                .addClass('animated flipInX')
                .css("visibility", "visible");
        }, 1500);

    }, {
        offset: '40%'
    });

    /*
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