# 1.1.3. 內容的結構標籤 h1 ~ h6, p

* 切完區塊以後定義本文的結構。何謂「結構」？下面的標題一、標題二或列表等等，就是一個文章的結構。前一步驟的`<div>`區塊元素是為了定義整個視覺化版面的結構，但這個`<h1>`、`<h2>`則是文章的結構。
* `<p>`stands for paragraphs.
* `<h1>`至`<h6>`stand for header of your paragraphs.
* HTML 標籤裡面可能包含另一組標籤，但也可能直接包含內容，例如下列的 #nav、#banner 等都是直接包含內容。
* 基本的導覽區塊（#nav）的內容多以下一節的`<li>`來呈現，不會呈現在這裡。
	
	```html
	<body>
		<div id="nav">For Navigation</div>
		<div id="banner">HSIEH HSIEH</div>
		<div id="content">
			<h1>About us</h1>
			<p>Jilung Hsieh</p>
			<h2>Eductaion</h2>
			<p>Dept. of CS, NCTU, BS, MS, PhD</p>
			<h2>Researches</h2>
			<h2>Projects</h2>
			<h2>Grand</h2>
		</div>
		<div id="footer">Here is footer</div>
		<div id="supporting">Here is supporting information</div>
	</body>
	```
* 但通常你看到像上述有些其實應該放在同一區塊的內容，通常會分別用`<div>`包起來。我重新把內容組織一下如下圖。
 
	```html
	<div id="content">
		<div>  <h1>About us</h1>         </div>
		<div>  <h1>Members</h1>          </div>
		<div>  <h1>Quantified self</h1>  </div>
		<div>  <h1>Social sensing</h1>   </div>
	</div>
	```
