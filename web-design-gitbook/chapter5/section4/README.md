# 5.4 D3.js

* 如果希望捲動的時候能夠隨著捲動改變區域的focus，且不要有地圖底圖，希望是比較簡單的視覺化介面，那可以用d3.js。
* d3.js可以讓我們繪圖，且上面的每個路徑都是一個`<svg>`中的`<path>`可以把它設計成因應捲動來更動顏色。


* 首先稍微想一想我們教過什麼東西：
	1. Scroll-driven event可以用for-loop來偵測，目前跑到第幾個`<div>`或`<section>`。
	1. 如果光知道第幾個區塊不太夠的話，可以用 waypoint.js 來偵測目前跑到哪一個id的`<div>`
	1. 要繪製台灣地圖的話，要了解每個`<path>`會mapping到哪個縣市。

![](/assets/img6.png)

### Start
* 這裡有篇文章在教怎麼用 d3.js 繪製台灣縣市界圖 http://blog.infographics.tw/2015/04/visualize-geographics-with-d3js/ 請稍微閱讀一下獲取繪圖的相關知識。
* 找到這篇文章相對應的程式碼 https://github.com/infographicstw/example/tree/gh-pages/502 ，並把他的程式碼複製下來確認可以作用如下。
* d3.js 的概念是，利用 javascript 來產生 HTML code，所以會把地圖檔（topojson、shp 或 geojson）轉換成`<svg>`與`<path>`

### Original HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script type="text/javascript" src="//codeorigin.jquery.com/jquery-1.10.2.min.js"></script>
		<script type="text/javascript" src="//d3js.org/d3.v3.min.js"></script>
		<!-- custom files-->
		<link rel="stylesheet" type="text/css" href="index.css">
		<script type="text/javascript" src="//d3js.org/topojson.v1.min.js"></script>
		<script type="text/javascript" src="http://bost.ocks.org/mike/fisheye/fisheye.js?0.0.3"></script>
		<script type="text/javascript" src="index.js"></script>
	</head>

	<body>
		<svg width="100%" height="400px" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid"></svg>
	</body>
</html>
```

### Modified HTML
* 我利用bootstrap作為他的框架比較好控制圖文的左右方向和RWD。
* 其中有兩行import javascript可以暫時省略，而waypoints等一下會用到，先留著。

```html
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script type="text/javascript" src="//codeorigin.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="//d3js.org/d3.v3.min.js"></script>

	<!-- custom files-->
	<link rel="stylesheet" type="text/css" href="d3map.css">
	<script src="lib/jquery.waypoints.min.js"></script>
	<script type="text/javascript" src="d3map.js"></script>
</head>

<body>
	<div class="row">
		<div class="col-sm-6">
			<div id="map_container">
				<svg width="100%" height="100%" viewBox="0 0 800 400"  preserveAspectRatio="xMidYMid"></svg>
			</div>
		</div>
		<div id='story' class="col-sm-6">
			<div class="space"></div>
			<div id='16' class="story">
				<h1>嘉義市</h1>
			</div>
			<div id='17' class="story">
				<h1>臺北市</h1>
			</div>
			<div id='18' class="story">
				<h1>高雄市</h1>
			</div>
		</div>
	</div>
</body>
```

### Original JS

```js
$(document).ready(function() {

	d3.json("county.json", function(topodata) {
		var features = topojson.feature(topodata, topodata.objects.county).features;
		var prj = function(v) {
		var ret = d3.geo.mercator().center([122, 23.25]).scale(6000)(v);
		return [ret.x, ret.y];
	};
	var path = d3.geo.path().projection(prj);
	d3.select("svg").selectAll("path").data(features).enter().append("path");

	function update() {
		d3.select("svg").selectAll("path").attr({
		"d": path,
		"fill": function(d) {
		return color(d.density); }
	}
	update();
	});
});
```

### Modified JS

* 大致上有以下數點要改
	1. 原本有 mouseover event，我想把它拿掉
	1. density 我也不太需要，我的目的不在於 density，所以依照 density上色的部分我也不需要。
	1. 上色的函式我也把它拿掉


* 有幾個重要的部分要留著
	1. topojson 要如何讀取要留著
	1. density array 留著做參考，可以記錄`<svg>`中`<path>`和 topojson 中各縣市相對應的出現順序。
	1. `projection`（投影）和`enter()` 一定不能動，分別是d3.js繪製地圖和輸入資料的重要函式。


* 弄到最後只剩下這些程式碼

```js
$(document).ready(function () {
	d3.json("county.json", function (topodata) {
		var features = topojson.feature(topodata, topodata.objects.county).features;
		var prj = function (v) {
			var ret = d3.geo.mercator().center([122, 23.25]).scale(6000)(v);
			return [ret[0], ret[1]];
		};
		var path = d3.geo.path().projection(prj);
		d3.select("svg").selectAll("path").data(features).enter().append("path");
		function update() {
			d3.select("svg").selectAll("path").attr({
				"d": path,
				"fill": 'rgba(255, 255, 255, 0.5)'
			});
		}
		update();
	});
	// add waypoint fuction here
});
```

### Waypoints part

* 把下面這段code加在整個jquery裡的最下方，概念大致如下：
	1. 我把我要捲動偵測的`<div>`通通加上 class `.story` 。
	1. 當它偵測到某個`<div>`的時候，必須要把地圖上所有的`svg path` 通通掃為白色。
	1. 然後我利用 waypoint 可以幫我取得 id 的特性，先在 html 設定好每個縣市`<div>`的 id，這個 id 我把他設定成 county array 的出現順序。例如連江縣就是 1、金門就是 2。
	1. 最後，我利用 waypoints 幫我取得的這個 id，來選取`<svg>`中的第 t 個`<path>`（順序很重要，各縣市的出現順序，在 topojson 把資料轉成`<svg>`中的`<path>`後就已經決定了）。然後把這個`<path>`的顏色設為紅色。

```js
$('.story').waypoint(function () {
	$('svg path').css({
		fill: 'rgba(255, 255, 255, 0.5)'
	});
	var t = $(this.element).attr("id");
	console.log(t);
	var selected = 'svg path:nth-child(' + t + ')';
	$(selected).css({
		fill: 'red',
	});
}, {
	offset: '10%', // top of the page
	triggerOnce: true // just my preference...
});
```

### CSS

```css
path {
	cursor: pointer;
	stroke: rgba(0, 0, 0, 0.5);
	'stroke-width': 1;
}
#map_container {
	position: fixed;
	width: 100%;
	margin-left: -30%;
	z-index: -5;
}
#story {
	background-color: rgba(200, 200, 200, 0.5);
}
#story div {
	min-height: 1000px;
}
```

### Notes

* 也許你可能會覺得，做地圖非常「技巧」，需要「技術性地」知道每個地區的出現順序。這是因為地圖區塊（geojson、shp、togojson等）並不是你做的，所以你自然必須要照著他的出現順序走（如果你d3.js很強的話，那就不用這麼做了）。
* 因此，你要嘗試把你的資料或你想要選取的區塊，「技術性地」對應到人家設計好的地圖區塊上。如果地圖區塊從頭到尾就是你自己做的，當然可以想辦法盡量降低這個麻煩。
