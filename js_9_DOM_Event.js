//---------------------------Event Binding----------------------------
// -- 1.On one event we can perfrom multiple action E.g. Fun.
let loginbtn = document.querySelector("#loginbtn");
function raiseAlert() {
  alert("Hi....");
}

// Method2: Event Binding with JS (Best Practice)
loginbtn.onClick = raiseAlert;

// Method3: Event Binding with JS
console.log(loginbtn);
loginbtn.addEventListener("click", loggedIn);

function loggedIn() {
  alert("Successfully Login..");
}

// ---------------------------- Event Bubbling, Capturing and Propagation in JavaScript-------------------
/*
1. Event Bubbling  ( Z --> A)
 - When an event (like a click) happens on an element, it first triggers on that element and then moves up
   the DOM tree to its parent elements, all the way up to the root element.
-  BUTTON → P → DIV → FORM → BODY → HTML (bubbling phase).

   How Event Bubbling Works
       - When an event happens on an element, that event is first handled by the element itself.
       - Then, it "bubbles" up to its parent element, and the parent's event handler (if any) is triggered.
       - This continues all the way up to the root.  */

// Select the outer and inner divs
const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");
const btn = document.getElementById("pribtn");

// Add click event listener to the outer div
// btn.addEventListener("click", function (event) {
//   console.log("Button Clicked!");
//   // event.stopPropagation();     // You can stop the event from bubbling up if needed
// });

// // Add click event listener to the outer div
// outerDiv.addEventListener("click", function () {
//   console.log("Outer Div Clicked!");
// });

// // Add click event listener to the inner div
// innerDiv.addEventListener("click", function (event) {
//   console.log("Inner Div Clicked!");
// });

// document.body.addEventListener("click", () => {
//   console.log("Body Clicked!");
// });

/*
2. Event Capturing    ( A --> Z)
 - It is part of the event propagation model where events move from the root element down
   to the target element before any other event phase.

 - This model has three main phases:
    Capture phase – the event goes down from the root to the target element.
    Target phase – the event reaches the target element.
    Bubble phase – the event bubbles up from the target element back to the root.  

    How Event Capturing Works
    When you click on the Inner Btn , the event moves from outer → middle → inner -> btn, 
    following the capturing phase order. Each event handler triggers on its way down 
    to the target element.
*/

// Add click event listener to the Btn
btn.addEventListener(
  "click",
  function (event) {
    console.log("Button Clicked!");
  },
  true
);

// Add click event listener to the outer div
outerDiv.addEventListener(
  "click",
  function () {
    console.log("Outer Div Clicked!");
  },
  true
);

// Add click event listener to the inner div
innerDiv.addEventListener(
  "click",
  function (event) {
    console.log("Inner Div Clicked!");
  },
  false
);

document.body.addEventListener(
  "click",
  () => {
    console.log("Body Clicked!");
  },
  false
);

/* Output : 
Outer DIV - Capturing phase
Middle DIV - Capturing phase
Inner DIV - Capturing phase  */

// ---------------------------- Event Delegation in JavaScript-------------------
/* Event Delegation is that allows you to attach a single event listener to a parent element 
instead of adding individual listeners to each child element.  

How Event Delegation Works:
----------------------------------------
Instead of attaching an event listener to each element you want to track (e.g., every list item or button), you attach a single listener to a common ancestor (parent) element. 
When an event occurs, it bubbles up from the target element to its ancestor elements.
*/

// Normal way : Attach a  event listener to all elements
document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", function () {
    alert("Item clicked: " + item.textContent);
  });
});

//By Event Delegation : Attach a single event listener 
document.querySelector("myList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert("Item clicked: " + e.target.textContent);
  }
});
