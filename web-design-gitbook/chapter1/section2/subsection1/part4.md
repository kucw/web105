# 1.2.1.4 利用 Clear 避免 float 在視窗大小變化上的問題

* 你可以利用 **clear:both** 讓某個`<div>`左右兩邊都不可以有其他的元素，既然強迫左右兩邊不可以有其他元素，那麼就只有上下才能有元素。這回像個網頁了。

	```css
	#banner {
		width: 800px;
		height: 100px;
		background-color: coral;
		clear:both;
	}
	#footer {
		width: 800px;
		height: 50px;
		background-color:darkgoldenrod;
		clear:both;
	}	
	```
	![](/assets/img13.png)
