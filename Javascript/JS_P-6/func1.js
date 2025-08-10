function printHello(){
    console.log("Hello World");
}

function printName(){
    console.log("Shankar Sala");
}

function print1To5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

function isAdult(){
    let age = 13;
    if(age >= 18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}


//function call
printHello();
printName();
print1To5();
isAdult();