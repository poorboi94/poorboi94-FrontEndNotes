
const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);
arr2.push(3);

const arr3 = [ ...arr1 ];
arr3.push(19);

console.log(arr1);
console.log(arr2);
console.log(arr3);

const ob1 = {
    first: 'rich',
    last: 'last'
};

// deep copy
const ob2 = ob1;
ob2.mid = 'H';

// ways to shallow copy an object
const ob3 = JSON.parse(JSON.stringify(ob1));
ob3.temp = 'hello';

const ob4 = {
    ...ob1,
    ob4var: 'var'
};

console.log(Object.is(ob1, ob2));
console.log(Object.is(ob1, ob3));
console.log(Object.is(ob1, ob4));

console.log(ob1);
console.log(ob2);
console.log(ob3);
console.log(ob4);