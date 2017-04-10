# 1.2.2.2 Padding: space between content and border 增加內容和框線（border）

* 我覺得之前 #nav 的鏈結文字和該`<div>`的邊緣靠得太近，所以我要嘗試在內容區塊與`<div>`的框線加上間隔，這個框線到內容間的間隔稱為 **padding**。
* 所以我要在每個`<div>`（包含 #navigation、#content、#supporting、#banner ）的 CSS 中新增 padding 屬性，讓內容距離邊框 10px。結果發現 #nav 怎麼遮到 #content了？
* 這是 Box model 的特性，注意前面那頁下面還有寫一行字，就是 width 指的是 content width。**所以導致我的 padding 新增 10px後，我的 #navigation 胖了一點點。那要怎麼解決這問題會比較方便？**
	
	```css
	#content, #nav, #supporting, #banner{
		padding: 10px;
	}
	```
	![](/assets/img19.png)
