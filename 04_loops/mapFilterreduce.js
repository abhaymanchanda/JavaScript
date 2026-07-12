// ````md
// # JavaScript: `map()`, `filter()`, and `reduce()`

// These are higher-order array methods used for data transformation and processing.

// ---

// # 1. `map()`

// ## What is `map()`?

// `map()` creates a **new array** by applying a function to every element of the original array.

// > **Original array is not modified.**

// ---

// ## Syntax

// ```javascript
// const newArray = array.map((element, index) => {
//     return transformedValue;
// });
// ```

// ---

// ## Example 1: Double Every Element

// ```javascript
// const arr = [1, 2, 3, 4];

// const result = arr.map((num) => num * 2);

// console.log(result);
// ```

// **Output**

// ```
// [2, 4, 6, 8]
// ```

// ---

// ## Example 2: Square Every Element

// ```javascript
// const arr = [2, 3, 4];

// const squares = arr.map((num) => num * num);

// console.log(squares);
// ```

// **Output**

// ```
// [4, 9, 16]
// ```

// ---

// # 2. `filter()`

// ## What is `filter()`?

// `filter()` creates a **new array** containing only the elements that satisfy a condition.

// > Return `true` → Keep element  
// > Return `false` → Remove element

// ---

// ## Syntax

// ```javascript
// const newArray = array.filter((element) => {
//     return condition;
// });
// ```

// ---

// ## Example 1: Even Numbers

// ```javascript
// const arr = [1, 2, 3, 4, 5, 6];

// const even = arr.filter((num) => num % 2 === 0);

// console.log(even);
// ```

// **Output**

// ```
// [2, 4, 6]
// ```

// ---

// ## Example 2: Numbers Greater Than 50

// ```javascript
// const arr = [20, 55, 80, 10];

// const result = arr.filter((num) => num > 50);

// console.log(result);
// ```

// **Output**

// ```
// [55, 80]
// ```

// ---

// # 3. `reduce()`

// ## What is `reduce()`?

// `reduce()` reduces an array to a **single value**.

// It is commonly used for:
// - Sum
// - Product
// - Maximum
// - Minimum
// - Frequency Count
// - Grouping

// ---

// ## Syntax

// ```javascript
// const result = array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);
// ```

// ---

// ## Example 1: Sum of Array

// ```javascript
// const arr = [1, 2, 3, 4];

// const sum = arr.reduce((acc, num) => acc + num, 0);

// console.log(sum);
// ```

// **Output**

// ```
// 10
// ```

// ---

// ## Example 2: Product

// ```javascript
// const arr = [2, 3, 4];

// const product = arr.reduce((acc, num) => acc * num, 1);

// console.log(product);
// ```

// **Output**

// ```
// 24
// ```

// ---

// ## Example 3: Maximum Element

// ```javascript
// const arr = [12, 45, 6, 90, 30];

// const max = arr.reduce((acc, num) => Math.max(acc, num));

// console.log(max);
// ```

// **Output**

// ```
// 90
// ```

// ---

// # Difference

// | Method | Purpose | Returns |
// |---------|---------|----------|
// | `map()` | Transform every element | New Array |
// | `filter()` | Keep elements matching a condition | New Array |
// | `reduce()` | Reduce array to one value | Single Value |

// ---

// # Quick Comparison

// ```javascript
// const arr = [1, 2, 3, 4, 5];
// ```

// ### `map()`

// ```javascript
// arr.map(num => num * 2);
// ```

// Output

// ```
// [2, 4, 6, 8, 10]
// ```

// ---

// ### `filter()`

// ```javascript
// arr.filter(num => num % 2 === 0);
// ```

// Output

// ```
// [2, 4]
// ```

// ---

// ### `reduce()`

// ```javascript
// arr.reduce((sum, num) => sum + num, 0);
// ```

// Output

// ```
// 15
// ```

// ---

// # Method Chaining

// You can combine these methods together.

// ```javascript
// const arr = [1, 2, 3, 4, 5];

// const result = arr
//     .filter(num => num % 2 === 0)
//     .map(num => num * 10)
//     .reduce((sum, num) => sum + num, 0);

// console.log(result);
// ```

// **Explanation**

// - `filter()` → `[2, 4]`
// - `map()` → `[20, 40]`
// - `reduce()` → `60`

// **Output**

// ```
// 60
// ```

// ---

// # Rule to Remember

// - **`map()` → Transform each element → New Array**
// - **`filter()` → Select elements → New Array**
// - **`reduce()` → Combine all elements → Single Value**
// - **None of these methods modify the original array.**
// ````
