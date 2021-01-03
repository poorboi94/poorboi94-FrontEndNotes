// 3 + 2 + "7" testing coercion and how datatypes interacts
// above works from left to right
// 3 + 2 is 5 | when we see 7 is a string we convert 5 to strings
// string concat makes this 57
// there is explicit and implicit coercion

// implicit
const example = 3 + 2 + '7';
console.log(example);
console.log(typeof example);

// explicit
console.log(typeof String(5));
console.log(typeof Boolean(0));
console.log(typeof Number('5'));
