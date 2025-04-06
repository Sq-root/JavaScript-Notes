// // -------------Function of Console--------
// console.log("Hello World");
// console.log(12 + 23);
// console.log(12 - 34.23);

// // console.warn("Alert");  // gives warninig

// // console.clear( ); // it will clear console

// /// Count execution time of any code
// console.time("Total Time:");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.timeEnd("Total Time:");

// //on Basis of condition show error
// // console.assert(566<189,'Enter valid Age')
// // console.log("Hello World");

// //Raise the Error
// // console.error("Error !!!")

// // ------ Unless we response this dialouge box it will STOP current execution

// //Raise Alert
// alert("DND!!!!");

// // Take input from User
// let input = prompt("Enter the Data: "); //by default it will take string

// //Print data on WebPage
// document.write(input);

// //Confimation Box
// // - It will take Yes or no as response from the user
// let ans = confirm("Your Password is Right?");
// if (ans) {
//   document.write("Login Successfull!");
// } else {
//   alert("Enter Correct Password !");
// }

// console.log("Number", number);

// var number = 2;
// function Square(n) {
//   console.log("Resetting Square", res);
//   var res = n * n;
//   console.log(res);
//   return res;
// }
// var newNumber = Square(3);

// var x = 100;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 101;
//   console.log(x);
// }

// function b() {
//   var x = 102;
//   console.log(x);
// }

// var number = 2;
// // console.log(number1);
// let number1 = 3;
// const number2 = 6;

// function Square(n) {
//   var all = n * n;
//   return all;
// }
// var newNumber = Square(3);
// function testScope() {
//   if (true) {
//     let insideIf = "I exist only inside if block";
//     console.log(insideIf); // ✅
//   }

//   // console.log(insideIf); // ❌ ReferenceError
// }

// testScope();

function x() {
  var a = "Hello world";
  function y() {
    console.log(a);
  }
  y();
}

x();
