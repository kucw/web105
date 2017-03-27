# 1.2.1.3 利用 float 屬性，先當他是 word 來排

* 用 **float:left** 可以讓`<div>`的排列就好似 word 一樣，從上到下，從左至右排。但就會受到`<div>`在 HTML 檔案中出現順序的影響。
* float 常用在編排例如相片頁面，當視窗拉大，每列的相片就變多，視窗拉小，每列就變少（拉動你的視窗試試看）。
* 這些位置的變化都需要拉一拉視窗看看自己的設計在視窗變瘦變胖的時候有沒有差別，像上面這樣的設計就是在視窗拉大時會出問題。這是因為都設為 **float:left** 的關係，所以視窗拉很大的時候，就全部靠左並排了。

	```css
	#banner {
		width: 800px;
		height: 100px;
		background-color: coral;
		float: left;
	}
	#content {
		width: 600px;
		height: 400px;
		background-color:azure;
		float: left;
	}
	#footer {
		width: 800px;
		height: 50px;
		background-color:darkgoldenrod;
		float: left;
	}
	#supporting {
		width: 100px;
		height: 150px;
		background-color:aliceblue;
		float: left;
	}
	#nav {
		width: 100px;
		height: 200px;
		background-color:yellow;
		float: left;
	}
	```
	![](/assets/img12.png)
