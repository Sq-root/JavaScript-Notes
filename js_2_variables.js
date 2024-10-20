// ----------------Variables--------------
console.log("----------------Variables--------------");

// Declare Var  (Means create var with default value)
// Keywords are used VAR, LET ,CONST
// var x;
// var x, y;

//Initalize the Var
// x = 100;
// console.log(x);

//Declare and initalize
// var name = "gaurav";

//Note: We can declare a Variables without using any of the keywords by de
// E.g x = 200 // BY default it is GLOBAL Scope

// ------------------Using Var keyword------------------
// (Suggestion that not to use VAR keywords because it stored inside Window Object bcuz of GLOBAL Scope)

/*1. VAR declared is global scoped. 
   - It has global scope means We Change this VAR variable anywhere & it stay until we change.
     i.e.inside block ,func ,loop we can change its value .
   - We can update the data of the Variable and also we can redeclare again with same name
   (When you redeclare a var variable, it doesn’t create a new variable, but rather, reassigns the existing one.) */
/*console.log("-------VAR Key Variables-------");

    var y = 200;
    console.log(y);
    y = "Davda"; //update its value
    console.log(y);

    var res = -30;
    console.log("Before Block:", res);
    { 
      res = -50;
      console.log("Inside Block:", res);
    }
    console.log("Changes due to inside Block:", res); */

// Redeclaration : It with in Scope (Means Suppose we declare as INT we can redeclare  this as STRING again).
// var xx =40
// // Here x will be over ride to '50'
// var xx='50'
// console.log(xx)

// Ex. VAR with block Level
// Here a var is not destroy it is decaled in IF block but still available of entire block.
// var a = 10;
// if (a > 5) {
//   var x = "Gaurav"; // Declared inside block
//   console.log("a > 5 :", x);
// }

// console.log("Outside Block: ", a, x);

// its declare in fun so it will destory
// function doWork() {
//   var x = "xxxxx"
//   console.log("Inside Fun: ", a, x);
// }

// doWork();

// ------------------Using Let keyword------------------
// Now a days Let are being used.

/* 1. LET declared is BLOCK scoped. 
  - We can update the data of the Variable but Redeclaration not allowed within block.
  - Once the LET var declare we can't redeclare again with same name we can update only. */

// let abc = 30;
// console.log(abc);
// abc = 300;
// console.log(abc);

/* 2. It has local scope means Whatever changes made inside the BLOCK it will remain till 
      the scope block Due to Let variable become local inside the block   */
// console.log("-------Let Key Variables-------");
// let tot = -30;
// console.log("Before Block:", tot); // We declare as outside so its act global
// {
//   tot = -50;
//   console.log("Inside Block:", tot); // it is specific to this block
// }
// console.log("Changes of inside Block:", tot); // now it will print abov global

/* 3. Let can't re-declared it can update. Means Suppose we declare as INT we canot decalre 
      this as STRING again, because THey are SCOPE specific.
      With in same scope re-declartion not allowed. */
// let a =40
// let a=50
// Re declaratio not allowed.

// E.g. Multilevel Scope value update
// let a = 10;
// if (a > 5) {
//   let x = "Gaurav"; //Declared inside block
//   console.log("a > 5 :", x);
//   {
//     x = 1234; // Value Update
//     console.log("Inside New Block :", x);
//   }
//   console.log("Outside Block :", x); //get new updated value
// }

// E.g. Multilevel Scope (Redeclared)
let ab = 10;
if (ab > 5) {
  let x = "Gaurav"; //Declared inside block
  console.log("ab > 5 :", x);
  {
    let x = 1234; // Redeclared here it create new var.
    console.log("Inside New Block :", x);
  }
  console.log("Outside Block :", x); //get new updated value
}

// ------------------Using const keyword------------------
// 1. Once the value assing to Var after that we can't change. (Means Redeclaration and update not allowed)
// const z =10
// console.log(z);
// will thrown error won't change
// z='Davda'
// console.log(z);

//2. Let can't re-declared it can update .
// const a =40;
// const a=50;
// Re declaratio not allowed.

//3. Once the const var declare we can't change their type
// const var1 =20;
// let var1;
// it is not possible
//4. Only var declaration not allowed in CONST we must provide the value.
// const var2;

//  --------------------Array & OBj using Const----------------
// Mutable: The value can be changed after it's created.
// Immutable: The value cannot be changed after it's created.

// 1. const with Arrays
// When you declare an array using const, you cannot reassign the array itself to a
// different array or value, but you can modify the contents of the
//  array (e.g., add, remove, or change elements).

const arr = [1, 2, 3]; // Declare an array with const

// You can modify the contents of the array
arr.push(4); // Adds 4 to the array
console.log(arr); // Output: [1, 2, 3, 4]

// You can change individual elements
arr[0] = 10;
console.log(arr); // Output: [10, 2, 3, 4]

// But you cannot reassign the array (Entire New Array )
arr = [5, 6, 7]; // This will throw an error: TypeError

// -------------------------------------------------------------
// 2. const with Object

const obj = { name: "Alice", age: 25 }; // Declare an object with const

// You can modify the properties of the object
obj.age = 26;
console.log(obj); // Output: { name: "Alice", age: 26 }

// You can add new properties
obj.city = "New York";
console.log(obj); // Output: { name: "Alice", age: 26, city: "New York" }

// But you cannot reassign the object
obj = { name: "Bob", age: 30 }; // This will throw an error: TypeError

// -------------------------Implicit Global Declaration------------------------
// Implicit global variable: When we declare any var wihtout (var, let, const) then it would create as global variable
//  Even if we declare in fun also it is part of global (window) obj.

// E.g. The variable a becomes part of the global window object
function example() {
  a = 10; // Implicit global variable
}
example();
console.log(a); // 10 (global variable, accessible outside the function)

/* Note: 
1. Unlike variables declared with var, let, or const, variables created this way are not hoisted. 
    The assignment happens at the line where the code executes.
*/
