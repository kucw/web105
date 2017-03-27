# 1.1.5. 超鏈結 Hyperlink

* 此時我希望 #nav 區塊的鏈結按了以後，#content 區塊的內容就會捲動到相對應的位置。首先要為 #content 區塊中的每一個段落建個並取個 id，讓你 #nav 區塊鏈結按了以後就跳到相對應的區塊（href 你可以把它唸成 hyper reference 比較好記）。
	
	```html
	<div id="content">
        <div id="about">
            <h1>About us</h1>
        </div>
        <div id="members">
            <h1>Members</h1>
        </div>
        <div id="quantifiedself">
            <h1>Quantified-self</h1>
        </div>
        <div id="socialsensing">
            <h1>Social sensing</h1>
        </div>
    </div>
	```
* 根據前面的 #content div，#nav 大致如下（你可以用自己想用的id）。我會盡量讓 #nav 中每一個項目的 content 和該 Hyperlink 所指到的 id 一樣。這樣比較好記好管理。
	* 你也可以隨意為 id 取名，唯獨記住 id 要連字，連字建議用底線`_`，不要用 dash`-`，日後無論做任何操作都比較不會有問題，但絕對不要有空白。
	* 前面有掛`#`的這種在 HTML+CSS 中都代表 id
	* 這時候可能超鏈結捲動的狀況會不如預期，這等到 CSS 階段再做修正。
	* 提供模板的設計師通常會先把要放超鏈結的地方標註`<a href=”#”>`。代表那個地方要插入一個超鏈結。

	```html
	<div id="nav">
        <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#members">Members</a></li>
            <li><a href="#quantifiedself">Quantified-self</a></li>
            <li><a href="#socialsensing">Social sensing</a></li>
        </ul>
    </div>	
	```

### 影像作為超鏈結&lt;img&gt;
* 影像本身也可以是 hyperlink，例如我在我的「主資料夾」中的 assets 資料夾裡面放入圖片 16.png。然後我把上面 #about 那一個鏈結的「內容」改為影像如下（src is an attribute, standing for “source”）。
	
	```html
	<li><a href="about"><img src="assets/16.png"></a></li>
	```
