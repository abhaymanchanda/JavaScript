//Object Literals
const user = {
    name : "Abhay",
    age : 18,
    "email" : "abhay@google.com"
}

//How to access object
console.log(user.email);
console.log(user["email"])


// Interview Question
// const obj = {
//     a: 10,
//     b: 20
// };

// const x = "a";

// console.log(obj[x]); // ?
// console.log(obj.x);  // ?

// Answer:

// 10
// undefined

// Object.freeze(user);
// user.name = "Rahul";
// console.log(user);

