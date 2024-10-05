//Regular Function

function display() {
  console.log("Hello Guys");
}

display();

// Method 1 - Arrow Function
const print = function () {
  console.log("Hello Guys");
};

print();

//Method 2 - Arrow Function
const data = () => {
  return "Good Mrng";
};
console.log(data());

// One liners do not require braces/return (Implicite Return).

//Method 2.1 - Arrow Function
const greet = () => "Hello Dosto";
console.log(greet());

//No need to write return
const objData = () => ({ key: "value" }); // Use this to return Obj
console.log(objData());

//Pass Arguments
const greet_User = (user) => {
  return "Hello " + user;
};

console.log(greet_User("Virat"));

//Just for one Arg. / one Statement
const ask_User_x = (name) => "How r u " + name + "?";
console.log(ask_User_x("Gaurav"));

/////////////////////////////////// this Keyword ////////////////////////////
/*  In JavaScript, the this keyword always refers to an object.  
    this ==== > Hold Current context
*/

// E.g. 1  this in Browser
console.log("This: ", this); // Output in Browser : global Obj (Window)
console.log("This: ", this); // Output by Node : Empty {}

// Regualr Fun
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    return this;
  },
};

console.log("this in object method", person.getThis()); // Output : person Obj

//Arrow Fun
const person1 = {
  name: "Pedro",
  surname: "Sanchez",
  sayName: () => this.name + " " + this.surname,
};

console.log("This in Arrow fun : ", person1.sayName()); // Undefined

function getData() {
  console.log("");
  console.log("This in fun: ", this);
}

getData();

// this => only works for obj , class
function getNewData() {
  const name = "Gaurav ";
  console.log("");
  console.log("This in fun: ", this.name); // Output : undefined
}

getNewData();

const getDone = () => {
  const name = "Gaurav ";
  console.log("This in Arrow fun : ", this.name); // Output : undefined
};

getDone();
