// pass by value 
let example1 = 1;
let example2 = example1;
example2++;

// example2 is 2 
console.log(example1, ' - ', example2); 

// pass by reference
let example3 = {};
let example4 = example3;
example4.firstName("Rich");

// Both have firstName => Rich
console.log(example3, ' - ', example4);

// if we want objects to not be passed by referance
let example5 = ['1234'];
let example6 = [...example5];
example6.push('ref');

console.log(example5, ' - ', example6);

//same with objects or hashes
//let example7 = {};
//let example8 = {...example7};