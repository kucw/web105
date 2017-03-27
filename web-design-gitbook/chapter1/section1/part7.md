# 1.1.7 注意事項

### 程式的排版
* HTML 的程式碼中不管是有多少個連續空白均只會被列為一個空白，意即程式內包含多少空白鍵都不會影響 HTML 檔案，所以有些程式設計師會利用這些空白來讓程式碼排列更好看。若非要空白不可，就要打`Escape character: &nbsp;`，請參考 http://www.w3schools.com/html/html_entities.asp
* 網路上常看到有人使用結尾為 .min.css 的 CSS 檔案，即是將此 .css 檔案的所有空白鍵拿掉，以節省檔案大小。

### About Nested div
* 為何經常在別人的網頁中看到很多層的`<div>`（範例 https://www.twreporter.org/a/opinion-mountaineer-yang ）？
* 這是為了製作版面的「階層性」。下面兩個程式碼所產生網頁看起來會很相近，但其實版面結構性不太相同。

##### 1. 用階層式的 div 來製作版面的分組
* 一個做法是用`<div>`把 #banner、#content、#supporting、#footer 群組在一起（稱為右方群組），而 #nav 則為左方群組。屆時可以用 CSS 或 JavaScript 分開控制。
	
	```html
	<body>
		<div id="div_left">
			<div id="nav"></div>
		</div>
		<div id="div_right">
			<div id="banner"></div>
			<div id="content"></div>
			<div id="footer"></div>
			<div id="supporting"></div>
		</div>
	</body>
	```

<div style="page-break-after: always;"></div>
##### 2. 指定每個 div 的class屬性來製作版面分組
* 另一種做法是指定`<div>`的`class`屬性，告訴瀏覽器說，哪些區塊是一組的。
* 顧名思義，所有的元素中，id 屬性的值必須是唯一的；class相較於此，既然他中文被翻為「類別」，那意味著多個元素都可以使用這個類別。

	```html
	<body>
		<div id="nav"        class="left"></div>
		<div id="banner"     class="right"></div>
		<div id="content"    class="right"></div>
		<div id="footer"     class="right"></div>
		<div id="supporting" class="right"></div>
	</body>
	```
