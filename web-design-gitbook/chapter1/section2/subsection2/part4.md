# 1.2.2.4 Practice-2

* 我們經常在網站上面看到下圖的效果，你認為是怎麼做的？
* 特色是，你看上面的 #banner、#content、#footer 是**置中**你的視窗的，唯獨 #nav 的區塊往左邊靠，偏偏他又靠右黏著中間的 #content 區塊（提示，margin可以是負值）。

	![](/assets/img20.png)

#### Solution
```css
#nav {
    margin: -100px;
    width: 100px;
    height: 200px;
    background-color: yellow;
    float: left;
}
```
