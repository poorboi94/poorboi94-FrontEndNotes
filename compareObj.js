// Can use Object.is to see if the object is the same
// If we're looking at two separate objects looking for values we can do different things
// Strigify JSON and compare strings
// go through the object properties and do a comparison of values best on key value pairs

function isSameObj(obj1, obj2) {
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) 
        return false;

    for (let i = 0; i < props1.length; i++) {
        const property = props1[i];

        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }

    return true; 
}

const user1 = {
    first: "Rich",
    last: "Last"
};

const user2 = {
    last: "Last",
    first: "Rich"
};

const stringObj1 = JSON.stringify(user1);
const stringObj2 = JSON.stringify(user2);

console.log(typeof stringObj1);
// false because not the same order of properties
console.log(stringObj1 === stringObj2);


console.log(isSameObj(user1, user2));