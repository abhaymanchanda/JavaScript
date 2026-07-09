// const tinderUser = new Object(); //singleton object   {}//o/p
const tinderUser = {};   // non singleton object(object literal)
tinderUser.name = "Abhay";
tinderUser.id = 570072122;
// console.log(tinderUser);

//object assign
//spread operation is here as well
//Array of objects and accessing the object

//important 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// OBJECTS DESTRUCTURING
const course = {
    name : "java",
    price : 999,
    teacher : "Raghav Garg"
}

course.teacher; // ok hai ,but
const {teacher} = course; // this is better syntax
const {teacher : t} = course // if you feel name is too large(i.e teacher here) you can use this
console.log(teacher);
console.log(t);


