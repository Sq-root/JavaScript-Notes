// Create Function
function getAvg(x, y) {
  return (x, y) / 2;
}

console.log("Avg. of two no:", getAvg(2, 3));

// Will Return Undefined pass arg value as undefined
console.log("Avg. of two no:", getAvg());

// 1. Pass N No fo Args
// Rest Operator : ...n   => Takes N no of args as Array
function getData(val1, val2, ...data) {
  return data;
}

console.log(getData(1, 2, 3, 4, 2, 64, 646)); // Output : [3,4,2,64,646]
// console.log(getData(1, 2, 3, 4, 2, 64, 646));

//-------------------------- Passing by Value vs. Reference---------------------------
/*
1. When you pass a primitive type (like numbers, strings, and booleans) to a function in JavaScript, 
JavaScript passes it by value. This means the function gets a copy of the value, and any changes to the function parameter don’t affect the original variable.

2. When you pass an object (like an array or object) to a function in JavaScript, JavaScript passes it by reference.
This means the function gets a reference to the original object, and any changes to the function parameter will affect the original object.
*/


function x() {
  let x = 20; // Step 1: Variable 'x' is declared with the value 20

  function y(params) {
    params = 200; // Step 4: Here primitive variable separate new variables.
    console.log(params); // Step 5: Output the value of 'params' (200)
  }

  y(x); // Step 3: Call function 'y' and pass 'x' as an argument

  console.log(x); // Step 6: Output the value of 'x' (20)
}

x(); // Step 2: Call function 'x'

/* 
Explore:
JavaScript passes primitive values (like numbers, strings, and booleans) by value.
When we pass a primitive value as an argument to JavaScript then it creates a new instance of JavaScript object that will be passed  to JavaScript functions.
*/
