// for of

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

const greetings = "hello world"
for (const greet of greetings){
    console.log(greet);
    
}

// # JavaScript: `for...of` vs `for...in`

// ## 1. `for...of`

// Used to iterate over **values** of an iterable object.

// ### Syntax
// ```javascript
// for (let value of iterable) {
//     // code
// }
// ```

// ### Example: Array

// ```javascript
// const arr = [10, 20, 30];

// for (let value of arr) {
//     console.log(value);
// }
// ```

// **Output**
// ```
// 10
// 20
// 30
// ```

// ### Example: String

// ```javascript
// const str = "Abhay";

// for (let ch of str) {
//     console.log(ch);
// }
// ```

// **Output**
// ```
// A
// b
// h
// a
// y
// ```

// ### Works With

// - Arrays ✅
// - Strings ✅
// - Sets ✅
// - Maps ✅

// ---

// ## 2. `for...in`

// Used to iterate over **keys (property names/indexes)**.

// ### Syntax

// ```javascript
// for (let key in object) {
//     // code
// }
// ```

// ### Example: Object

// ```javascript
// const person = {
//     name: "Abhay",
//     age: 21,
//     city: "Noida"
// };

// for (let key in person) {
//     console.log(key);
// }
// ```

// **Output**
// ```
// name
// age
// city
// ```

// ### Accessing Values

// ```javascript
// for (let key in person) {
//     console.log(key, person[key]);
// }
// ```

// **Output**
// ```
// name Abhay
// age 21
// city Noida
// ```

// ---

// ### Example: Array

// ```javascript
// const arr = [10, 20, 30];

// for (let index in arr) {
//     console.log(index);
// }
// ```

// **Output**
// ```
// 0
// 1
// 2
// ```

// To get values:

// ```javascript
// for (let index in arr) {
//     console.log(arr[index]);
// }
// ```

// **Output**
// ```
// 10
// 20
// 30
// ```

// ---

// # Difference

// | Feature | `for...of` | `for...in` |
// |----------|------------|------------|
// | Iterates over | Values | Keys / Indexes |
// | Best for | Arrays, Strings, Sets, Maps | Objects |
// | Array Output | Values | Indexes |
// | Object Support | ❌ | ✅ |

// ---

// # Quick Example

// ```javascript
// const arr = ["A", "B", "C"];

// for (let x of arr) {
//     console.log(x);
// }
// ```

// Output

// ```
// A
// B
// C
// ```

// ```javascript
// const arr = ["A", "B", "C"];

// for (let x in arr) {
//     console.log(x);
// }
// ```

// Output

// ```
// 0
// 1
// 2
// ```

// ---

// # Rule to Remember

// - **for...of → Values**
// - **for...in → Keys / Indexes**
// - **Objects → Use `for...in`**
// - **Arrays → Prefer `for...of`**