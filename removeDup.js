// One way to remove dups from array is to push the array to a set data struction

const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3];

const numSet = new Set();
nums.forEach((value) => numSet.add(value));
console.log(numSet);

const newNums = Array.from(numSet);
console.log(newNums);

// more expensive approach
const singleValueArr = [];
nums.forEach((value) => {
    if (!singleValueArr.includes(value))
        singleValueArr.push(value);
});
console.log(singleValueArr);