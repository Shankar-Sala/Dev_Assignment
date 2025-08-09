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

//? method-1
// let n = prompt("write your number"); //string
// n = parseInt(n); // convert a string into an integer.

//? method-2
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// for (let i = 5; i <= 50; i= i+5) {
//        console.log(i);
// }

// !=======================================
// for(let i=1; i<=3; i++){
//     console.log(`Outer Loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// !===================================
// ?While loop

// let i=5;

// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }


// ? Favorite Movie

let favMovie = "mahavatar narsimha"
let guess = prompt("Enter Your FavMovie Name");
while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("wrong guess. Please try again");
}

if(guess == favMovie){
    console.log("congrats!!");
}

