# 1.2.1.5 Fixed banner: 讓 banner 不管怎麼捲動都不會離開視窗

* 接下來我利用 **position:fixed** 希望讓 banner 固定。
	* 為了讓網頁有捲動效果，你可以將 #content 的 height 改設為 800px。
	```css
	#banner {
		width: 800px;
		height: 100px;
		background-color: coral;
		clear:both;
		position:fixed;
	}
	#content {
		width: 600px;
		height: 800px;
		background-color:azure;
		float: left;
	}
	```
	![](/assets/img14.gif)
* 固定是固定住了，但問題來了，其一：捲上去上面有一條透明的區域；其二：文字都捲到 banner 背後去了。
	* 會有怪空白是因為`<body>`預設的 margin 不為 0，所以把`<body>`的 margin設為 0。
	* 會捲到背後去是因為 position:fixed 說明說到「若設為 position:fixed 會把該`<div>`移出正常的`<div>`流」，相當於另外開了一個「圖層」在前景或背景（用 z-index 控制）；此時，後面的 #navigation、#content、#supporting 就因此「往上跑了」
* 解決辦法是，強制 #navigation、#content、#support 必須距離視窗上緣上面有一段空間，且該空間的高剛好等於 banner 的高（100px）。你可以在每一個`<div>`的CSS中加入`margin-top: 100px`，但你也可以統一用下面的語法，一次性設定三個`<div>`的 margin-top。

	```css
	body {
		margin: 0;
		padding: 0;
	}
	#content, #nav, #supporting{
		margin-top: 100px;
	}
	```
	![](/assets/img15.gif)
