//! 1. a <p> with red text that says "Hey I'm red!"

let para1 = document.createElement("p");
para1.innerText = "Hey, I am red";

document.querySelector("body").append(para1);

para1.classList.add("red");

// ! an <h3> with blue text that says "I'm a blue h3!"
let head3 = document.createElement("h3");
head3.innerText = "I'm a blue h3!";

document.querySelector("body").append(head3);
head3.classList.add("blue");

//! a <div> with a black border and pink background color with the following elements inside of it:
//?  another <h1> that says "I'm in a div"
//?a <p> that says "ME TOO!"

let div = document.createElement("div");
let head1 = document.createElement("h1");
let para2 = document.createElement("p");

head1.innerText = "I'm in a div";
para2.innerText ="ME TOO!";

div.append(head1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").prepend(div);