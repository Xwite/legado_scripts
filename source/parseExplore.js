function FlexBox(title, url, num) {
    let obj = {};
    obj.style = {}, obj.title = title, obj.url = url ? url : '', obj.style['layout_flexGrow'] = 1;
    //部分数值设定 关耳@2379204@coolapk
    let data = {
        1: 1,
        2: 0.4,
        3: 0.25,
        4: 0.2,
        5: 0.15,
        7: 0.1,
        10: 0.05
    };
    obj.style['layout_flexBasisPercent'] = data[num]
    return obj
}
//所需发现格式数组字符
JSON.stringify(datas.map(data => {
    let args = parse(data);
    return FlexBox.apply(null, args)
}))