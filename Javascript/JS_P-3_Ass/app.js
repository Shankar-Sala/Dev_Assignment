//?  Qs_1 To get first n element
// let n = 2;
// let num = [7, 9, 0, -2];

// let ans = num.slice(0,n);
// console.log(ans);

// ? Qs_2 to get the last n elements
// let n = 3;
// let num = [7, 9, 0, -2];
// let newNum = num.reverse().slice(0,n).reverse();  //  method-1 //shankar
// let newNum = num.slice(num.length-n); method-2
// console.log(newNum);

// ? Qs_3

// let str = prompt("please enter a string");

// if(str.length == 0){
//     console.log("String is empty");
// }else{
//     console.log("String is not empty");
// }

// ? Qs_4
// let char = "ShAnkaR";
// let chIdx = 3;

// if(char[chIdx] == char[chIdx].toLowerCase()){
//     console.log("charater is lowercase");
// }else{
//     console.log("character is not lowercase");
// }

// ? Qs_5
let str  = prompt("please enter a string");
console.log(`original string= ${str}`);
console.log(`string without spaces=${str.trim()}`);