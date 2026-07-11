// block scope and global scope

var c = 3;
if(true){
    var c = 30;
}
console.log(c);   // 30, but it should have been 3, bcz c=30 should be just inside if thats called block scope but VAR doesnt follow ,that is why i should avoid var use.

// +++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function addOne(val){
//     return 1 + val                       
// }

// const res = function addOne(val){
//     return 1 + val
// }
//These are two ways of declaring

addOne(5)
function addOne(val){     //This will not give an error
    return 1 + val                       
}


// addOne(5)
// const res = function addOne(val){     // This will throw an error -> cannot access before 
//     return 1 + val                    // initialization , when you declare a function like
                               // this you cant access function before initialization
// 


//++++++++++++++++++++++this and arrow function +++++++++++++++++++++++++++++++++++++
// this is used only in objects not functions


// ++++++++++++ ARROW FUNCTION ++++++++++++++++++++

// const result = (num1 , num2) => {
//          return num1 + num2             // arrow funstion
// }

// const result = (num1,num2) => num1 + num2   // no need of return keyword in case of same line
// but in case of object you need () even if same line

// const result = (num1 , num2) => (num1 + num2) // no need of return in case of () , but{} you need 100% and


// const user = {
//   name: "Abhay",
//   greet() {
//     console.log(this.name);
//   }
// };

// user.greet(); // Abhay

// Yahan this → user.

// function hello() {
//   console.log(this);
// }

// hello();
// Browser (non-strict mode): window
// Strict mode: undefined

// Arrow function me this apna nahi hota:

// const user = {
//   name: "Abhay",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet(); // undefined

// Arrow function surrounding scope ka this use karti hai.

