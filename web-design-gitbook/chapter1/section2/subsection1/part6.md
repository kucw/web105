# 1.2.1.6 如何把整個版面置中

* 現在的問題是，整個網頁偏左，所以我要想辦法把它調整到正中央。做法是把所有的`<div>`包在一個`<div>`中，也就是`<body>`底下立刻給一個`<div>`然後把這個`<div>`的屬性用 css 指定一個寬度
* 這邊要注意的是，這個外部的`<div>`它的寬度應該和內部最寬的那一個設成一樣的寬度，才會剛好置中，所以這邊要設定為 800px。並把 margin 設定為 0 auto; 參考 http://davidwalsh.name/center-website 。
* margin: 0 auto; 的意思是，上下 margin 為 0，左右 auto，那就置中了。

	#### HTML
	```html
	<body>
		<div id="wrapper">
			<div id="banner">HSIEH HSIEH</div>
			<div id="nav">...</div>
			<div id="content">...</div>
			<div id="supporting">...</div>
			<div id="footer">...</div>
		</div>
	</body>	
	```
	#### CSS
	```css
	#wrapper {
		width: 800px;
		margin: 0 auto;
	}
	```
	![](/assets/img16.png)
