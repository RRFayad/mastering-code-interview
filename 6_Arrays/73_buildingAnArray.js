var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    return MyArray;
}());
var newArray = new MyArray();
newArray.push("hi");
console.log(newArray.get(0));
newArray.push("there");
console.log(newArray.get(1));
