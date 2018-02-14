# pagination-bar
this is a pagination bar  used on web page<br>
using pure js

### function
Get the number of pages dynamically，it can just arrange the distribution of the button.<br>
动态获取页数后根据页数安排分页按钮的排布。


### start
copy the html and css,or write the css by yourself.<br>
复制html代码和css，或者你自己写css。
```
<div id="pageNav">
    <a href="javascript:" class="fl" id="first-page">首页</a>
  	<a href="javascript:" class="p-grid" id="pre">＜</a>
  	<a href="javascript:" class="grid" id="grid1"></a>
  	<a href="javascript:" class="grid" id="grid2"></a>
  	<a href="javascript:" class="grid" id="grid3"></a>
  	<a href="javascript:" class="grid" id="grid4"></a>
  	<a href="javascript:" class="grid" id="grid5"></a>
  	<a href="javascript:" class="n-grid" id="next">＞</a>
    <a href="javascript:" class="fl" id="last-page">末页</a>
  </div>
```
import the js,then invoke the main function and pass the number(parameter) of pages to this function.for example:<br>
引入js,然后像下面这样调用函数，并且传入页数。
```
pageNav(18);
```
