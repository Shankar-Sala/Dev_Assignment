// !  1) Write an arrow function that returns the square of a number 'n'.

// ? Method-1
// let num = (n) => {
//   return n * n;
// };

// console.log(num(5));

// ? Method-2
const square = (n) => n * n;

// !  2) Write a function that prints "Hello world" 5 times at intervals of 2s each.

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

let id2 = setInterval(() => {
    console.log(id);
    console.log("clear interval ran");
}, 10000);


