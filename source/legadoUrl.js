//String.add()
//url添加urloptions 默认添加referer头
//添加其他定义var options
String.prototype.add = function() {
    let _options = {headers:{Referer:baseUrl.replace(/\,\s*\{.*/,"")}}
    if (typeof options != "undefined") {
        _options = Object.assign(_options, options)
    }
    return `${this},${JSON.stringify(_options)}`
}
Object.prototype.add = function() {
    return this.toString().add(arguments[0])
}

//Array.toImg(checkUrl)
//图片数组转<img src ..>
//handle(url) 处理图片链接 默认添加referer头
Array.prototype.toImg = function(handle) {
    let _handle;
    if (!handle && String.prototype.add) {
        let sourceUrl = String(source.getKey()),
        _domain  = sourceUrl.replace(/^http.*?\./,"");
        _handle = (url) => url.includes(_domain) ? url.add() : url
    }
    if (handle) _handle = handle;
    return this.map(src=>`<img src="${_handle?_handle(src):src}"/>`).join("\n")
}
