# parseSearch.js

## 使用
* 搜索地址规则复制以下内容
```js
<js>
//依靠source变量来缓存搜索链接
java.put('searchKey',key);
source.getVariable()||source.getKey()
</js>
```
* 定义好rules解析规则和搜索链接变化判断函数needParse
```js
function needParse(){
//代码部分
    return true //搜索链接变了
    return false //搜索链接未变
}
```
* 执行
```js
let script_remote_url = 'https://hub.fastgit.org/Xwite/legado_scripts/raw/main/min/parseSearch.min.js';
eval(String(java.cacheFile(script_remote_url)));
if(needParse()) parse(rules) else result
```
* 书籍列表规则
```js
<js>
....
</js>`书籍列表规则`
```

## rules格式
```js
//其中#@为关键词占位符,可自定义
var separator = '#@';
rules = {
    url: 'form@action',
    options: {
        method: 'form@method',
        body: '{{@@input@name}}=#@'
    }
}
```

## parse函数
`parse(rules, onlyParse)`
onlyParse为ture时，函数返回解析后的搜索链接  
onlyParse为false或为空时，函数返回新的搜索链接的源代码
