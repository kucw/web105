
var death_rate = [
    ['越南', 24.26],
    ['阿魯巴', 17.48],
    ['關島', 10.01],
    ['澳門', 5.84]
];


//Chart0
var target = d3.select("#chart0");
var div = target.append("div");
div.html("Hello, world!")
    .style("background-color","darkorange")
    .style("color", "white");
div.html("Hello, world!");
div.attr("class", "container");
div.style("background-color","darkorange");
div.style("color", "white");

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


//svg02
var barheight = 20;
var divwidth = $("#svg02").width();
var myScaler2 = d3.scaleLinear()
    .domain([0, d3.max(data_col)])
    .range([0, divwidth]);

var chart = d3.select("#svg02 svg")
    .attr("width", divwidth)
    .attr("height", barheight * death_rate.length);

var bar = chart.selectAll("g")
    .data(death_rate)
    .enter().append("g")
    .attr("transform", function(d, i) {
        return "translate(0," + i * barheight + ")";
    });

bar.append("rect")
    .attr("width", function(d) {
        return myScaler2(d[1]);
    })
    .attr("height", barheight - 1);

bar.append("text")
    .attr("x", function(d) {
        return myScaler2(d[1]) - 3;
    })
    .attr("y", barheight / 2)
    .attr("dy", ".35em")
    .text(function(d) {
        return d[0] + ":" + d[1];
    });



//svg03

var barheight = 20;
var divwidth3 = $("#svg03").width();

var myScaler3 = d3.scaleLinear()
    .range([0, divwidth3]);

var chart = d3.select("#svg03 svg")
    .attr("width", divwidth3);


d3.csv("taipei_people2014.csv", function(error, data) {
    myScaler3.domain([0, d3.max(data, function(d) { return d.value; })]);

    chart.attr("height", barheight * data.length);
    data.sort(function(a, b){
        return d3.descending(a.value, b.value);
    });

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) {
            return "translate(0," + i * barheight + ")";
        });

    bar.append("rect")
        .attr("width", function(d) {
            return myScaler3(d.value);
        })
        .attr("height", barheight - 1);

    bar.append("text")
        .attr("x", function(d) {
            return myScaler3(d.value) - 3;
        })
        .attr("y", barheight / 2)
        .attr("dy", ".35em")
        .text(function(d) {
            return d.name + ":" + d.value;
        });
});


//svg04
var width = $("#svg04").width()*0.5;
var height = 300;

var yScaler = d3.scaleLinear()
    .range([0, height]);

var chart04 = d3.select("#svg04 svg")
    .attr("width", width)
    .attr("height", height);    
    

d3.csv("taipei_people2014.csv", type, function(error, data) {
    yScaler.domain([0, d3.max(data, function(d) {
        return d.value;
    })]);
    data.sort(function(a, b){
        return d3.descending(a.value, b.value);
    });
    var barWidth = width / data.length;

    var bar = chart04.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function(d, i) {
            return "translate(" + i * barWidth + ","+ (height - yScaler(d.value)) +")";
        });
        

    bar.append("rect")
        .attr("height", function(d) {
            return yScaler(d.value)-100;
        })
        .attr("width", barWidth - 1).attr('y', 50);

    bar.append("text")
        .attr("x", -20)
        .attr("y", 40)
        .text(function(d) {
            return d.name;
        })
        .style('transform', 'rotate(-45deg)');
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}
