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
