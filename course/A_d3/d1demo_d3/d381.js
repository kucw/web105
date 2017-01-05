//var target = d3.select("#chart0");
//var div = target.append("div"); // appending an div inside target(#chart0)
//div.html("Hello, world!"); //HTML content
//div.style("background-color","darkorange"); //CSS style
//div.style("color", "white"); //CSS style


//var target = ;

// chaining style
var div = d3.select("#chart0").append("div");
div.html("<p>Hello, world!</p>")
    .style("background-color","darkorange")
    .style("color", "white");



// chart 2

var death_rate = [
    ['越南', 24.26],
    ['阿魯巴', 17.48],
    ['關島', 10.01],
    ['澳門', 5.84]
];

var chart = d3.select("#chart2");
var bar = chart.selectAll("div"); // select divs under chart, adding div later
var barUpdate = bar.data(death_rate);// Getting data
var barEnter = barUpdate.enter().append("div"); //ender() and appending <div>
barUpdate.exit().remove(); //Clearing extra <div>

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

//chart 3


data_col = death_rate.map(function (value, index) {
    return value[1];
});//data_col: [24.26, 17.48, 10.01, 5.84]


var winwidth = $("#chart3").width();
var myScaler = d3.scaleLinear()
    .domain([0, d3.max(data_col)])//0~24.26
    .range([0, winwidth]);//0~600


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

//設定橫向bar的高度為barheight
//設定最大寬度為該div的寬度
var barheight = 20;
var divwidth = $("#svg02").width();
var myScaler2 = d3.scaleLinear()
    .domain([0, d3.max(data_col)])
    .range([0, divwidth]);

//選擇要繪製chart的svg，並加上attribute。
var chart = d3.select("#svg02 svg")
    .attr("width", divwidth)
    .attr("height", barheight * death_rate.length);

//d3.js的標準過程，在chart裡面選擇<g>去結合資料，然後透過enter()來計算資料筆數。
var bar = chart.selectAll("g")
    .data(death_rate)
    .enter().append("g")
    .attr("transform", function(d, i) {
        return "translate(0," + i * barheight + ")";
    });

//append rectangle into bar
bar.append("rect")
    .attr("width", function(d) {
        return myScaler2(d[1]);
    })
    .attr("height", barheight - 1);

//append text into bar
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

//先設定要放大的目標範圍
var myScaler3 = d3.scaleLinear()
    .range([0, divwidth3]);

var chart = d3.select("#svg03 svg")
    .attr("width", divwidth3);

d3.csv("taipei_people2014.csv", function(error, data) {
    
    
    //讀取資料後再利用d3.max()尋找資料中的最大資料值。
    myScaler3.domain([0, d3.max(data, function(d) { return d.value; })]);
    
    //svg的高度是bar的高度乘上資料筆數
    chart.attr("height", barheight * data.length);
    
    //把資料進行排序
    data.sort(function(a, b){
        return d3.descending(a.value, b.value);
    });
    console.log(data);
    
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


var width = $("#svg04").width()/2;
var height = 300;

var yScaler = d3.scaleLinear()
    .range([0, height]);

var chart04 = d3.select("#svg04 svg")
    .attr("width", width)
    .attr("height", height);

d3.csv("taipei_people2014.csv", function(error, data) {
    yScaler.domain([0, d3.max(data, function(d) {
        return d.value;
    })]);

    var barWidth = width / data.length;

    //設定bar的出現(x, y)位置
    data.sort(function(a, b){
        return d3.descending(a.value, b.value);
    });
    var bar = chart04.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function(d, i) {
            return "translate(" + i * barWidth + ","+ (height - yScaler(d.value)) +")";
        });

    bar.append("rect")
        .attr("height", function(d) {
            return yScaler(d.value);
        })
        .attr("width", barWidth - 1);
        
    //設定文字相對於bar的位置
    bar.append("text")
        .attr("x", barWidth)
        .attr("y", -5)
        .text(function(d) {
            return d.name;
        });
});