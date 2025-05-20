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

newArray.push("hi");
console.log(newArray.get(0));
newArray.push("there");
console.log(newArray.get(1));
