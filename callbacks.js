// functions that we are passing that we will refer to later and callback to

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((val) => val + 5);
const arr3 = arr.map(add5);

console.log(arr2);
console.log(arr3);

function add5(val) {
    return val + 5;
}