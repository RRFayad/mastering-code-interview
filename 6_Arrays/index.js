var _this = this;
var strings = ["a", "b", "c", "d"];
// push
strings.push("e"); // 0(1)
console.log(strings);
// pop
strings.pop(); // 0(1)
console.log(strings);
// unshift
strings.unshift("x"); // 0(n)
console.log(strings);
// splice
strings.splice(2, 0, "alien"); // 0(n)
console.log(strings);
var test = [0, 1, 2, this, 4];
var myObject = {
    item: 1,
    a: function () { return console.log(_this); },
};
myObject.a();
