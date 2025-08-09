//forward loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }
//!==========================================
// backward loop 
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

//!=================================
// ? Print all odd numbers(1 to 15)
// for(let i = 1; i<=15; i += 2){
//     console.log(i);
// }

// !===============================
// ? Print all even numbers(2 to 10)
// for(let i = 2 ;i<=10 ;i += 2 ){
//     console.log(i);

// }

// ! ==============================
// ? Infinite loop
// for(let i=1; ; i++){
//     console.log(i);
// }

// ! ==============================
// ? Print the multiplication table for 5.

let n = prompt("write your number"); //string
n = parseInt(n); // convert a string into an integer.

for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

// for (let i = 5; i <= 50; i= i+5) {
//        console.log(i);
// }
