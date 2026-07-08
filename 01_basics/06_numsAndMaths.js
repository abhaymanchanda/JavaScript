const val = 300;
console.log(val);


const value = new Number(40);  //100% it will be a number
console.log(value);

/////////////////////// MATHS ////////////////////////////////////////////////////////////////////////

// basic functions like min,max,abs,floor,round,ceil etc etc 

Math.random(); // gives b/w 0 and 1
Math.random() * 10; // goal--> we wanted value b/w 1 to 10, but the problem is .04*10 = 0.4
((Math.random()) * 10 ) + 1; // so we did +1 so that we get 1 atleast, but now 1<= num < 11
Math.floor(((Math.random()) * 10 ) + 1); // NOW, we will get 1 <= num <= 10
