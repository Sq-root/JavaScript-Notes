// Coercion and Type Conversion

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
//    - Converts String, boolean,Number
