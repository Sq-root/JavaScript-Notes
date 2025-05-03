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
// function testVarShadowing() {
//   var value = "Outer scope";

//   if (true) {
//       var value = "Inner block scope";
//       console.log("Inside block:", value);  // Outputs: Inner block scope
//   }

//   console.log("Outside block:", value);      // Also outputs: Inner block scope
// }

// testVarShadowing();

// function counter() {
//   let count = 0;

//   const incCount = function () {
//     count++;
//     return count;
//   };

//   const decCount = function () {
//     count--;
//     return count;
//   };

//   return { increment: incCount, decrement: decCount };
// }

// const counter1 = counter();
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.decrement());

// const conu2 = counter();
// console.log(conu2.increment());
// console.log(conu2.increment());
// console.log(conu2.decrement());

// function countClick() {
//   let count = 0;
//   document.getElementById("count").addEventListener("click", () => {
//     console.log("Click Me", ++count);
//   });
// }

// countClick();

function transformValue(values, logic) {
  const output = [];
  for (let index = 0; index < values.length; index++) {
    output.push(logic(values[index]));
  }
  return output;
}

const arr = [1, 21, 3, 4, 6, 7, 8];
const sqNo = (no) => {
  if (no > 2) {
    return no;
  }
};

console.log(transformValue(arr, sqNo));

const usr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "qwe", age: 25 },
  { name: "Alex", age: 35 },
];

const nameArr = usr.map((user) => {
  return user.name;
});

console.log("s", nameArr);

console.log(
  usr.reduce((str, curr) => {
    return (str += curr.name);
  }, "")
);

console.log(
  arr.reduce((max, curr) => {
    return max > curr ? max : curr;
  }, -134)
);

console.log(
  usr.reduce((userObj, curr) => {
    if (curr.age in userObj) {
      userObj[curr.age] = userObj[curr.age] + 1;
    } else {
      userObj[curr.age] = 1;
    }
    return userObj;
  }, {})
);

const userinfo = {
  name: "Alice", // string
  age: 25, // number
  isMember: true, // boolean
  score: null, // null
  country: undefined, // undefined
  id: Symbol("user-id"), // symbol
  bigCount: 9007199254740991n, // bigint
};

console.log(userinfo["aa"]);

function print() {
  console.log(this.userinfo);
}

print();

function getAnimal(food1, food2, food3) {
  console.log(
    `${this.name} is ${this.mealPreference}, and likes to eat ${food1}, ${food2}, and ${food3}`
  );
}

function getName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

const student1 = {
  firstName: "Rishav",
  lastName: "Pandey",
};
const myName = getName.bind(student1);
myName();

function outerThis(e) {
  console.log(e.target);
}

const btn = document.getElementById("btn");

const parent = {
  greet() {
    return "Hello";
  },
};

const child = Object.create(parent);
console.log(child);

const studetails = {
  name: "Gaurav",
};

const eduDetails = {
  class: "B.E",
  course: "IT",
  __proto__: studetails,
};

const result = {
  cgpa: 9.4,
  __proto__: eduDetails,
  publishResult() {
    console.log(`Congratulation ${this.name} you got ${this.cgpa}`);
  },
};

console.log(result);

// Base Class
class Animal {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} is Animal.`);
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived Class
class Dog extends Animal {
  speak() {
    console.log(`${this.name} bark.`);
  }
}

const puppy = new Dog("puppy");
const tommy = new Dog("tommy");

