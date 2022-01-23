//不使用java.getString..函数 处理时间为原来的1/10左右

vol = {
    el: 'Volumes',
    title: "Volume_name"
}

ch = {
    el: 'Chapters',
    title: 'Chapter_name',
    url: 'Chapter_id'
}

list = [];
//src必须为标准的JSON，否则使用eval("("+src+")")
JSON.parse(src).data[vol.el].forEach(el => {
    list.push({
        text: el[vol.title],
        isVolume: true
    });
    el[ch.el].forEach(el => list.push({
        text: el[ch.title],
        href: "/read/0/" + java.get('bid') + '/' + el[ch.url] + ".html"
    }))
});
list