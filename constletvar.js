// avoid var because of variable hoisting
function example () {
}

console.log(example());
//const conEx = 5;
const conEx2 = [];
conEx2.push(2);

// with const you can modify non primitive data types
console.log(conEx2);