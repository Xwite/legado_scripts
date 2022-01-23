# parseExplore.js

## 使用
* 定义好datas和parse函数
* 在阅读发现中执行
```js
s_url='https://hub.fastgit.org/Xwite/legado_scripts/raw/main/min/parseExplore.min.js';
eval(String(java.cacheFiel(s_url)));
```

## datas说明
```js
//title 标题
// url 完整链接 或者省略书源  可选
//nums 期望的一行的个数 可选1 2 3 4 5 7 10(占位符) 可选

//全局一行的最大个数
var nums = 4;
var separator = '$'
//只需要改这里,变量名不要变
var datas = [
    'title$url$num',
    'title',
    'title$$num',
    'title$url'
]
//例子
var datas = ['日轻', '校园', '魔法', '恋爱', '神鬼', '恐怖', '性转', '原创', '异世界', '后宫', '励志', '侦探', '历史', '搞笑'];
```
## parse说明
```js
//解析传入数据
function parse(data) {
    let args = data.split(separator);
    let title = args[0], url = args[1], num = nums;
    //看看链接如何生成
    url = "/tag/" + title + "/{{page}}.html";
    try {
        num = args[2]
    } catch (e) {}
    return [title, url, num]
}

```
