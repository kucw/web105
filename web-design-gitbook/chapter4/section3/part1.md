# 4.3.1 Horizontal scrolling 

> 配合 example/431_scrolltofix

* 偵測目前螢幕捲動到多少比例，讓某些圖因應改變
	* See the resource http://jsfiddle.net/jirlong/p14L45s6/
	![](/assets/img7.gif)
* WSJ scroll watcher 可以偵測內部的 div 捲動到多少 percentage http://wsj.github.io/scroll-watcher/ ，WSJ 用它來控制 d3.js 的互動圖表。
	* 應用 WSJ How Fed Rates Move Markets 用卷軸來改變圖表的參數來說明事實
	* 原始 github 網址 https://github.com/WSJ/scroll-watcher

### HTML
* 注意在下面我已經把該`<div>`的 css 直接寫在他的 element 之中，原因是我沒打算再改這個`<div>`

```html
<div id="tofix2" class="container-fluid text-center" style="background-color:coral;width:100%;min-height:50px;">
	<div id="moved"></div>
</div>
```

```html
test test test test test test test test test test test test test test test test test test test test test test test test test
```

### CSS
* 值得注意的是我設定`position:absolute`，讓他是相對於外層的`<div>`進行捲動。

```css
#moved {
	position: absolute;
	left: 0;
	height: 50px;
	width: 10%;
	background-color: rgba(0, 0, 255, 0.5);
}
```

### jQuery
* `$(window).width()`為螢幕寬度，`$('#moved').width()`為物件寬度，兩個寬度鄉儉後為**可移動寬度**。（一問：如果沒有減去物件寬度的話會產生什麼情形？）
* `$(document).height()`為整個 html 文件的高度，`$(window).height()`為螢幕高度，兩個高度相減後為**可捲動高度**。
* `var scroll_position = $(window).scrollTop();`可獲取目前的捲動位置
* 所以我預期該物件的 left 位置為上述螢幕**可移動寬度**乘上「目前捲動位置除以可捲動高度（亦即目前捲動到的螢幕高度比例）」
* 利用`.css()`直接修改`left`左邊位置的值。
* 利用`console.log()`把這些位置輸出看看。

```js
$(function () {
	var window_width = $(window).width() - $('#moved').width();
	var document_height = $(document).height() - $(window).height();
	$(window).scroll(function () {
		var scroll_position = $(window).scrollTop();
		var object_position_left = window_width * (scroll_position / document_height);
		$('#moved').css({
			'left': object_position_left
		});
	});
});
```
![](/assets/img8.png)

### Pratice 
* Convert the previous topic to status bar
	* hint: modify the following `'left': object_position_left`firstly, then modify `var window_width = $(window).width() - $('#moved').width();`
	
```js
$(function () {
	var window_width = $(window).width() - $('#moved').width();  // modify this line
	var document_height = $(document).height() - $(window).height();
	$(window).scroll(function () {
		var scroll_position = $(window).scrollTop();
		var object_position_left = window_width * (scroll_position / document_height);
		$('#moved').css({
			'left': object_position_left  // modify this line
		});
	});
});
```
* Here is the result

![](/assets/img9.png)
