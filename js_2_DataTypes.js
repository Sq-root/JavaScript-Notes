// --------------------- DataTypes-----------------------------------
/* 1. Immutable Data Types
An immutable value is one that cannot be changed after it has been created.
    If you try to change an immutable value, a new value will be created instead of modifying the original one.
    In JavaScript, the following are immutable data types:
Primitive types : (i.e., number, string, boolean, null, undefined, symbol, bigint). */

// 1. Primitive Data Types:
/* a. Number : Represents numeric values, both integers and floating-point numbers. */
let age = 25; // integer
let price = 99.99; // floating point

/* b. String : Represents a sequence of characters enclosed in quotes (single, double, or backticks). */
const names = "John Doe"; // double quotes
let greeting = "Hello"; // single quotes
let message = `Hi, ${names}!`; // template literals

/* c. Boolean :  Represents either true or false. */
let isStudent = true;
let hasLicense = false;

/* d. BigInt
Represents integers with arbitrary precision.
It can handle numbers larger than what Number can represent. */
let largeNumber = 1234567890123456789012345678901234567890n;

/* e. Symbol : Used to create unique identifiers(key). 
It used to create unique and immutable values that can be used as keys for object properties
    a.Uniqueness: Every symbol is unique, even if two symbols have the same description.
    b.Non-enumerable: Symbols are not included in regular property enumeration (e.g., using for...in loops).
    c.Immutable: Once created, a symbol’s value cannot be changed.
*/

let id = Symbol("id");
console.log("Symbole: ", id);

let sym1 = Symbol("id1");
let sym2 = Symbol("id1");

console.log(sym1 === sym2); // Output: false (they are different symbols)

for (let key in user) {
  console.log(key); // Output: name, age (ssn and employeeId won't show up)
}

/* f. Undefined :A variable that has been declared but has not been assigned a value 
has the value undefined.  */
let x;
console.log(x); // undefined

/*g. Null : Represents an intentional absence of any object value. 
    - It is used to explicitly indicate "no value" or "empty". */
let emptyValue = null;
console.log(emptyValue); // null

let person = null; // Explicitly saying "person has no value"
let job; // Job is declared but not defined, so it's `undefined`

console.log(person); // Output: null
console.log(job); // Output: undefined

person = { name: "Alex" };
job = "Engineer";

console.log(person); // Output: { name: 'Alex' }
console.log(job); // Output: Engineer
