//array

const myArr = [0 , 1 , 2 , 3];

const myArray = new Array(1, 2, 3, 4);

//Array Methods 
myArr.push(6); // [0, 1, 2, 3, 6]   add at last
myArr.pop();   // [0, 1, 2, 3]  remove from last

myArr.unshift(7); // [7, 0, 1, 2, 3] add at start
myArr.shift();
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArr.includes(10)); //false
//Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(myArr.indexOf(10)); //-1
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

////////////// SLICE AND SPLICE METHOD ///////////////////////////////////////////////////////////
///////////// SLICE AND SPLICE METHOD ////////////////////////////////////////////////////////////

console.log(myArr); //    [0, 1, 2, 3]
const newArr1 = myArr.slice(1 , 3); 
console.log(newArr1); //   [1 , 2]
console.log(myArr); //    [0, 1, 2, 3]

//SLICE ---> returns a copy of a section of an array.(original array stays same)
myArr.push(4);
console.log(myArr); //    [0, 1, 2, 3, 4]
const newArr2 = myArr.splice(1, 3);
console.log(newArr2); //  [1, 2, 3]
console.log(myArr); // [0, 4]

// | slice()                       | splice()                             |
// | ----------------------------- | ------------------------------------ |
// | Doesn't modify original array | Modifies original array              |
// | Returns copied elements       | Returns removed elements             |
// | Syntax: `slice(start, end)`   | Syntax: `splice(start, deleteCount)` |




