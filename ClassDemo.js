var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass = /** @class */ (function () {
    function MyClass(x, y) {
        this.x = x;
        this.y = y;
        // Private Members
        this._Data = 0;
    }
    Object.defineProperty(MyClass.prototype, "Data", {
        get: function () {
            return this._Data * 100;
        },
        set: function (v) {
            this._Data = v;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.add = function () {
        return this.x + this.y;
    };
    return MyClass;
}());
var MyDerivedClass = /** @class */ (function (_super) {
    __extends(MyDerivedClass, _super);
    function MyDerivedClass(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    MyDerivedClass.add = function () { return 0; };
    MyDerivedClass.prototype.mult = function () {
        return this.a * this.b;
    };
    return MyDerivedClass;
}(MyClass));
// let o2 = new MyClass(300, 400);
// console.log(o2.add());
// o2.Data = 100;
// console.log(o2.Data);
var o1 = new MyDerivedClass(10, 20);
console.log(o1.add());
console.log(o1.mult());
