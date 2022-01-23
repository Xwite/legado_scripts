/**
 * 现有两个object 都要保存到sourceVariable
 * obj1 = {token:["token0", "token1"]}
 * obj2 = {token:["token1", "token2"]}
 *
 * 使用sourceVariable.set("obj*", obj*) 结果是这样
 * {
     "obj1": "{"token":["token0","token1"]}",
 "   "obj2": "{"token":["token1", "token2"]}"
 * }
 *
 * 使用sourceVariable.add(obj*) 自动去重数组
 * {"token": ["token0", "token1", "token2"]}
 */

/**
 * 书源变量扩展 支持键值对保存数据
 * set(key, value)
 * add(value)
 */
var sourceVariable = {
    map: new Map(),
    inited: false,
    set: function(key, value) {
        this.init();
        this.map.set(key, value);
        this.save()
    },
    add: function(value) {
        if (!value) return;
        this.init();
        Object.entries(value).forEach(entry => {
            let key = entry[0], value = entry[1];
            if (value instanceof Array) {
                let array = this.map.get(key) || new Array();
                let set = new Set(array.concat(value));
                this.map.set(key, Array.from(set));
            } else {
               this.map.set(key, value);
            }
        });
        this.save();
    },
    init: function() {
        if (this.inited) return;
        this.inited = true;
        let string = source.getVariable();
        if (!!string) {
            try {
                this.map = new Map(Object.entries(JSON.parse(string)))
            } catch {}
        }
    },
    save: function() {
        source.setVariable(JSON.stringify(Object.fromEntries(this.map)))
    }
}