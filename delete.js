// delete allows us to delete a property of an object, not just the value
// Usually try to avoid delete
// changing the contract of the application reduce integrity of any given object

const user = {
    first: "Rich",
    last: "LastName",
    nickname: "Dick"
};

const response = delete user.first;
console.log(response);
console.log(user);