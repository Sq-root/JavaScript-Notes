//Regular Function

function display(){
    console.log("Hello Guys")
}

display();  


// Method 1 - Arrow Function
const print = function (){
    console.log("Hello Guys")
}

print();  

//Method 2 - Arrow Function
const data = () => {
    return "Good Mrng"
}
console.log(data()) 

// One liners do not require braces/return.

//Method 2.1 - Arrow Function
const greet = () => "Hello Dosto";
console.log(greet())

//Just for to return any object require ()
const objData = () => ( { key : "value" } )
console.log(objData())
 
//Pass Arguments 
const greet_User = (user) => {
    return "Hello " + user
}

console.log(greet_User("Virat"))

//Just for one Arg. / one Statement
const ask_User_x = name => "How r u " + name + "?"
console.log(ask_User_x("Gaurav"))