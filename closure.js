// function that returns a function usually for the 
// purpose of hiding a private variable

// someone could reset counter here. We don't want this
//let counter = 0;
//function add1() {
//    counter++;
//    return counter;
//}
//
//console.log(add1());
//console.log(add1());
//console.log(add1());

let counter = 0;
const add1 = (function() {
    let counter = 0;

    return function() {
        counter++;
        return counter;
    };
})();

console.log(add1());
console.log(add1());
console.log(add1());