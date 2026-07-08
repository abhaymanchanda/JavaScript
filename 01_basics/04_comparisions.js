console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason for above thing is that in js, == and comparision operators work differently 
// comparision operators convert null into 0.

console.log("2" == 2); //true
console.log("2" === 2); //false === does strict check