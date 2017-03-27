# 1.1.2. 版面（區塊）標籤 div

* 使用`<div>`進行版面分區。來控制哪些文字要放在哪一個區塊。以下圖為例，分為幾個區塊。先在`<div>`中新增id屬性，來指示該`<div>`的用途。
	* 橫幅區塊 - Banner 
	* 瀏覽工具區塊 - Navigation
	* 主文件區塊 - Content
	* 其他內容區塊 - Supporting
	* 註腳區塊 - Footer
	
	```html
	...
		<body>
			<div id="banner"></div>
			<div id="nav"></div>
			<div id="content"></div>
			<div id="footer"></div>
			<div id="supporting"></div>
		</body>
	...
	```
	![](/assets/img4.png)
