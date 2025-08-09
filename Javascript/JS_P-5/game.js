// ! User enters a max numbers & then tries to 
// ? guess a random generated number 
// ! between 1 to max.
// =====================================

const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! congrats. Random number was :", random);
        break;
    }else if(guess < random){
      guess = prompt("hint : Your guess was to Small. please try again");
    }else if(guess > random){
        guess = prompt("hint : Your guess was to Large. please try again");
      }
}