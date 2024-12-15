let arr = [1, 2, 3n, "4", true, 6.7]; //Hold any datatypes
console.log(arr);

console.log(arr[1]);
console.log(arr[2]);

// It won't throw any kind of error if index is not present it will give Undefined
console.log(arr[100]);

let x = arr[100];
console.log(x);

//Once arr is declared we can add the new data
arr[6] = 100;
console.log(arr);

// Let if we add data in any random postion till that position data will be blank
arr[60] = 1000;
console.log(arr);
console.log(arr.length); //len will be 61

for (let i in arr) {
  //return index
  console.log(arr[i]);
}

// It will only print those have value and other postion it will print undefined.
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

///Methods
let list = [91, 29, 34, 54, 23, 4];
let strgList = list.toString(); // Convert arr to String
console.log(strgList); // It is string

// Array splice()
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// index (current postion), how many from index , (add new Member....i,i1....)
list.splice(2, 2, 134);
console.log("Splice Method: ", list);

let lsit1 = list.join("_"); // Convert arr to String and add other given data
console.log(lsit1, typeof lsit1);

console.log(list.pop()); // it will remove last element from og. arr

console.log(list.shift());

// Sort the arr
// - Default It will sort the data as alphabetical order (Means dictornary wise).
// Provide optional Comparision Function to set sorting type.
console.log(list.sort()); // by default It will sort the data as alphabetical order (Means dictornary wise)

//Sort by Ascending order
// Create the Compare function
let compare = (a, b) => {
  return a - b;
};

console.log(list.sort(compare));

//Loop Over Arr
for (let j = 0; j < list.length; j++) {
  console.log(list[j]);
}

//for each loop
// Not work on HTML Obj..
list.forEach((value) => {
  console.log(value * value);
});

//For Of
for (let j of list) {
  console.log(j); // wil return value of the arr
}

//For in
for (let j in list) {
  console.log(j); // wil return index of the arr
}

//---------------------------------------------------------------- Object Properties ----------------------------------------------------
/*1. Object.freeze()
 What it does:  (No CRUD Operations)
    1. Can't add new properties.
    2. Can't delete existing properties.
    3. Can't modify existing properties.
*/

const obj = { name: "Alice", age: 25 };

// Freeze the object
Object.freeze(obj);

// Modifying the property
obj.name = "Dhoni"; // Won't throw an error
console.log(obj.name); // Alice

delete obj.name; // Cannot delete properties
obj.city = "Paris"; // Cannot add new properties

console.log(obj); // Output: { name: "Alice", age: 25 }

// If the object has nested objects, those inner objects are still mutable unless explicitly frozen.
const obj = {
  name: "Alice",
  age: 25,
  data: {
    Grade: "A",
    gender: "Male",
  },
};

obj.data.Grade = "B";

console.log(obj); // Output: { name: 'Alice', age: 25, data: { Grade: 'B', gender: 'Male' } }
