// Giver 2 arrays, create a function the lets an user know (true | false) if the 2 arrays contain any common items
// Example 1:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// return false
// Example 2:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// return true
// Solving
// I could do a nested loop... But it will be O(n^2), probably I can solve it in a more efficient way
var array1 = ["a", "b", "c", "x"];
var array2 = ["z", "y", "c"];
function isCommonItems(arr1, arr2) {
    var map = {};
    // Turn arr1 into an object where properties === items
    for (var i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }
    // loop though second array and check if eac item already exists in the object
    for (var i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
    }
    return false;
}
console.log(isCommonItems(array1, array2));
