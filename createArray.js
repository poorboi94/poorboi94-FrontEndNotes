// You probably don't want to use the Array Constructor
// setting = to [] is the easiest

const example = [1];

// bad convention
const badExample = new Array();// jshint ignore:line

// mapping on existing array
const example2 = example.map((val) => {
    return val + 1;
});

console.log(example);
console.log(example2);
console.log(badExample);