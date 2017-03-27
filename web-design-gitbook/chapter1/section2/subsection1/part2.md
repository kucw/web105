# 1.2.1.2 依據 class 或 id 編輯 CSS

* 因為你用Brackets編輯器，你可以對著id按右鍵，選「Quick Edit」。
	![](/assets/img10.png)
* 先想好各個區塊的大小和位置，然後先用最簡單的置放方法。若一開始寫，先寫 width 再寫 height。CSS 的概念是透過 id 和 class 來選取 HTML 元素，然後改變 HTML 的樣貌。
* **注意，我調換了一下 HTML 檔中`<div>`所出現的順序。**
* 注意到 CSS 在選擇 id 的時候，前面都會有個前綴`#`，這就是為什麼我前面都用`#nav` 或 `#content`來指稱某個`<div>`。如果是 class 的話，就會有前綴`.`。
	
	#### HTML
	```html
	<body>
		<div id="banner">HSIEH HSIEH</div>
		<div id="nav">...</div>
		<div id="content">...</div>
		<div id="supporting">...</div>
		<div id="footer">...</div>
	</body>	
	```
	#### CSS
	```css
	#nav { width:100px; }
	#banner { width:800px; }
	#content { width:600px; }
	#footer { width:800px; }
	#supporting { width:100px; }
	```
* 再來是設定高度，但你會發現，怎麼出來的結果和你「希望」出現的內容仍然不太一樣。因為事實上你還沒進行排版。
* 這時候我會為`<div>`加上背景色來幫助我瞭解現在各`<div>`的位置（先定義背景顏色比較好找，剩下的問題就是怎麼把它們排好。的確是不一樣。
	
	```css
	#banner {
		width: 800px;
		height: 100px;
		background-color: coral;
	}
	#content {
		width: 600px;
		height: 400px;
		background-color:azure;
	}
	#footer {
		width: 800px;
		height: 50px;
		background-color:darkgoldenrod;
	}
	#supporting {
		width: 100px;
		height: 150px;
		background-color:aliceblue;
	}
	#nav {
		width: 100px;
		height: 200px;
		background-color:yellow;
	}
	```
	![](/assets/img11.png)
