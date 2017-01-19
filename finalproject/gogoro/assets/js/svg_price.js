var dataset, w, h, xPadding, yPadding, xShift, svg, xScale, yScalel;

$(function () {
    dataset = [128000, 138000];
    w = $("#svg-price").width();
    h = $("#svg-price").width() * 5 / 8;
    xPadding = 50;
    yPadding = 80;
    xShift = 0;
    
    svg = d3.select("#svg-price")
        .attr("width", w)
        .attr("height", h);

    xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([xPadding + xShift, w - xPadding], 0.5);

    yScale = d3.scale.linear()
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

    // create numbers
    svg.selectAll("text.number")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d + "元";
        })
        .attr({
            x: function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            },
            y: function (d) {
                return h - yScale(d) + 18;
            },
            "text-anchor": "middle",
            "font-family": "Microsoft JhengHei, sans-serif",
            "font-size": "18px",
            "fill": "white",
            class: "number"
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
            "font-family": "Microsoft JhengHei, sans-serif",
            "font-size": "24px",
            "fill": "#12337c",
            class: "x-text"
        });

});

function startPrice() {

    decreasePrice();

    window.setTimeout(function () {
        addNewType();
    }, 700);

    window.setTimeout(function () {
        decreasePriceAgain();
    }, 3000);

}


//=========================================
//  decrease price of the bar
//=========================================
function decreasePrice() {
    // re-create bars, diff bars, numbers
    // because of the z-index of svg is the order of object in the doc
    svg.selectAll("rect.price2")
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
            height: yScale(30000) - yPadding,
            fill: "#b2b2b2",
            opacity: 0.8,
            class: "price2"
        });

    svg.selectAll("rect.price").remove();
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

    svg.selectAll("text.number").remove();
    svg.selectAll("text.number")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d + "元";
        })
        .attr({
            x: function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            },
            y: function (d) {
                return h - yScale(d) + 18;
            },
            "text-anchor": "middle",
            "font-family": "Microsoft JhengHei, sans-serif",
            "font-size": "18px",
            "fill": "white",
            class: "number"
        });


    // update dataset    
    dataset = [98000, 108000];

    svg.selectAll("rect.price")
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
            fill: "#12337c",
            class: "price"
        });


    svg.selectAll("text.number")
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
            svg.selectAll("text.number")
                .text(function (d) {
                    return d + "元";
                });
        });
}

//=========================================
//  add new bar for the new type
//=========================================
function addNewType() {
    // add lite version into dataset
    dataset = [98000, 108000, 88000];

    xScale.domain(d3.range(dataset.length))
        .rangeRoundBands([xPadding + xShift, w - xPadding], 0.5);

    //===============
    // update bar
    //===============
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

    //=================
    // update diff bar
    //=================
    svg.selectAll("rect.price2")
        .data(dataset)
        .transition()
        .duration(500)
        .attr({
            x: function (d, i) {
                return xScale(i);
            },
            width: xScale.rangeBand(),
            height: function (d) {
                return yScale(d) - yPadding;
            }
        });


    //===============
    // update number
    //===============
    var numbers = svg.selectAll("text.number")
        .data(dataset);

    // intial
    numbers.enter()
        .append("text")
        .text(function (d) {
            return d + "元";
        })
        .attr({
            x: w + xScale.rangeBand() / 2,
            y: function (d) {
                return h - yScale(d) + 18;
            },
            "font-family": "Microsoft JhengHei, sans-serif",
            "font-size": "18px",
            "fill": "white",
            "text-anchor": "middle",
            class: "number"
        });

    // update
    numbers.transition()
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
            numbers.text(function (d) {
                return d + "元";
            });
        })


    //===============
    // update x-text
    //===============
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
            "font-family": "Microsoft JhengHei, sans-serif",
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
}


//=========================================
//  decrease price of the bar again
//=========================================
function decreasePriceAgain() {
    // re-create bars, diff bars, numbers
    // because of the z-index of svg is the order of object in the doc
    svg.selectAll("rect.price3")
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
            height: yScale(26000) - yPadding,
            fill: "#ffb6b6",
            opacity: 0.8,
            class: "price3"
        });

    svg.selectAll("rect.price").remove();
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

    svg.selectAll("text.number").remove();
    svg.selectAll("text.number")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d + "元";
        })
        .attr({
            x: function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            },
            y: function (d) {
                return h - yScale(d) + 18;
            },
            "text-anchor": "middle",
            "font-family": "Microsoft JhengHei sans-serif",
            "font-size": "18px",
            "fill": "white",
            class: "number"
        });


    // update dataset    
    dataset = [72000, 82000, 62000];

    svg.selectAll("rect.price")
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
            fill: "#12337c",
            class: "price"
        });


    svg.selectAll("text.number")
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
            svg.selectAll("text.number")
                .text(function (d) {
                    return d + "元";
                });
        });
}
