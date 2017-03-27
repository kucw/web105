# 1.2.1.1 Link to CSS in HTML

* 先新增一個 css 檔案放在 css 子資料夾下（例如 main.css），此時你在Brackets上的資料夾也會相對應改變。
	* 建議先在你的資料夾中新增加以下這幾個資料夾
		* assets 通常用來放檔案，例如圖片
		* css 用來放所有的 css
		* js 用來放 javascript
* 並在 HTML 的`<head>`中加入 CSS 連結。我目前把 main.css 放在 css 這個子資料夾中，你可以在 href 中找到相對應的路徑。接下來就要編輯 CSS 改變這個文檔的 Layout。

	```html
	<link rel="stylesheet" type="text/css" href="css/main.css">
	```
