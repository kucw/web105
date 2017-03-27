# 1.1.4. 結構化資料的標籤 li, ul, ol, table, tr,...

### 用 li, ul, ol 來設計 #nav 的導覽按鈕或超鏈結

* `<ul>`表示unordered list，`<ol>`表示ordered list。
* 現在假設我希望在我的網站裡面產生一個列表，例如 syllabus 的 calendar，且包含日期、主題和活動等三項資料，那應該用什麼方式做？
	* 最簡單的方式是用`<ul>`列出所有的日期、主題、活動
	* 但這項內容是「該日期和主題有該活動」，必須要用階層式的`<ul>`，例如`<ul><li><ul></ul></li></ul>`。
* `<li>`經常被用來製作超鏈結選單。例如可以在 #nav 這個`<div>`加入以下項目，預期屆時加入超鏈結後，點選後可以跳到該區段。
	
	```html
	<div id="nav">
		<ul>
			<li>About us</li>
			<li>Members</li>
			<li>Quantified self</li>
			<li>Social sensing</li>
		</ul>
	</div>
	```

### table 表格
* 若希望做成表格，程式碼大致如下，如要查閱`<table>`的 HTML code 請見http://www.w3schools.com/html/html_tables.asp
	* `<tr>`為 table row、`<th>`為 table head（標題欄位）、`<td>`為 table data。
* 要如何設定表格或列表的樣式，請見 CSS 一節(章節1.2)之表格或列表的樣式化。

	![](/assets/img5.png)
	```html
	<table>
		<tr>
			<th>Names</th><th>From</th><th>Topics</th>
		</tr>
		<tr>
			<td>Hsieh</td><td>Journalism NTU</td><td>...</td>
		</tr>
		<tr>
			<td>ChenYi Yu</td><td>Sociology Sinica</td><td>Information Society</td>
		</tr>
		<tr>
			<td>Wen-Tsai Hung</td><td>Geography NTU</td><td>GIS; Simulation</td>
		</tr>
		<tr>
			<td>Jai-Hung Tsai</td><td>Politics NCCU</td><td>Election</td>
		</tr>
	</table>
	```
