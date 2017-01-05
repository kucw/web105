function type(d) {
    d.value = +d.value; // coerce to number
    return d;
}

$(document).ready(function () {
    //    var density = {
    //        "連江縣": 435.21, //1
    //        "金門縣": 847.16, //2
    //        "宜蘭縣": 213.89, //3
    //        "新竹縣": 376.86, //4
    //        "苗栗縣": 311.49, //5
    //        "彰化縣": 1201.65, //6
    //        "南投縣": 125.10, //7
    //        "雲林縣": 545.57, //8
    //        "嘉義縣": 275.18, //9
    //        "屏東縣": 305.03, //10
    //        "臺東縣": 63.75, //11
    //        "花蓮縣": 71.96, //12
    //        "澎湖縣": 802.83, //13
    //        "基隆市": 2809.27, //14
    //        "新竹市": 4151.27, //15
    //        "嘉義市": 4512.66, //16
    //        "臺北市": 9952.60, //17
    //        "高雄市": 942.97, //18
    //        "新北市": 1932.91, //19
    //        "臺中市": 1229.62, //20
    //        "臺南市": 860.02, //21
    //        "桃園市": 1692.09 //22
    //    };
    d3.json("density.json", function (ddata) {
        ddata.shift();
        ddata.splice(-2, 2);
        //        console.log(ddata);
        density = d3.nest()
            .key(function (d) {
                return d.site_id.substr(0, 3);
            })
            .rollup(function (d) {
                var p = d3.sum(d, function (g) {
                    return type(g.people_total);
                });
                var a = d3.sum(d, function (g) {
                    return type(g.area);
                });
                return {
                    count: d.length,
                    area: a,
                    population: p,
                    density: p / a
                };
            })
            .map(ddata);
        console.log(density);

        d3.json("county.json", function (topodata) {
            var features = topojson.feature(topodata, topodata.objects.county).features;
            var color = d3.scale.sqrt().domain([0, 10000]).range(["#090", "#f00"]);
            var prj = function (v) {
                var ret = d3.geo.mercator().center([122, 23.25]).scale(6000)(v);
                return [ret[0], ret[1]];
            };
            var path = d3.geo.path().projection(prj);
            for (idx = features.length - 1; idx >= 0; idx--) features[idx].density = density[features[idx].properties.C_Name].density;
            d3.select("svg").selectAll("path").data(features).enter().append("path");

            d3.select("svg").selectAll("path").attr({
                "d": path,
                "fill": function (d) {
                    return color(d.density);
                }
            });
        });
    });

    $('.story').waypoint(function () {
        $('svg path').css({
            opacity: 0.5
        });
        var t = $(this.element).attr("id");
        console.log(t);
        var selected = 'svg path:nth-child(' + t + ')';
        $(selected).css({
            opacity: 1.0
        });
    }, {
        offset: '30%', // middle of the page
        triggerOnce: true // just my preference...
    });

});
