
var death_rate = [
    ['越南', 24.26],
    ['阿魯巴', 17.48],
    ['關島', 10.01],
    ['澳門', 5.84]
];


//Chart0
var target = d3.select("#chart0");
var div = target.append("div");

//chain call
div.html("Hello, world!")
//    .attr("class", "container")
    .style("background-color","darkorange")
    .style("color", "white");

//
//Chart2
var chart = d3.select("#chart2");
var bar = chart.selectAll("div");
var barUpdate = bar.data(death_rate);
var barEnter = barUpdate.enter().append("div");
barUpdate.exit().remove();
barEnter
    .style("width", function(d) {
        return (d[1] * 20) + "px";
    });                    
barEnter.text(function(d) {
    return d[0] + " : " + d[1];
});                  
barEnter
    .style("height", "20px")
    .style("background", "lightgray")
    .style("margin", "5px");

//Chart3
data_col = death_rate.map(function (value, index) {
    return value[1];
});


var winwidth = $("#chart3").width(); 

var myScaler = d3.scaleLinear()
    .domain([0, d3.max(data_col)])
    .range([0, winwidth]);
d3.select("#chart3")
    .selectAll("div")
    .data(death_rate)
    .enter().append("div")
    .style("width", function (d) {
        return myScaler(d[1]) + "px";
    })
    .text(function (d) {
        return d[0] + " : " + d[1];
    })
    .style("height", "20px")
    .style("background", "orange")
    .style("margin", "5px")
    .style("text-align", "right");