var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(_age) {
        this._age = _age;
    }
    Object.defineProperty(XiaoJieJie.prototype, "age", {
        get: function () {
            return this._age - 10;
        },
        set: function (_age) {
            this._age = _age;
        },
        enumerable: true,
        configurable: true
    });
    return XiaoJieJie;
}());
console.log(new XiaoJieJie(28).age);
