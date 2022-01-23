var parse = {
    list: [],
    get: function(rule) {
        return java.getString(rule)
    },
    getEl: function(rule) {
        return java.getElements(rule.el).toArray()
    },
    save: function(rule, isVol) {
        this.list.push({
            text: this.get(rule.title),
            isVolume: isVol,
            href: this.get(rule.url),
            isVip: this.get(rule.isVip),
            isPay: this.get(rule.isPay),
            tag: this.get(rule.tag)
        })
    },
    init: function(rules) {
        vol = rules.vol;
        ch = rules.ch;
        elements = this.getEl(vol);
        elements.forEach(el => {
            //处理卷标题
            java.setContent(el, baseUrl);
            volTitle = this.get(vol.title);
            if (volTitle != "" && elements.length > 1) {
                this.save(vol, true)
            }
            //处理章节elements     
            this.getEl(ch).forEach(el =>{ 
                java.setContent(el, baseUrl);
                this.save(ch, false)
            })
        });
            return this.list
    }
}