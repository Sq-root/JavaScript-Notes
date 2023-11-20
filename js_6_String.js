// We can declare the string 3 ways

// Using double Quote
let x = "Gaurav";
console.log(x.length);

// Using Single Quote
let y = "Davda";
console.log(y[0]);
console.log(y[2]);
console.log(y[4]);

// Template Literals
// - It used when we want to make variable a dyanmic
let name = "Gaurav";
let role = "Software developer";
let strng = `${name} is ${role}`;
console.log(strng);

let data = `account is 'z14xx'`;
console.log(data);

//Strings Methonds
console.log(name.slice(2, 5)); // (start,end)  end is Exclusive

//Get strng Char one by one
console.log(name[0]);
console.log(name[1]);

// iterate over string
for (let chr of name) {
  console.log(chr);
}

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

//Question
console.log('Gaurav"'.length);

document.body.h1 = "Gaurav";
