//! Scope
// ? 1) Function Scope
let sum = 54; // Global Scope

function calSum(a, b) {
  let sum = a + b; // Function Scope
  console.log(sum); //global scope if sum variable not present
}

calSum(1, 2);
console.log(sum);

// ? 1) Block Scope
// {
//   let a = 25;
//   const b = 29;
// }

// console.log(a);
// console.log(b);

for(let i =1; i<=5; i++){
    console.log(i); // block scope
}

// console.log(i); //❌

// ==========================
//! Lexical Function ( nested function)

function outerFunc(){
    let x =5;
    let y =6;
    function innerFunc(){
        let a = 5; //❌
        console.log(x);
        console.log(y);
    }
     console.log(a); //❌
    innerFunc();
}

/* //!lexical scope hosting javascript
Lexical scope and hoisting are fundamental concepts in JavaScript, though distinct in their mechanisms.
!Lexical Scope:
Lexical scope, also known as static scope, determines the accessibility of variables based on where they are declared in the source code. This means that a variable's scope is defined at the time of writing the code (author-time), not at runtime.
!Hierarchy:
When a variable is referenced, JavaScript first looks for it in the current scope. If not found, it moves up the "scope chain" to the enclosing (parent) lexical environment until it finds the variable or reaches the global scope.
!Example:
A variable declared inside a function is only accessible within that function and any functions nested inside it. It cannot be accessed from outside its declared function.
!Hoisting:
Hoisting is JavaScript's default behavior of moving declarations (of variables and functions) to the top of their containing scope during the compilation phase, before the code is executed. It is important to note that only the declarations are hoisted, not the initializations or assignments. 
!Variable Hoisting (with var):
var declarations are hoisted to the top of their function or global scope and initialized with undefined. This allows you to reference a var variable before its declaration, but its value will be undefined until the assignment line is reached.
!Function Hoisting:
Function declarations are fully hoisted, meaning both the function's name and its body are moved to the top of the scope. This allows you to call a function before its declaration in the code.
!let and const Hoisting:
While let and const declarations are also hoisted, they are placed in a "Temporal Dead Zone" (TDZ). This means they cannot be accessed until their declaration line is executed, leading to a ReferenceError if accessed before. This behavior effectively prevents using let and const variables before their explicit declaration.
!Relationship:
Lexical scope defines where a variable is accessible based on its declaration location, while hoisting dictates when a declared variable or function becomes available for use within that defined scope. Hoisting can sometimes make it appear as if variables or functions are available outside their lexical declaration order, but the underlying scope rules remain governed by lexical scoping. Understanding both is crucial for predicting variable and function behavior in JavaScript.
*/ 
