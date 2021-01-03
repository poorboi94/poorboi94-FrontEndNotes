// multiplication of numbers
// not something you should do, just something that you CAN do
// kinda like a nested example of closure

function example(x) {
    return (y) => {
        return (z) => {
            return x * y * z;
        };
    };
}

console.log(example(5)(2)(2));