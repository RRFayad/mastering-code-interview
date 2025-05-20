//----------------- Arrays Intro ---------------
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var strings = ["a", "b", "c", "d"];
// push
strings.push("e"); // 0(1)
// console.log(strings);
// pop
strings.pop(); // 0(1)
// console.log(strings);
// unshift
strings.unshift("x"); // 0(n)
// console.log(strings);
// splice
strings.splice(2, 0, "alien"); // 0(n)
// console.log(strings);
var myObject = {
    a: function () { return console.log(_this); },
};
// myObject.a();
//----------------------------------73 - Building an Array----------------------------------
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    //O(1)
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    //O(1)
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    //O(1)
    MyArray.prototype.pop = function () {
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    };
    //O(N)
    MyArray.prototype.delete = function (index) {
        var item = this.data[index];
        this.shiftItems(index);
        return item;
    };
    //O(N)
    MyArray.prototype.shiftItems = function (index) {
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    };
    return MyArray;
}());
var newArray = new MyArray();
//---------------------------75 - Reversing a string----------------------------
var string = "Hi my name is Renan";
var reverse1 = function (str) {
    var reverseArr = [];
    for (var i = str.length - 1; i >= 0; i--) {
        reverseArr.push(str[i]);
    }
    return reverseArr.join("");
};
// console.log(reverse1(string));
// Clenaer solution using Built in methods
var reverse2 = function (str) {
    return str.split("").reverse().join("");
};
console.log("REVERSE 2", reverse2(string));
var reverse3 = function (str) { return __spreadArray([], str, true).reverse().join(""); };
console.log("REVERSE 3", reverse3(string));
