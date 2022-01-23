function parse(rules, onlyParse) {
    let separator = separator || '#@';
    let _src = src, url = java.getString(rules.url, _src, true);
    if (url == '' || url == null || url == undefined) {
        java.log('重载' + source.getKey());
        _src = java.ajax(source.getKey());
        url = java.getString(rules.url, _src, false);
    }
    java.log('• 解析搜索链接中...')
    options = parseOptions(rules.options, _src);
    url = url + ',' + options
    java.log(url);
    java.log('• 更新源变量...');
    source.setVariable(url);
    if (!onlyParse) {
        java.log('• 重新请求中...');
        key = java.get('searchKey');
        return java.ajax(String(url)
            .replace(/\{\{key\}\}/, key))
    } else return url

    function parseOptions(rules, _src) {
        let options = {};
        for (key in rules) {
            if (typeof rules[key] == 'object') {
                options[key] = {};
                for (_key in rules[key]) {
                    options[key][_key] = String(java.getString(rules[key][_key], _src, false));
                }
            } else {
                options[key] = String(java.getString(rules[key], _src, false))
            }
        }
        return JSON.stringify(options)
            .replace(separator, '{{key}}')
    }
}