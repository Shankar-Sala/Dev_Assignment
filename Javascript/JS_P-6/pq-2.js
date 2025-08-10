//! CREATE A FUNCTION TO ROLL A DICE & ALWAYS DISPLAY THE VALUE OF THE DICE(1 TO 6).

function rollDice() {
  let rad = Math.floor(Math.random() * 6) + 1;
  console.log(rad);
}


rollDice();
rollDice();
rollDice();
rollDice();