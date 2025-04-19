// Coercion and Type Conversion
// Ref: https://medium.com/@riad.ennaim/type-coercion-in-javascript-f410dbecf45a#:~:text=Implicit%20type%20coercion%20is%20the,To%20boolean

// Type Conversion :
// Convert One DataType to Another DataType

//--------------  Example 1 -----------------
// let str = "123";
// let num = Number(str); // Explicitly converting string to number

// console.log(num); // 123
// console.log(typeof num); // number

// =======================================================================================

// Type Coercion :
// Convert One DataType to Another DataType by using  comparison or operations.

// 1. Explicit Type Coercion
// ------------------------------------------------------------------------------
//   a. String Conversion:
//      String(undefined)    // 'undefined'
//      String(null)         // 'null'
//      String(true)         // 'true'
//      String(false)        // 'false'
//      String(-12.3)        // '-12.3'
//      String('abc')        // 'abc'

//  b. Boolean Conversion
//    - All values in JavaScript have a truthy or falsy value.
//       Boolean(undefined)    // false
//       Boolean(null)         // false
//       Boolean(NaN)          // false
//       Boolean('')           // false
//       Boolean(0)            // false
//       Boolean(-0)           // false
//       Boolean(false)        // false

//  c. Numeric Conversion
//  - convert values to a number
//       Number(undefined)    // NaN
//       Number(null)         // 0
//       Number(true)         // 1
//       Number(false)        // 0
//       Number("-12.3")      // -12.3
//       Number("")           // 0
//       Number("\n")         // 0
//       Number("abc")        // NaN
//       Number(123)          // 123

// 2. Implicit Type Coercion (Automatic Conversion)
//    - JavaScript automatically converts one type to another when needed.
//    - JavaScript follows a set of rules to prioritize one type over another.
//    - String
//      Number
//      Boolean

//--------  Everything gets converted to either a number or a string ultimately.------------------

// 1. Operations that prefer numbers
//   *       // multiply
//   %       // modulo
//   ++      // prefix (or postfix) operators
//   -       // Minus

//   console.log("5" - 2);        // 3 → "5" becomes 5
//   console.log("6" * "2");      // 12 → both strings become numbers
//   console.log("10" / 2);       // 5 → "10" becomes 10
//   console.log(true * 5);       // 5 → true → 1
//   console.log(null - 1);       // -1 → null → 0
//   console.log(undefined + 1);  // NaN → undefined → NaN

// 2. Operations that prefer String
//   +        //   does string if either operand is string.
//   ${}      //  Template Literal

//   console.log("Hello" + 123);        // "Hello123"
//   console.log(123 + " world");       // "123 world"
//   console.log("5" + true);           // "5true"
//   console.log(null + "test");        // "nulltest"
//   const name = "Gaurav";
//   console.log(`Hello, ${name}!`);    // "Hello, Gaurav!"
//   console.log(`Score: ${100}`);      // "Score: 100"
//   console.log(`Active: ${true}`);    // "Active: true"

//🔹 Comparison Operators (<, >, <=, >=)
// -------------------------------------------------------------
// Rule of thumb:
//       If both operands are strings, string comparison happens.
//       Else, coerce to numbers.
// Examples:
//   "5" > 3         // true → "5" → 5
//   "10" > "2"      // false → lexicographic
//   true < 2        // true → 1 < 2
//   null >= 0       // true → null → 0
//   undefined > 0   // false → undefined → NaN

// 🔹 Equality Operators
// -------------------------------------------------------------
// 5 == "5"         // true
// // "5" is string → coerced to number → 5 == 5 → true

// false == 0       // true
// // false → 0 → 0 == 0 → true

// true == 1        // true
// // true → 1 → 1 == 1 → true

// null == undefined // true
// // special case! only true for this combo

// "0" == false     // true
// // "0" → number 0, false → 0 → 0 == 0 → true

// "" == 0          // true
// // "" → 0, so 0 == 0 → true

//🔹 If one is an object, and the other is a primitive (string/number/boolean)
// -------------------------------------------------------------
// try converting the object to a primitive
// JavaScript does this by calling:
//       .valueOf()
//       .toString()

// [] == false      // true
// // [] → "" → 0, false → 0 → 0 == 0 → true

// [] == 0          // true
// // [] → "" → 0 → 0 == 0 → true

// [1] == "1"       // true
// // [1] → "1", string "1" == "1" → true

// [1,2] == "1,2"   // true
// // [1,2].toString() = "1,2"

// What is Coercion in Non-Primitive Types?
// ========================================================================================================================================
//  When JavaScript encounters a non-primitive type (like an array [] or object {})
//  in a context where it expects a primitive, it uses an internal process called ToPrimitive.

// Steps JS uses to coerce an object or array:
// Check if already primitive → if yes, use it
//     If not:
//          Try calling .valueOf()
//          If it returns a primitive → use that
//     Else
//          try .toString()
//     If still not primitive → throw error
// Depending on the context (number or string), JavaScript prioritizes either valueOf() or toString()

// SPECIAL CASES (MUST-KNOW QUIRKS)
//   [] + []	""	Both become strings → ""
//   [] + {}	"[object Object]"	Array → "", Object → string
//   {} + []	0	Interpreted as block + array
//   true + true	2	1 + 1
//   false == 0	true	Coercion!
//   [] == 0	true	Array → number → 0
//   "" == 0	true	Both become 0
//   "[1,2]" + "3" → "1,23"

// Convert Anything to toString()
// --------------------------------------------
// toString()

// let num = 123;
// console.log(num.toString()); // "123"

// let arr = [1, 2, 3,4,5,6,7,8];
// console.log(arr.toString()); // "1,2,3,4,5,6,7,8"

// let obj = { a: 1 };
// console.log(obj.toString()); // "[object Object]"

// valueOf() in JavaScript
//valueOf() is mostly useful in custom objects where you want to control how they behave in arithmetic or type coercion
