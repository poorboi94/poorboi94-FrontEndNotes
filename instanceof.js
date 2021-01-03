// used to find prototype (class) of an object

// bad example | should not do this | abuse of instance of
console.log('hello world' instanceof String);

class Circle {}
const circle = new Circle();

console.log(circle instanceof Circle);
console.log(circle instanceof Object);
