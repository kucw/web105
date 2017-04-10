# 1.2.2.3 Hierarchical div

* 有一個做法就是在`<div>`裡面再夾一層`<div>`才放文字，然後在這個內層的`<div>`不要限制 width 大小。
	* 為什麼這樣是可以達到效果的？因為外層的`<div>`所包含的內容物 padding 為 0，卻有 width 限制，所以外層`<div>`的 content 與外框 width 會相同。
	* 內層`<div>`則不限制 width（自由擠壓文字），但 padding = 10，這樣的結果就是內層的文字會內縮。卻不會造成邊界的改變。
	* 你會看見我用了一個 class，並一次性修改所有 .container block 的padding，讓所有的 container 內的內容都可以內縮 10px（ CSS選取 *id* 的關鍵字是`#`、選取 *class* 的關鍵字是`.`）。
	* 不過你應該還是會看到文字突出框框邊界，這是因為你的邊界小於單一文字長度的關係。

	#### HTML
	```html
	<div id="wrapper">
	   <div id="banner">
		   <div class="container">..</div>
	   </div>
	   <div id="nav">
		   <div class="container">..</div>
	   </div>
	...
	</div>
	```
	
	#### CSS
	```css
	.container {
		padding: 10px;
	}
	```
