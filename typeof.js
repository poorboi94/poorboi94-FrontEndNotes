// check the type of the data value of what you're passing in

// gotchas
// if array is put into typeof it will say it's an object
// we want to diff between an array and an object

// checking NaN will also return Number

console.log(typeof 37 === 'number');
console.log(typeof NaN === 'number');

console.log(typeof `template literal` === 'string'); // jshint ignore:line
console.log(typeof '1' === 'string');

console.log(typeof true === 'boolean');
console.log(typeof undefined === 'undefined');

console.log(typeof {
    a: 1
} === 'object');
console.log(typeof [1, 2] === 'object');

// to differenciate an array and an object
console.log(Array.isArray([1, 2]));
console.log(Array.isArray({}));

console.log();