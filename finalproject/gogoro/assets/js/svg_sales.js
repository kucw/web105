$(function () {
    var w = $("#svg-sales").width();
    var h = $("#svg-sales").height();
    var xPadding = 100;
    var yPadding = 80;

    var svg = d3.select("#svg-sales")
        .attr("width", w)
        .attr("height", h);

    // div-bar
    svg.append("rect")
        .attr({
            x: xPadding - 20,
            y: yPadding - 20,
            height: 300,
            width: 10,
            "fill": "#12337c"
        })

    // text
    svg.append("text")
        .text("四月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 15,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c"
        });

    svg.append("text")
        .text("五月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 95,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c"
        });

    svg.append("text")
        .text("六月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 175,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c"
        });

    svg.append("text")
        .text("七月")
        .attr({
            x: xPadding - 90,
            y: yPadding + 255,
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c"
        });

    // sales number
    svg.append("text")
        .text("677")
        .attr({
            x: 462,
            y: 70,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("輛")
        .attr({
            x: 515,
            y: 70,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "20px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("746")
        .attr({
            x: 537,
            y: 150,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("輛")
        .attr({
            x: 590,
            y: 150,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "20px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("1204")
        .attr({
            x: 745,
            y: 230,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("輛")
        .attr({
            x: 815,
            y: 230,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "20px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("1312")
        .attr({
            x: 795,
            y: 310,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "30px",
            "fill": "#12337c",
            "visibility": "hidden"
        });
    svg.append("text")
        .text("輛")
        .attr({
            x: 865,
            y: 310,
            class: "number",
            "font-family": "sans-serif",
            "font-size": "20px",
            "fill": "#12337c",
            "visibility": "hidden"
        });


    // rects
    svg.selectAll("rect.april")
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
            class: "april",
            visibility: "hidden",
            fill: "#12337c"
        });

    svg.selectAll("rect.may")
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
            class: "may",
            visibility: "hidden",
            fill: "#12337c"
        });

    svg.selectAll("rect.june")
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
            class: "june",
            visibility: "hidden",
            fill: "#12337c"
        });

    svg.selectAll("rect.july")
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
            class: "july",
            visibility: "hidden",
            fill: "#12337c"
        });
});