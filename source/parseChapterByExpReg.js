var parse = {
    getArray: function(rule) {
        let idx = rule.idx,
            name = idx.name,
            url = idx.url,
            tag = idx.tag,
            reg = rule.reg,
            isPayReg = rule.isPay
            isVipReg = rule.isVip;
        let tmp = [];
        while ((s = reg.exec(result))) {
            tmp.push({
                text: s[name],
                href: setUrl(s, idx),
                tag: tag ? s[tag] : '',
                isVolume: idx.isVolume,
                isPay: isPayReg ? isPayReg.test(s[0]) : false,
                isVip: isVipReg ? isVipReg.test(s[0]) : false,
                idx: reg.lastIndex
            });
        }
        return tmp
    },
    init: function(rules) {
        return this.getArray(rules.Vol).concat(this.getArray(rules.Ch)).sort((a, b) => a.idx - b.idx)
    }
}