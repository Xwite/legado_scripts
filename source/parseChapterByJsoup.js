//不使用java.getString..函数 处理时间为原来的1/10左右
vol = {
    el: '.read>dl:nth-of-type(n+2)',
    title: "dt b"
}
ch = {
    el: 'dd a',
//    title: 'text',
//    url: 'href'
}

list = [];
org.jsoup.Jsoup.parse(src)
    .select(vol.el).forEach(el => {
    list.push({
        text: el.select(vol.title).text().replace(book.name + ' ', ''),
        isVolume: true
    });
    el.select(ch.el)
        .forEach(el => list.push({
        text: el.text(),
        href: el.attr('href')
    }))
})
list