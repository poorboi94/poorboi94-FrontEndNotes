// array methods
// map return value you want with key value pair
// filter returns boolean while it filters entries that don't meet conditional
// reduce will keep track of prev values while you take away from the object

const prices = [1, 2, 3, 10, 20, 30];

const mapEx = prices.map((value) => value + 1);
const filterEx = prices.filter((value) => value < 10);
const reduceEx = prices.reduce((total, current) => {
    return total += current;
}, 0);

// sometimes you'll see map and filter used together
// you can do that in a single reduce statement
// reduce takes in accumulator, value, index, original array
const reduceArrayEx = prices.reduce((accumulator, value) => {
    const newVal = value + 1;
    if (value < 20) {
        accumulator.push(newVal);
    }
    return accumulator;
}, []);

console.log(prices);
console.log(mapEx);
console.log(filterEx);
console.log(reduceEx);
console.log(reduceArrayEx);