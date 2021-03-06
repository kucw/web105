var dataset1, dataset2, dataset3, dataset4, w, h, xPadding, yPadding, xShift, svg, xScale, yScalel;

$(function () {
    dataset1 = [128000, 138000];
    dataset2 = [98000, 108000];
    dataset3 = [98000, 108000, 88000];
    dataset4 = [72000, 82000, 62000];
    w = $("#svg-price").width();
    h = $("#svg-price").width() * 5 / 8;
    xPadding = 50;
    yPadding = 80;
    xShift = 0;

    svg = d3.select("#svg-price")
        .attr("width", w)
        .attr("height", h);

    xScale = d3.scale.ordinal()
        .domain(d3.range(dataset1.length))
        .rangeRoundBands([xPadding + xShift, w - xPadding], 0.5);

    yScale = d3.scale.linear()
        .domain([0, d3.max(dataset1)])
        .range([yPadding, h - yPadding]);

    // axis X
    svg.append("rect")
        .attr({
            x: xPadding + xShift,
            y: h - yPadding,
            height: 5,
            width: w - xPadding * 2
        });

    // axis Y
    svg.append("rect")
        .attr({
            x: xPadding + xShift,
            y: yPadding - 30,
            height: h - yPadding * 2 + 30,
            width: 5
        });

    // create bars
    svg.selectAll("rect.price")
        .data(dataset1)
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
        .data(dataset1)
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
        .data(dataset1)
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
            "font-weight": "bold",
            "fill": "#12337c",
            class: "x-text"
        });

});


function startPrice() {
    //================
    // update svg
    //================
    decreasePrice();

    window.setTimeout(function () {
        addNewType();
    }, 700);

    window.setTimeout(function () {
        decreasePriceAgain();
    }, 3000);

    
    //===============================
    // control the price box animate
    //===============================
    window.setTimeout(function () {
        $('#price-box').addClass('animated flipInX')
            .css("visibility", "visible")
            .html('<span style="font-size: 20px; color: black;"><span style="color:#1b47ac; font-weight:bold"> 標準版 </span>和<span style="color:#1b47ac; font-weight:bold"> PLUS 版 </span>皆降價 30000元，並加入平價<span style="color:#1b47ac; font-weight:bold"> Lite 版。 </span></span>');
    }, 800);
    
    window.setTimeout(function () {
        $('#price-box').removeClass('animated flipInX');
    }, 1500);
    
    window.setTimeout(function () {
        $('#price-box').addClass('animated flipInX')
            .html('<span style="font-size: 20px; color: black;">降價後搭配<span style="color:#1b47ac; font-weight:bold"> 政府電動車補助款 </span>，最低價格 62000元起。</span>');
    }, 3500);

}


//=========================================
//  decrease price of the bar
//=========================================
function decreasePrice() {
    // re-create bars, diff bars, numbers
    // because of the z-index of svg is the order of object in the doc
    // use old dataset ( which is dataset1 )
    svg.selectAll("rect.price2")
        .data(dataset1)
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
            fill: "#d9d9d9",
            opacity: 0.6,
            class: "price2"
        });

    svg.selectAll("rect.price").remove();
    svg.selectAll("rect.price")
        .data(dataset1)
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
        .data(dataset1)
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

    svg.selectAll("text.number2")
        .data(dataset1)
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
            class: "number2"
        });


    // use new dataset (dataset2)
    svg.selectAll("rect.price")
        .data(dataset2)
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
        .data(dataset2)
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
    // use dataset3 (add lite version)
    xScale.domain(d3.range(dataset3.length))
        .rangeRoundBands([xPadding + xShift, w - xPadding], 0.5);

    //===============
    // update bar
    //===============
    // select bars and re-bind data
    var bars = svg.selectAll("rect.price")
        .data(dataset3);

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
        .data(dataset3)
        .transition()
        .duration(500)
        .attr({
            x: function (d, i) {
                return xScale(i);
            },
            width: xScale.rangeBand()
        });


    //===============
    // update number
    //===============
    var numbers = svg.selectAll("text.number")
        .data(dataset3);

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
    // update number2
    //===============
    var numbers2 = svg.selectAll("text.number2")
        .data(dataset1);

    // intial
    numbers2.enter()
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
    numbers2.transition()
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
        .data(dataset3);

    // intial
    xText.enter()
        .append("text")
        .text(function (d, i) {
            if (i == 0) return "標準版";
            else if (i == 1) return "PLUS版";
            else if (i == 2) return "Lite版";
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
            "font-weight": "bold",
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
    // use old dataset ( which is dataset3 )
    svg.selectAll("rect.price3")
        .data(dataset3)
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
            fill: "#b2b2b2",
            opacity: 0.6,
            class: "price3"
        });

    svg.selectAll("rect.price").remove();
    svg.selectAll("rect.price")
        .data(dataset3)
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
        .data(dataset3)
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

    svg.selectAll("text.number3")
        .data(dataset3)
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
            class: "number2"
        });


    // use new dataset (dataset4)  
    svg.selectAll("rect.price")
        .data(dataset4)
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
        .data(dataset4)
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