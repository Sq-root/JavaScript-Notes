## *`Everthing in JS is Drives from Object it means everything in JS is Object.`*
## 1. Primitive Types (Stored Directly in Stack Memory)

**Primitive:** Like a note on a paper. You can read it, but can’t change what the note means.
Primitive values in JavaScript include:

- `Number` (e.g., `10`, `3.14`)
- `String` (e.g., `"hello"`)
- `Boolean` (`true`, `false`)
- `null`, `undefined`
- `Symbol`, `BigInt`
### **How They Are Stored?**

- Stored **directly** in **stack memory**.
- Stored by **value**, meaning a new copy is made when assigned to another variable.
- Not objects, No methods or properties
- They **do not** have prototypes, but JS can **temporarily wrap** them in object wrappers
- **Same behavior as C/C++ and Java for primitive types (values are copied directly).**

```
var a = 10;  
var b = a; // Copy of 'a' is assigned to 'b'

a = 20; // Changing 'a' does not affect 'b'
console.log(b); // 10

```

## 2. Objects, Arrays, and Functions (Stored in Heap Memory)

- Non-primitive types (objects, arrays, functions) are stored **by reference** in **heap memory**.
- **Object:** Like a box with multiple labeled drawers — you can open, modify, or add new things.
### **How They Are Stored?**

- The actual **object is stored in heap memory**.
- Stored by **reference**
- When assigned to another variable, only the **reference is copied, not the actual data**.
- Have a prototype chain

```
var obj1 = { name: "Alice" };
var obj2 = obj1; // Reference to same object

obj1.name = "Bob"; 
console.log(obj2.name); // "Bob" (both point to same object)
```

## What is Boxing (Autoboxing)?

- Boxing is the process where **JavaScript automatically wraps a primitive value** (like a string or number) **inside its corresponding object wrapper** (like `String`, `Number`, etc.).
- Boxing not happen to `null` & `undefined`.
### *Primitive datatype don't have properties and methods like object.*
### Example 1 :  Use Method in Primitive Datatype

```
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"

const num = 42;
console.log(num.toFixed(2));   // "42.00"

// Internally: new Number(42).toFixed(2)

const isTrue = true;
console.log(isTrue.toString()); // "true"

// Internally: new Boolean(true).toString()

```

JavaScript does this behind the scenes:

1. Detects `"hello"` is a **primitive string**
2. Internally creates: `new String("hello")`
3. Calls: `String.prototype.toUpperCase()` on the object
4. Destroys the temporary object wrapper
5. Returns result: `"HELLO"`
#### Applicable Types for Boxing

|Primitive Type|Wrapper Object|
|---|---|
|`string`|`String`|
|`number`|`Number`|
|`boolean`|`Boolean`|
## What is a Prototype in JavaScript?

- **Every object in JavaScript** has a built-in property, which is called its **prototype**.
- In JavaScript, every object has an internal property called `[[Prototype]]`accessible via `__proto__`. 
- This property allows objects to inherit methods and properties from other objects.

*E.g In Below given example . If you type the object's name _followed by a period_ into the console, like `myObject.` we can see `city` and `greet` with have lot of other properties also*.

```
const myObject = {  
	city: "Madrid",  
	greet() {  
		console.log(`Greetings from ${this.city}`);  
	},  
};  
  
myObject.greet(); // Greetings from Madrid
```

![[Pasted image 20250427151450.png | 600]]
## What is Prototype Chain?

- The **Prototype Chain** is the mechanism JavaScript uses to look up properties and methods on objects.  If a property/method doesn’t exist directly on the object, JavaScript looks up its **`[[Prototype]]`** (aka `__proto__`) and continues until it either:
	- finds the property/method
	- or reaches `null` (end of the chain)
### Example 1 :  Object Method Chain 

```
const person = {
  greet: function () {
    return `Hi, I'm ${this.name}`;
  }
};

const user = {
  name: "Neha"
};

user.__proto__ = person;

console.log(user.greet()); // "Hi, I'm Neha"
```

- `user` doesn't have `greet()`
- JavaScript checks `user.__proto__` → finds `greet()` in `person`
- `this` inside `greet()` still refers to `user` (not `person`)
### Example 2 : Prototype Chain Levels

```
const arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null

```

## What is Prototype Inheritance?

- **Prototype inheritance** means that **one object inherits properties and methods from another via its prototype**.
- The prototype is itself an object, so the prototype will have its own prototype, making what’s called a prototype chain.
### Example 1 Properties Inheritance

- Here `result` object inherits properties and methods of `eduDetails` & `studetails` from another via its prototype.

```
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

console.log(result.publishResult());
//Output : Congratulation Gaurav you got 9.4

```

![Prototype Inheritance](./ref_img/Pasted%20image%2020250427174022.png "ProtoType")