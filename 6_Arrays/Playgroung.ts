//----------------- Arrays Intro ---------------

/*
const strings = ["a", "b", "c", "d"];

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

const myObject = {
  a: () => console.log(this),
};

// myObject.a();
*/

//----------------------------------73 - Building an Array----------------------------------

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  length: number;
  data: { [key: number]: any };

  //O(1)
  get(index: number): any {
    return this.data[index];
  }

  //O(1)
  push(item: any): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //O(1)
  pop(): any {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //O(N)
  delete(index: number): any {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  //O(N)
  shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

//---------------------------75 - Reversing a string----------------------------

const string = "Hi my name is Renan";

const reverse1 = (str) => {
  const reverseArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }

  return reverseArr.join("");
};

// console.log(reverse1(string));

// Clenaer solution using Built in methods
const reverse2 = (str) => str.split("").reverse().join("");
console.log("REVERSE 2", reverse2(string));
