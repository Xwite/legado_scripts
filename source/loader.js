/**
 * 下载直到成功 多地址下载同一文件
 * @params urls Array<String>
 * @return [result, url]
 */
function load(urls) {
    for (let url of urls) {
        let result = java.ajax(url);
        if (!/exception/i.test(result)) return [result, url];
    }
    throw "Error: 所有链接下载失败";
};
