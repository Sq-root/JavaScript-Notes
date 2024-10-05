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

// One liners do not require braces/return.

//Method 2.1 - Arrow Function
const greet = () => "Hello Dosto";
console.log(greet());

//Just for to return any object require ()
const objData = () => ({ key: "value" });
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
//  this ==== > Hold Current context

// E.g. 1  this in Browser
console.log("This: ", this); // Output in Browser : global Obj (Window)
console.log("This: ", this); // Output by Node : Empty {}

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
