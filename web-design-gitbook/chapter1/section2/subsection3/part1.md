# 1.2.3.1 建置瀏覽列Building navigation bar

* 讓列表變成 block 而不是 list。第一步是先加入 background-color 讓他看得出顏色。
* 當設定為 display: block 時，列表的「點」會消失，會以`<div>`block 的方式呈現。
* **Display共有三個特性 none、inline、block**
	* display:none：會使得該元素消失在版面上，但實際上程式碼中仍然有他。
	* **display:inline**：會強制使得數個元素排在一列，常用於上端的 navigation bar 上，上端橫列的 navigation bar 通常以`<ul>`列表的方式來撰寫，但通常會用 display:inline 轉成一列。
	* display:block：會使得所有元素轉為區塊元素，類似`<div>`；若是`<div>`的話，若沒有設定 float:left 的話，相當於會一列一個。
	* display:inline-block，意味著 inline 的 block



* 下面這個選取方法，選取 #nav 底下的`<li>`元素，（中間是空白，不是逗號）。這個可以看 CSS Combinator（ http://www.w3schools.com/css/css_combinators.asp） 。
	* 改 display: block 且增加 #nav li 的背景色，
	* 改 list 的 margin 讓 list 間有點距離
	* 改 padding 讓文字不要太切邊	
	```css
	#nav li{
		display: block;
		background-color: coral;
		padding: 2px;
		margin: 5px;  
	}
	```


* 此時覺得左邊空太多很醜，這是因為`<ul>`和`<ol>`預設離左方與上方有段預設 padding 的緣故，所以可以把`<ul>`和`<ol>`的 padding 設為 0px。
* 請留心觀察此時的邊界，`<li>`和`<li>`間的 margin 就是 5px，連續兩個`<li>`只會有 5px 而不是 10px。至於左右與上下兩測，總共是 15px，原因是 .container 那邊 就10px，而`<li>`本身又有 5px。結果如下圖。
	* 這個就應該用瀏覽器的檢查元素來算。
	```css
	#nav ul{
		padding-left: 0px;
	}
	```
	![](/assets/img21.png)
