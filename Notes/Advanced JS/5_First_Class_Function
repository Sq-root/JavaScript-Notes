# What are First-Class Functions?

- If you can treat a function just like a value (like a number or string), it is a **first-class function**.
- **That means you can**:
	- Assign a function to a variable 
	- Pass a function as an argument 
	- Return a function from another function 
### What is Function Statement (Function Declaration)

- Just like Function declare in its called Function Statement or Declaration
```
function greet() {
  console.log("Hello!");
}

const sayHi = greet; // assign function to variable

sayHi(); // Hello!
```

### What is Function Expression

- In JS, we can assign function to any of variable which evaluated at run time it's called **function expression**.
```
// Method 1 - Arrow Function
const print = () => {
  console.log("Hello Guys");
};

print();

//Method 2 Anonymous Function
const print1 = function () {
  console.log("Hello Guys");
};

print1();
```

 **Function Statement vs  Function Expression** 
 - **F.S.** are Hoisted bcuz during execution context it's treated as just variable which store whole fun. body. We can call this fun. before declaration
 - **F.E.** are also hoisted but it treated as Variable which has value undefined u can't call this function before declaration.

# What is a Higher-Order Function?
- Takes another function as an argument or Returns a function
### Example 1 : Higher Order Function

- Here, you are repeating logic — not flexible, and you'll need to write many greeting functions for each case.
```
function greetFormal(name) {
  return `Good morning, ${name}.`;
}

function greetCasual(name) {
  return `Hey ${name}!`;
}

console.log(greetFormal("Neha"));   // Good morning, Neha.
console.log(greetCasual("Neha"));   // Hey Neha!
```

- Let’s improve it by **writing a Higher-Order Function** that accepts the style as a callback.

```
function greetUser(name, greetingFunction) {
  return greetingFunction(name);
}

function formal(name) {
  return `Good morning, ${name}.`;
}

function casual(name) {
  return `Hey ${name}!`;
}

console.log(greetUser("Neha", formal)); // Good morning, Neha.
console.log(greetUser("Neha", casual)); // Hey Neha!

```

## Built-in Higher-Order Functions in JavaScript:

| Method       | Description                      |
| ------------ | -------------------------------- |
| `.map()`     | Transforms each element          |
| `.filter()`  | Filters elements based on a test |
| `.reduce()`  | Reduces array to a single value  |
| `.forEach()` | Loops through array (no return)  |
