// Arrow functions adds readability. Lots of callback, promise, etc
// functions that we can use this for

// Arrow functions more than just syntax
// Can also refuse to bind its own (this) [ access to the outer this instead ]

function example(param1) {
    return param1 + 1;
}

console.log(example(1));

const example2 = (param1) => {
    return param1 + 1;
};
console.log(example2(1));

const example3 = param1 => param1 + 1; 
console.log(example3(1));

// doesn't bind `this`
const user = {
    first: 'Rich',
    last: 'Last',
    full: function () {
        return `${this.first} ${this.last}`;
    },
    fullName: () => {
        return `${this.first} ${this.last}`;
    }
};
console.log(user.full());

// undefined undefined
console.log(user.fullName());
