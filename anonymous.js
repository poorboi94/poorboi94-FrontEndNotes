// anonymous functions are functions that have its name elsewhere
// gets stored in a variable 
// the function itself does not have a name. we invoke it with the variable name

// tldr; store in a variable and doesnt have its own name

function add(num1, num2) {
    return num1 + num2;
}

console.log(add);
console.log(add(5,5));

// anon function
const add2 = function (num, num2) {
    return num + num2;
};

console.log(add2);
console.log(add2(5, 6));