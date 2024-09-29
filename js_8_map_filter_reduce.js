// ---------------------Map -----------------
// This time of function is used to transform the arr like
// to apply logic on individual element of arr and resultant it will create new arr.

const arr = [1, 2, 3, 4, 5];

// E.g.1 Double/Triple the value of arr
function double_value(x) {
  return x * 2;
}

function triple_value(x) {
  return x * 3;
}

const output_arr = arr.map(double_value); // it will call the func for every element of arr
console.log(output_arr);

const output_arr1 = arr.map(triple_value); // it will call the func for every element of arr
console.log(output_arr1);

// Method 2
const output_arr2 = arr.map(function binCon(x) {
  return x.toString(2);
});
console.log(output_arr2);

// Method 3
// This annoymus function don't require name of fun
const data1 = arr.map((ele) => ele.toString(2));
console.log(data1);

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]

const usr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = usr.map((user) => user.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// ---------------------Filter-----------------
// -- It is used to filter the ele of arr.

// E.g. Find odd no
arr1 = [12, 34, 23, 56, 45, 67];

function isOdd(ele) {
  return ele % 2;
}

const op = arr1.filter(isOdd);
console.log(op);

// E.g. Find Even
function isEven(x) {
  return !(x % 2);
}

// MEthod 2
const data2 = arr.filter((x) => !(x % 2));
console.log(data2);

// E.g. find value greater than 30
console.log(arr1.filter((x) => x > 30));

// ---------------------Reduce-----------------
// -- It is used to sum of all elements.
// Reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// Reduce passes two arguments one function(which includes accumulator and initial value as argument itself)
// and another initial value of accumulator.

// Question

const users = [
  {
    firstName: "akshay",
    lastName: "lad",
    age: 26,
  },
  {
    firstName: "donald",
    lastName: "trump",
    age: 75,
  },
  {
    firstName: "elon",
    lastName: "musk",
    age: 50,
  },
  {
    firstName: "virat",
    lastName: "kohli",
    age: 26,
  },
];

//Get all the users Full name
// const userName = users.map(userdata => userdata.firstName + " " + userdata.lastName)
// console.log(userName)

//Age above 40
const userName = users.filter((userdata) => userdata.age > 40);
console.log(userName); //will get only those obj.

//Age above 40
const userName = users
  .filter((userdata) => userdata.age > 40)
  .map((x) => x.firstName + " " + x.lastName);
console.log(userName); //will get only those obj.

//Age < 30
const userName = users
  .filter((userdata) => userdata.age < 40)
  .map((x) => x.firstName);
console.log(userName); //will get only those obj.
