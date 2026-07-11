/*
=====================================
JavaScript Execution Context (EC)
=====================================

Definition:
Execution Context woh environment hai jisme JavaScript code execute hota hai.

JavaScript code 2 phases me execute hota hai:

1. Memory Creation Phase (Creation Phase)
2. Code Execution Phase

-------------------------------------

Example:

var n = 2;

function square(num) {
    return num * num;
}

var square2 = square(n);
var square4 = square(4);

-------------------------------------

Phase 1: Memory Creation

JavaScript memory allocate karti hai.

Memory:

n         -> undefined
square    -> Entire Function
square2   -> undefined
square4   -> undefined

-------------------------------------

Phase 2: Code Execution

Line by line code execute hota hai.

n = 2

square() function call hota hai.
Naya Function Execution Context create hota hai.

Function EC:

num -> 2

return 4

Function EC destroy ho jata hai.

square2 = 4

Phir square(4) call hota hai.

Function EC:

num -> 4

return 16

Function EC destroy.

square4 = 16

-------------------------------------

Execution Context Components

1. Memory Component (Variable Environment)
   - Variables
   - Functions

2. Code Component (Thread of Execution)
   - Code line by line execute hota hai.

-------------------------------------

Execution Context Types

1. Global Execution Context (GEC)
   - Sabse pehle create hota hai.
   - Sirf ek baar banta hai.

2. Function Execution Context (FEC)
   - Har function call par naya banta hai.
   - Function complete hote hi destroy ho jata hai.

-------------------------------------

Call Stack

Execution Contexts Call Stack me store hote hain.

Example:

Global EC
   ↓
square(2)
   ↓
return
   ↓
square(4)
   ↓
return

Stack hamesha LIFO (Last In, First Out) follow karta hai.

-------------------------------------

Interview Points

✔ JavaScript is Single Threaded.
✔ JavaScript executes one line at a time.
✔ Every function call creates a new Execution Context.
✔ Global Execution Context is created first.
✔ Execution Context has two phases:
   - Memory Creation
   - Code Execution
✔ Function Execution Context is destroyed after execution. */
