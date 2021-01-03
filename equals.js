// == is just checking values
// === is checking type and value (strictly equals) we prefer this
// current linting should default to === 

const example1 = 5;
const example2 = '5';

console.log(example1 == example2);
console.log(example1 === example2);