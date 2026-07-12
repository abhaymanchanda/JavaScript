// // For each
// const languages = ["js", "java", "c", "cpp"]

// languages.forEach(function (val){
//     console.log(val);
    
// })

// # JavaScript: `forEach()`

// ## What is `forEach()`?

// `forEach()` is an **array method** used to iterate over every element of an array.

// It executes a callback function **once for each element**.

// ---

// ## Syntax

// ```javascript
// array.forEach(function(element, index, array) {
//     // code
// });
// ```

// or using an arrow function

// ```javascript
// array.forEach((element, index) => {
//     // code
// });
// ```

// ---

// ## Example 1: Print Elements

// ```javascript
// const arr = [10, 20, 30];

// arr.forEach((value) => {
//     console.log(value);
// });
// ```

// **Output**

// ```
// 10
// 20
// 30
// ```

// ---

// ## Example 2: Element + Index

// ```javascript
// const arr = ["A", "B", "C"];

// arr.forEach((value, index) => {
//     console.log(index, value);
// });
// ```

// **Output**

// ```
// 0 A
// 1 B
// 2 C
// ```

// ---

// ## Example 3: Sum of Array

// ```javascript
// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// arr.forEach((num) => {
//     sum += num;
// });

// console.log(sum);
// ```

// **Output**

// ```
// 15
// ```

// ---

// ## Callback Parameters

// ```javascript
// array.forEach((element, index, array) => {
//     // code
// });
// ```

// | Parameter | Description |
// |-----------|-------------|
// | `element` | Current element |
// | `index` | Index of current element |
// | `array` | Original array |

// Example:

// ```javascript
// const arr = [10, 20];

// arr.forEach((value, index, array) => {
//     console.log(value, index, array);
// });
// ```

// ---

// ## Important Points

// - Works **only on arrays**.
// - Does **not return a new array**.
// - Cannot use `break` or `continue`.
// - Usually used for printing, updating variables, API calls, DOM manipulation, etc.

// ---

// ## `for...of` vs `forEach()`

// | Feature | `for...of` | `forEach()` |
// |---------|------------|-------------|
// | Works on | Iterables | Arrays |
// | Can use `break` | ✅ | ❌ |
// | Can use `continue` | ✅ | ❌ |
// | Supports `await` naturally | ✅ | ❌ |
// | Returns value | ❌ | ❌ |

// ---

// ## Quick Example

// ```javascript
// const arr = [1, 2, 3];

// arr.forEach((num) => console.log(num));
// ```

// Output

// ```
// 1
// 2
// 3
// ```

// ---

// # Rule to Remember

// - **`forEach()` → Array method**
// - **Use when you want to perform an action on every element.**
// - **Cannot break or continue.**
// - **Prefer `for...of` when you need more control over the loop.**