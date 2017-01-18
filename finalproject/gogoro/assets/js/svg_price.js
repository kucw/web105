$(function () {
    var dataset = [128000, 138000];
    var w = 800;
    var h = 500;
    var xPadding = 50;
    var yPadding = 80;
    var xShift = 0;

    var svg = d3.select("#svg-price")
        .attr("width", w)
        .attr("height", h);

    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([xPadding + xShift, w - xPadding], 0.5);

    var yScale = d3.scale.linear()
        .domain([0, d3.max(dataset)])
        .range([yPadding, h - yPadding]);

    // axis X
    svg.append("rect")
        .attr({
            x: xPadding + xShift,
            y: h - yPadding,
            height: 10,
            width: w - xPadding * 2
        });

    // axis Y
    svg.append("rect")
        .attr({
            x: xPadding + xShift,
            y: yPadding - 30,
            height: h - yPadding * 2 + 30,
            width: 10
        });

    // create bars
    svg.selectAll("rect.price")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
            x: function (d, i) {
                return xScale(i);
            },
            y: function (d) {
                return h - yScale(d);
            },
            width: xScale.rangeBand(),
            height: function (d) {
                return yScale(d) - yPadding;
            },
            fill: "#12337c",
            class: "price"
        });

    // create labels
    svg.selectAll("text.label")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d + "元";
        })
        .attr({
            "text-anchor": "middle",
            x: function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            },
            y: function (d) {
                return h - yScale(d) + 18;
            },
            "font-family": "sans-serif",
            "font-size": "16px",
            "fill": "white",
            class: "label"
        });

    // create x-text
    svg.selectAll("text.x-text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d, i) {
            if (i == 0) return "標準版";
            else if (i == 1) return "PLUS版";
        })
        .attr({
            x: function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            },
            y: function (d) {
                return h - yPadding + 40;
            },
            "text-anchor": "middle",
            "font-family": "sans-serif",
            "font-size": "24px",
            "fill": "#12337c",
            class: "x-text"
        });

    //============================================
    // listen to update bar chart (decrease price)
    //============================================
    d3.select("#hello")
        .text("click me to decrease price")
        .on("click", function () {
            dataset = [98000, 108000];


            svg.selectAll("rect.price2")
                .data(dataset)
                .transition()
                .duration(500)
                .attr({
                    x: function (d, i) {
                        return xScale(i);
                    },
                    y: function (d) {
                        return h - yScale(d);
                    },
                    width: xScale.rangeBand(),
                    height: function (d) {
                        return yScale(d) - yPadding;
                    },
                    fill: "grey",
                    class: "price2"
                });

            svg.selectAll("text.label")
                .data(dataset)
                .transition()
                .duration(500)
                .attr({
                    x: function (d, i) {
                        return xScale(i) + xScale.rangeBand() / 2;
                    },
                    y: function (d) {
                        return h - yScale(d) + 18;
                    }
                })
                .each("end", function () {
                    svg.selectAll("text.label")
                        .text(function (d) {
                            return d + "元";
                        });
                })
        });



    //============================================
    // listen to update bar chart (add new type)
    //============================================
    d3.select("#hello2")
        .text("click me to add new type")
        .on("click", function () {

            // add lite version into dataset
            dataset = [98000, 108000, 88000];

            xScale.domain(d3.range(dataset.length))
                .rangeRoundBands([xPadding + xShift, w - xPadding], 0.5);

            //====================
            // update bar
            //====================
            // select bars and re-bind data
            var bars = svg.selectAll("rect.price")
                .data(dataset);

            //set initial for the new bar
            bars.enter()
                .append("rect")
                .attr({
                    x: w,
                    y: function (d) {
                        return h - yScale(d);
                    },
                    width: xScale.rangeBand(),
                    height: function (d) {
                        return yScale(d) - yPadding;
                    },
                    fill: function (d) {
                        return "#12337c";
                    },
                    class: "price"
                });

            // update
            bars.transition()
                .duration(500)
                .attr({
                    x: function (d, i) {
                        return xScale(i);
                    },
                    y: function (d) {
                        return h - yScale(d);
                    },
                    width: xScale.rangeBand(),
                    height: function (d) {
                        return yScale(d) - yPadding;
                    }
                });

            //====================
            // update label
            //====================
            var labels = svg.selectAll("text.label")
                .data(dataset);

            // intial
            labels.enter()
                .append("text")
                .text(function (d) {
                    return d + "元";
                })
                .attr({
                    x: w + xScale.rangeBand() / 2,
                    y: function (d) {
                        return h - yScale(d) + 18;
                    },
                    "font-family": "sans-serif",
                    "font-size": "16px",
                    "fill": "white",
                    "text-anchor": "middle",
                    class: "label"
                });

            // update
            labels.transition()
                .duration(500)
                .attr({
                    x: function (d, i) {
                        return xScale(i) + xScale.rangeBand() / 2;
                    },
                    y: function (d) {
                        return h - yScale(d) + 18;
                    }
                })
                .each("end", function () {
                    labels.text(function (d) {
                        return d + "元";
                    });
                })


            //====================
            // update x-text
            //====================
            var xText = svg.selectAll("text.x-text")
                .data(dataset);

            // intial
            xText.enter()
                .append("text")
                .text(function (d, i) {
                    if (i == 0) return "標準版";
                    else if (i == 1) return "PLUS版";
                    else if (i == 2) return "平價Lite";
                })
                .attr({
                    x: w + xScale.rangeBand() / 2,
                    y: function (d) {
                        return h - yPadding + 40;
                    },
                    "text-anchor": "middle",
                    "font-family": "sans-serif",
                    "font-size": "24px",
                    "fill": "#12337c",
                    class: "x-text"
                });

            // update
            xText.transition()
                .duration(500)
                .attr({
                    x: function (d, i) {
                        return xScale(i) + xScale.rangeBand() / 2;
                    }
                });

        });








    // only the bundary
    svg.append("rect").attr({
        x: 0,
        y: 0,
        width: w,
        height: h,
        "fill-opacity": 0,
        stroke: "red",
        "stroke-width": 5
    });
});
