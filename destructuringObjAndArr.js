// allow use to select properties of objects or indexes of arrays
// to more descriptively describe values and to shorten code length.

const date = [ 10, 23, 2020 ];
const [month, day, year] = [10, 23, 2020];

console.log(date);
console.log(`${month} - ${day} - ${year}`);

const user = {
    first: "Rich",
    last: "Last",
    middle: "H"
};
console.log(user);

const { 
    first: fn,  
    last: ln,
    middle: m
} = {
    first: "Rich",
    last: "Last",
    middle: "H"
};

console.log(fn);
console.log(m);
console.log(ln);