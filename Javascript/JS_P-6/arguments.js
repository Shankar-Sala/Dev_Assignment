// ! Function with arguments
// * gives input to a function
//? Syntax
// function funcName(arg1, arg2..){
     //do something
// }

// Starts function arguments
function printInfo(name, age){
     console.log(`${name}'s age is ${age}.` );
}

printInfo("Shankar Sala", 22);
printInfo("Sagar Sala", 19);
printInfo("karan");

// ! JavaScript: Follow the Order of Function Arguments
/*
In JavaScript, you must follow the correct order of arguments when calling a function. If you don’t, the values will be assigned incorrectly, and it can lead to unexpected results or undefined values.

function displayInfo(name, age) {
  console.log(`${name}'s age is ${age}`);
}

displayInfo(12); 
//? Output: "12's age is undefined"

! Explanation:
In the example above, the function displayInfo(name, age) expects the first argument to be a name and the second to be an age.

But we only passed 12, so JavaScript assigns:

name = 12

age = undefined (because no second argument was passed)

This results in incorrect output:
"12's age is undefined"

Always pass arguments in the correct order to ensure they are stored in the correct parameters.
*/ 

// printInfo(12);

function sum(a, b){
 console.log("Sum of a and b is : ", a + b);
}

sum(2,4);
sum(3,4);
sum(4,4);
