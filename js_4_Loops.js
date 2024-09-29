/*Pre Increment and decrement
--------------------------------------
Preincrement : ++a
*******************************
1. Increment a = a+ 1
2. then Use a
Predecrement : --a
*******************************
1. decrement a = a-1
2. then Use a
--------------------------------------

Post Increment and decrement
--------------------------------------
Postincrement : a++
*******************************
1. First use value of a
2. then Increment a = a+ 1
Postdecrement : a--
*******************************
1. First use value of a
2. then Increment a = a-1 */

/* What is an Iterable?
An iterable is any object that implements the @@iterator method (i.e., it has a [Symbol.iterator]() property). Common iterables include:

Arrays ([])
Strings ('abc')
Maps (new Map())
Sets (new Set()) */

// ----------For Loop ------------
const arr = [1, 2, 3, 4, 5];
for (let i = 1; i < 11; i++) {
  console.log("Number:", i, " Square: ", i ** 2);
}

// A.  ++i (Pre-Increment)
for (let i = 0; i < arr.length; ++i) {
  //statment 3 Execute After everyBody Called
  console.log("Item", i, " ", arr[i]);
}

//----------For in ------------
// - It used to print KEYS of the objects. Only for iterables obj. like string ,arr (suitable for OBj Only)
// - It is used to print element index for the ARRAY.
studList = {
  Gaurav: 34,
  Kunal: 45,
  Neel: 40,
  Bhavesh: 50,
};

for (let key in studList) {
  console.log("Marks of", key, "is", studList[key]);
}

for (let index in arr) {
  console.log("Element", index, "is", studList[arr]);
}

//----------For of ------------
// - It used to print "values" of the Iterable Obj only.
// - Only for iterable objects like arrays, strings, maps, and sets.
// Object is not Iterable Obj.

const arr1 = [10, 20, 30];

for (let value of arr1) {
  console.log(value); // Output: 10, 20, 30
}

const str = "Hello";

for (let char of str) {
  console.log(char); // Output: H, e, l, l, o
}

//----------For Each ------------
/* The forEach loop in JavaScript is a method available for arrays/Obj that allows you 
to execute a function on each element of the array. 
  Key: 1. You cannot use break or continue within a forEach loop to stop or skip iterations. 
          Once started, it will iterate through every element. 
       2. Simpler Iteration: When all you need to do is iterate over an array without 
          changing or extracting values from it.
       3. It is only works on iterable objects,    */
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (currentValue, index, array) {
  // Code to execute for each element
});

fruits.forEach((fruit) => {
  console.log(fruit);
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  if (num === 3) {
    // Cannot use `continue` or `break` here
    return; // This just returns from the callback, but doesn't stop the loop
  }
  console.log(num);
});

// Objects are NOT Iterable
const obj = { name: "Alice", age: 25 };

// This will throw an error
obj.forEach((value) => {
  console.log(value);
});

// Uncaught TypeError: obj.forEach is not a function

//---------While Loop ------------
// let n = 3
// let i = 0
// while (i< n)
// {
// console.log(i)
// i++
// console.log(i)
// }

//-------------Do while loop-----------
let n = 2;
let i = 10;

do {
  console.log(i);
  i++;
} while (i < n);

//Iterate over Object
studList = {
  Gaurav: 34,
  Kunal: 45,
  Neel: 40,
  Bhavesh: 50,
};

console.log(Object.keys(studList)); //Return Arr of all the Keys

console.log(Object.keys(studList)[2]); //Return specObject.keys(studList)[i]fic keys

console.log(studList[Object.keys(studList)[2]]); //Return specfic keys

for (let i = 0; i < Object.keys(studList).length; i++) {
  console.log("Marks of", "is", studList[Object.keys(studList)[i]]);
}

for (key in studList) {
  console.log("Key " + key + " , Value " + studList[key]);
}
