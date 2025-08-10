function multipleGreet(func, count) {
  // higher order function
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello");
};

// multipleGreet(greet,3);
multipleGreet(function () {
  console.log("Shankar Sala");
}, 3);

//!Higher order Function (Returns a function).

let odd = function (n) {
  console.log(!(n % 2 == 0));
};

let even = function (n) {
  console.log(n % 2 == 0);
};

function oddOrEvenFactory(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };

    
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };

  }else{
    console.log("wrong request");
  }
}

let request = "odd"; //even
