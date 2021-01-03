// How to empty an array
// set the arry to empty array
// set length to 0 
// while looping 
// splice values out 
let arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3];
const arr5 = [1, 2, 3];

arr1 = [];
arr2.length = 0;
arr3.splice(0);

while (arr4.length > 0) {
    arr4.pop();
}

while (arr5.length > 0) {
    arr5.shift();
}

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);