/*
===========================
IIFE (Immediately Invoked Function Expression)
===========================

Definition:
Function ko define karte hi immediately execute kar dena.

Syntax:
(function () {
    console.log("Hello");
})();

Output:
Hello

Explanation:
1. function () {}      -> Function create kiya.
2. (function () {})    -> Parentheses ne ise Function Expression bana diya.
3. ()                  -> Function ko immediately call kar diya.

------------------------------------

Arrow Function IIFE:

(() => {
    console.log("Hello");
})();

------------------------------------

IIFE with Parameters:

(function(name) {
    console.log(`Hello ${name}`);
})("Abhay");

Output:
Hello Abhay

------------------------------------

Why IIFE?

Pehle JavaScript me sirf 'var' hota tha.
'var' global scope ko pollute kar sakta tha.

IIFE ek private scope create karta hai.

Example:

var a = 10;

(function () {
    var a = 20;
    console.log(a); // 20
})();

console.log(a); // 10

Outer 'a' change nahi hota.

------------------------------------

Real-Life Example:

(function () {
    const apiKey = "abc123";

    function fetchData() {
        console.log("Fetching...");
    }

    fetchData();
})();

apiKey aur fetchData() sirf IIFE ke andar available hain.

------------------------------------

Why ';' before an IIFE?

(function () {
    console.log("First");
})();

;(function () {
    console.log("Second");
})();

Agar previous statement ';' se end nahi hui ho,
to JavaScript dono statements ko ek hi expression
samajh sakta hai, jisse error aa sakta hai.

------------------------------------

Interview Line:

IIFE = Function ko define karte hi immediately execute
karna taaki private scope create ho aur global namespace
pollute na ho.

Note:
Modern JavaScript me 'let', 'const' aur ES Modules ki
wajah se IIFE ka use kam ho gaya hai, lekin interviews
aur legacy code me ye abhi bhi important hai.
*/