//? forEach Array Method
// let arr = [
//   {
//     name: "Shankar",
//     marks: 99,
//   },
//   {
//     name: "Sneha",
//     marks: 98,
//   },
//   {
//     name: "Ram",
//     marks: 97,
//   },
// ];

// arr.forEach((student) => {
//   console.log(student.marks);
// });

//? map  method

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//   return el * 2;
// });

// let students = [
//   {
//     name: "Shankar",
//     marks: 99,
//   },
//   {
//     name: "Sneha",
//     marks: 98,
//   },
//   {
//     name: "Ram",
//     marks: 97,
//   },
// ];

// let gpa = students.map((el) => {
//   return el.marks / 10;
// });

//? filter  method
// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter((el) => {
//   return el % 2 == 0; //even--> true, odd--> false
// });

//? every  method
// let arr = [2, 4, 5, 6];
// let ans = arr.every((el) => {
//   return el % 2 == 0;
// });

// console.log(ans);

//? reduce  method
// let arr = [1, 2, 3, 4];
// let finalValue = arr.reduce((res, el) => {
//   console.log(res);
//   return res + el;
// });
// console.log(finalValue);

//! Qs. finding maximum in an array using reduce method
//? normal for loop method
// let arr = [1, 4, 2, 5, 6, 7, 2, 9,10,  2];
// let max = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

//? reduce method

// let arr = [1, 4, 2, 5, 6, 7, 2, 9,10,  2];
// let max = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(max);

//! Qs Check if all numbers in our array are multiples of 10 or not.

// let nums = [10, 20, 30, 40, 5];

// let result = nums.every((el) => el % 10 == 0);

// console.log(result);

//! Qs Create a function to find the min number in an array.

// let nums = [10, 20, 30, 40, 5];

// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(min);

//** */ by using function

// let nums = [10, 20, 30, 40, 5];

// function getMin(nums) {
//   let min = nums.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });

//   return min;
// }

// console.log(getMin(nums));

//? Default Parameters
// function sum(a, b=2){
//     return a + b ;
// }

// function sum(a = 2, b) {
//   return a + b;
// }

// sum(1, 3); // 4
// sum(1); //a=1, b= undefined  due to it  follow order in parameter. Always use at the end  parameter

// =======================================

// ? Spread with object literals

// let data = {
//   email: "ironman@gmail.com",
//   password: "abcd",
// };

// let dataCopy = {
//   ...data,
//   id: 123
// };

function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
        
    }
}
