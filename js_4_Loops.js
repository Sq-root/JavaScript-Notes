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
// - It used to print KEYS of the objects. Only for iterables obj. like string ,arr
//   It is used to print element index forthe ARRAY.
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
// - It used to print values of the objects / Arr.
// - Only for iterables obj. like string ,arr

for (let chr of "Gaurav") {
  console.log(chr);
}

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
