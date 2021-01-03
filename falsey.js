// unique to js
// truthy values are everything else
// falsey values are NaN,boolean false, undef, null, 0, ""
// if in a logical op they would eval to false
// Examples:

// all falsey values
/* jshint ignore:start */
const example1 = undefined;
/* jshint ignore:end */
const example2 = null;
const example3 = NaN;
const example4 = 0;
const example5 = '';
const example6 = false;

// a truthy value
const example7 = 1;

// !! is shorthand for the boolean constructor
// uses 2 !(not) operators to force either true or false
console.log(Boolean(example1));
console.log(Boolean(example2));
console.log(Boolean(example3));
console.log(!!example4);
console.log(!!example5);
console.log(!!example6);

console.log(example7);