// 83. Collisions - Objects as hash tables

let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: () => console.log("AAAAHHHHH"),
};

// O(1)
user.age;
user.scream();

// #### 84. Hash Tables in DIfferent Languages

const a = new Map();
const b = new Set();

//----------------------------85. Hash Table Implementation---------------------------
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Remember, start with _ should a private method - even if it does not work in JS, its a convention
  _hash(key) {
    let hash = 0;
    // This code was given, simply for creating the hash
    for (let i = 0; i < key.length; i++) {
      hash += (key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //O(1)
  set(key, value) {
    const hash = this._hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }

  //O(1) - eventually O(N)
  get(key) {
    const hash = this._hash(key);
    const keyValue = this.data[hash]
      ? this.data[hash].find((pair) => pair[0] === key)
      : null;
    return keyValue ? keyValue[1] : null;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
const grapesToBuy = myHashTable.get("grapes");
// console.log(`I need to buy ${grapesToBuy} grapes!`);
