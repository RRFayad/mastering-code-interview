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
