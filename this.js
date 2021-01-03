// this should return a window object
// can be seen when running this js file in the browser
console.log(this);

const exampleObj = {
    first: 'Rich',
    last: 'LastName',
    fullName: function () {
        return `${this.first} ${this.last}`;
    }
    // can be writen shorthand too
    //fullName () {
    //    return `${this.first} ${this.last}`;
    //}
    // cannot handle arrow function
};

console.log(exampleObj.fullName());