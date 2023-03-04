# legado_scripts
[阅读](https://github.com/gedoor/legado)自用JavaScript片段

## 阅读使用示范
> 阅读版本必须大于`3.22.010310`
```js
//定义你的js的网络地址
let script_remote_url = 'https://hub.fastgit.org/Xwite/legado_scripts/raw/main/min/parseSearch.min.js';
//导入到阅读的js引擎里
eval(String(java.cacheFile(script_remote_url)))
//运行某些函数

```

## 片段使用说明
[解析搜索](/docs/parseSearch.md)
[解析目录](/docs/parseChapterList.md)
[解析发现](/docs/parseExplore.md)
[解析字典](/docs/parseDict.md)
## 扩展函数
[书源变量Map支持](/source/sourceVariable.js)
[链接扩展](/source/legadoUrl.js)
[下载自动重试](/source/loader.js)
