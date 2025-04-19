# What is `this` in JavaScript?

- In JavaScript, `this` is a special keyword that **refers to the object that is currently executing the code**.

### *`this` keyword works different in `strict` mode and `non-strict` mode* 
### 1. Global Context

- `this` referring to **global object** when it runs in **Global Scope**.
- **In browsers**: `window`
- **In Node.js**: `global`

```
console.log(this); // In browser → window object
```
### 2. Inside a Regular Function
- `this` refers to the **global object** (or `undefined` in strict mode).
- Inside Function value of `this` is depend on `strict` and `non-strict`

```
function showThis() {
  console.log(this);
}
showThis(); // window (in browser)

```