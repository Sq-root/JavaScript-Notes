var a = 10;
var b = "10";

// E.g. '6' and 6 are same here it only check for Values
console.log("(a == b) => ");
result = a == b;
console.log(result);
// console.log(linebreak);

// E.g. '6' and 6 are same here it  check for Values as well as their Data types
console.log("(a === b) => ");
result = a === b;
console.log(result);
// console.log(linebreak);

let a = 5;
let b = '5';

console.log(a == b);  // Output: true (only compares value)
console.log(a === b); // Output: false (compares value and type)

console.log(a > 3);   // Output: true
console.log(a <= 5);  // Output: true


//---------------------------- Truthy And Falsy Operator ----------------------------
// Truthy Value : It is a Value that is considered true when encountered in a Boolean Context.
// Anything that isn't falsy is truthy.
// This means values like numbers other than 0, non-empty strings, objects, arrays, and more are all truthy.
if (true) {
  console.log("This will run."); // `true` is truthy
}

if (42) {
  console.log("42 is truthy."); // Any non-zero number is truthy
}

if ("hello") {
  console.log("'hello' is truthy."); // Non-empty strings are truthy
}

if ([]) {
  console.log("Empty array is truthy."); // Even an empty array is truthy
}

if ({}) {
  console.log("Empty object is truthy."); // Empty objects are also truthy
}

let admin = {
    name:null
};
if (admin.name) {
  console.log("Name is set.");
} else {
  console.log("Name is not set.");
}

//Falsy : It is a Value that is considered FALSE when encountered in a Boolean Context.
/* In JavaScript, there are only 6 falsy values:
   Falsy values: false, 0, -0, "", null, undefined, NaN.*/
if (false) {
  console.log("This won't run."); // This block will not execute
}

if (0) {
  console.log("This won't run either."); // `0` is falsy, so this doesn't execute
}

if ("") {
  console.log("Empty string is falsy."); // Empty string is falsy, so it won't run
}

if (null) {
  console.log("This won't run."); // `null` is falsy
}

if (undefined) {
  console.log("This won't run."); // `undefined` is falsy
}

if (NaN) {
  console.log("This won't run."); // `NaN` is falsy
}
