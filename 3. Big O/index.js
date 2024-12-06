/* 
//TIME COMPLEXITY:
const nemo = ["nemo"];
const everyone = ["a", "b", "c", "d", "nemo", "f", "g", "h", "i", "j"];

const findNemo = (arr) => {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found nemo!!");
    }
  }
  let t1 = performance.now();
  console.log(t1 - t0 + "miliseconds");
};

findNemo(everyone);
*/

// SPACE COMPLEXITY

function booooo(n) {
  //O(1) because it has only 1 variable
  for (let i = 0; i < n.length; i++) {
    console.log("Booooooo");
  }
}

booooo([1, 2, 3, 4, 5]);

function arrayOfHiNTime(n) {
  // O(n), as for it is linearly related to the variables qty (so the memory space)
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

console.log(arrayOfHiNTime(10));
