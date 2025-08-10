//!Arrow function
const sum = (a, b) => {
  console.log(a + b);
};

const cube = (n) => {
  return n * n * n;
};

const pow = (a, b) => {
  return a ** b;
};

// ! Arrow Function (Implicit return)

const mul = (a, b) => a * b;

//! Set TimeOut Function
// ? setTimeOut(function, timeout)

// A callback in JavaScript is a function passed as an argument to another function, intended to be executed at a later time. The function that receives the callback as an argument is often referred to as a "higher-order function."

// Code start here 👇
// console.log("Hi there!");
// setTimeout( () => {
//     console.log("Shankar Edtech");
// }, 4000);

// console.log("welcome to");

//! SetInterval Function
// ?let id = setInterval(() => {
//   console.log("Shankar EdTech_1");
// }, 2000);

// console.log(id);

// ?let id2 = setInterval(() => {
//     console.log("Shankar EdTech_2");
//   }, 3000);

//   console.log(id2);

//! Qs. this with arrow function vs function js.

const student = {
  name: "aman",
  age: 22,
  prop: this, //global scope

  getName: function () {
    console.log(this);
    return this.name;
  },

  getMarks: () => {
    console.log(this); //parent's scope--> window
    return this.marks;
  },
};
