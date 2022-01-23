# parseChapter

## [parseChapterByExpReg.js](/source/parseChapterByExpReg.js)
> 使用正则來解析二级目录，卷和章的相对位置必须正确，不用考虑层次关系
### 使用
```js
parse.init(rules)
```
### 定义变量
```js
volRules = {
    reg: /Volume_name":"(.*?)","Volume_intro":"(.*?)"/g,
    isVip:/locked/,
    isPay:/unlocked/,
    idx: {
    //reg捕获idx,务必传数字
        title: 1,
        tag: null,
        url: null,
        //isVolume务必保留
        isVolume:ture
    }
}
volRules = {
    reg: /Chapter_id":"(.*?)".*?Chapter_name":"(.*?)"/g,
    isVip:/locked/,
    isPay:/unlocked/,
    idx: {
        title: 2,
        url: 1,
        tag: null
    }
}
rules = {
    Vol: volRules,
    Ch: chRules
}

```

### 定义setUrl
```js
//自定义章节链接
function setUrl(matchArr, idx) {
    //处理章节链接
    if (!idx.isVolume) {
        return '/read/0/' + java.get('bid') + '/' + matchArr[idx.url] + '.html'
    }
}
```

## [parseChapter.js](/source/parseChapter.js)
> 使用阅读规则解析含有层次关系的二级目录  
> 处理时间大概是单独使用[JSON](/source/parseChapterByJSON.js) [Jsoup](/source/parseChapterByJsoup.js) 的10倍左右
### 使用
```js
parse.init(rules)
```
### 定义变量
```js
vol = {
    el: '.read>dl:nth-of-type(n+2)',
    title: "dt b@text@js:result.replace(book.name+ ' ','')"
}
ch = {
    el: 'dd a',
    title: 'text',
    url: 'href'
}
rules = {
    vol: vol,
    ch: ch
}
```

## 有层次关系的解析目标
### 可解析json
```json
{"Volumes":[{
    "Volume_id": "xxxx",
    "Volume_name": "第一卷",
    "Chapters": [
        {
            "Chapter_name": "介绍",
        }
    ]
},
{
    "Volume_id": "xxxx",
    "Volume_name": "第二卷",
    "Chapters": [
        {
            "Chapter_id": "xxxx",
            "Chapter_name": "介绍",
        }
    ]
}]}
```
### 可解析html
```html
<div class="read"> 
    <dl> 
        <dt>
            <b>最新章节</b>
        </dt> 
    </dl>
    <dl> 
        <dt>
            <b>第一卷</b>
        </dt> 
        <dd chapter-id="xxxx">
            <a href="xxxxcx">第一章</a>
        </dd> 
    </dl> 
    <dl> 
        <dt>
            <b>第二卷</b>
        </dt> 
        <dd chapter-id="xxxx">
            <a href="xxxx">第一章</a>
        </dd> 
    </dl>
</div>
```