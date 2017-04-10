# 1.2.2.5 超鏈結捲動修正

* 這時候你若把 #content division 的內容增加多一點，按左方 #nav 的超鏈結，中間的 #content division 會隨之捲動到該超鏈結所指的位置。但你會發現，超鏈結打下去後，其所對應到的`<div>`對齊的位置在視窗的最上方，**這是因為我們將 #content block 強制設定 margin-top:100px 的緣故，但超鏈結對齊的還是視窗的最上緣。**
	* 修正想法是使得每一個 .item division 的出現位置都距離上緣 padding: 100px。但這會在每一個 .item division 前方新增一個空白段落。
	* 這時候一個取巧的做法就是，強制用負值的 margin 把每個區塊上拉 100px。請注意比較上下的效果。這原因是因為`<a>`所觸發的捲動是以 padding 為準？

	#### HTML
	```html
	<div id="content">
		<div class="container">
			<div id="about" class="item">....</div>
			<div id="courses" class="item">....</div>
			<div id="members" class="item">....</div>
			<div id="quantified_self" class="item">....</div>
			<div id="social_sensing" class="item">....</div>
		</div>
	</div>
	```

	#### CSS
	```css
	.item{
		padding-top: 100px;
		margin-top: -100px;
	}
	```
