const indians = ["Virat", "Rohit", "Ms"];
const aussies = ["Starc", "Smith", "Maxwell"];

// indians.push(aussies);
// console.log(indians); [ 'Virat', 'Rohit', 'Ms', [ 'Starc', 'Smith', 'Maxwell' ] ]

// const combined = indians.concat(aussies);
// console.log(combined);  // [ 'Virat', 'Rohit', 'Ms', 'Starc', 'Smith', 'Maxwell' ]


// | `push()`                                       | `concat()`                       |
// | ---------------------------------------------- | -------------------------------- |
// | Original array modify karta hai                | Original arrays modify nahi hoti |
// | Array ko single element ki tarah add karta hai | Arrays ko merge karta hai        |
// | Returns new **length**                         | Returns new **array**            |

/////////SPREAD OPERATOR IS PREFFERED NOWADAYS////////////////////////////////////////////
  const all = [...indians, ...aussies];
  console.log(all);


  const anotherArr = [1, 2, 3, [5, 6, 7, [1, 2, [3]]]]
  const usableAnotherArr = anotherArr.flat(Infinity);
  console.log(usableAnotherArr);

  console.log(Array.isArray("Abhay"));  //  false
  console.log(Array.from("Abhay"));  //[ 'A', 'b', 'h', 'a', 'y' ]

  