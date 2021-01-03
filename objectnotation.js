// dot notation and bracket notation
// use dot notation whenever you can
// bracket notation is not as string

const user = {
    first: 'Rich',
    middle: 'H',
    last: 'Last',
    nick: 'Poor'
};

console.log(user.first + ' ' + user.last);
console.log(user['first']); // jshint ignore:line
console.log(user);

// only real reason to use bracket notation
for (let prop in user) {
    console.log(user[prop]);
}