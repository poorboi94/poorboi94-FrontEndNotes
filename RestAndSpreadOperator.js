// Rest: take all the parameters that we're passing in and put all of them into array
// Spread: unwrap the values on an object or array

// Rest example in the paramesters of add
function add (...num) {
    // spread operator gets all values from array and dumps them
    const nums = [1, 2, 3, ...num];
    console.log(nums);

    // spread operator on object
    const user = {
        ...num
    };

    console.log(user);
    console.log(num);
    return num;
}

console.log(add(5));
add(5, 6, 7);