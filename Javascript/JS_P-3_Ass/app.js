//?  Qs_1 To get first n element
// let n = 2;
// let num = [7, 9, 0, -2];

// let ans = num.slice(0,n);
// console.log(ans);

// ? Qs_2 to get the last n elements
let n = 3;
let num = [7, 9, 0, -2];
let newNum = num.reverse().slice(0,n).reverse();  //  method-1 //shankar
// let newNum = num.slice(num.length-n);
console.log(newNum);