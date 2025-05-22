// 83. Collisions - Objects as hash tables

let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: () => console.log("AAAAHHHHH"),
};

// O(1)
user.age;
// user.scream();

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

    //He did not mention, but probably a check if the value exists
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

  // O (n2) - Terrible
  keys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        const currentDataBucket = this.data[i];
        if (currentDataBucket.length === 1) {
          keys.push(currentDataBucket[0][0]);
        } else {
          for (let j = 0; j < currentDataBucket.length; j++) {
            keys.push(currentDataBucket[j][0]);
          }
        }
      }
    }

    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("asd", 651546);
myHashTable.set("adsfsdf", 651685861);
myHashTable.set("grapes", 10000);

// console.log(`I need to buy ${grapesToBuy} grapes!`);

console.log(myHashTable.keys());
