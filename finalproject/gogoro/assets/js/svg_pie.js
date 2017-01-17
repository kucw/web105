$(function () {
    var w = 900;
    var h = 320;
    var xPadding = 100;
    var yPadding = 30;

    var svg = d3.select("#svg-pie")
        .attr("width", w)
        .attr("height", h)

    // div-bar
    svg.append("rect")
        .attr({
            x: xPadding - 20,
            y: yPadding - 20,
            height: 300,
            width: 10
        })

    // text
    svg.append("text")
        .text("四月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 15,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "grey"
        });

    svg.append("text")
        .text("五月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 95,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "grey"
        });

    svg.append("text")
        .text("六月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 175,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "grey"
        });

    svg.append("text")
        .text("七月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 255,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "grey"
        });


    // rects
    svg.selectAll("rect.svg-april")
        .data(d3.range(18))
        .enter()
        .append("rect")
        .attr({
            x: function (d, i) {
                return i * 25 + xPadding;
            },
            y: function (d, i) {
                return yPadding;
            },
            height: function (d, i) {
                return 10;
            },
            width: function (d, i) {
                return 15;
            },
            class: "svg-april",
            visibility: "hidden"
        });

    svg.selectAll("rect.svg-may")
        .data(d3.range(21))
        .enter()
        .append("rect")
        .attr({
            x: function (d, i) {
                return i * 25 + xPadding;
            },
            y: function (d, i) {
                return yPadding + 80;
            },
            height: function (d, i) {
                return 10;
            },
            width: function (d, i) {
                return 15;
            },
            class: "svg-may",
            visibility: "hidden"
        });

    svg.selectAll("rect.svg-june")
        .data(d3.range(30))
        .enter()
        .append("rect")
        .attr({
            x: function (d, i) {
                return i * 25 + xPadding;
            },
            y: function (d, i) {
                return yPadding + 160;
            },
            height: function (d, i) {
                return 10;
            },
            width: function (d, i) {
                return 15;
            },
            class: "svg-june",
            visibility: "hidden"
        });

    svg.selectAll("rect.svg-july")
        .data(d3.range(32))
        .enter()
        .append("rect")
        .attr({
            x: function (d, i) {
                return i * 25 + xPadding;
            },
            y: function (d, i) {
                return yPadding + 240;
            },
            height: function (d, i) {
                return 10;
            },
            width: function (d, i) {
                return 15;
            },
            class: "svg-july",
            visibility: "hidden"
        });
});