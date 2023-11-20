// -------------Function of Console--------
console.log("Hello World");
console.log(12 + 23);
console.log(12 - 34.23);

// console.warn("Alert");  // gives warninig

// console.clear( ); // it will clear console

/// Count execution time of any code
console.time("Total Time:");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Total Time:");

//on Basis of condition show error
// console.assert(566<189,'Enter valid Age')
// console.log("Hello World");

//Raise the Error
// console.error("Error !!!")

// ------ Unless we response this dialouge box it will STOP current execution

//Raise Alert
alert("DND!!!!");

// Take input from User
let input = prompt("Enter the Data: "); //by default it will take string

//Print data on WebPage
document.write(input);

//Confimation Box
// - It will take Yes or no as response from the user
let ans = confirm("Your Password is Right?");
if (ans) {
  document.write("Login Successfull!");
} else {
  alert("Enter Correct Password !");
}
