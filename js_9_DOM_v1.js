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

   How Event Bubbling Works
       - When an event happens on an element, that event is first handled by the element itself.
       - Then, it "bubbles" up to its parent element, and the parent's event handler (if any) is triggered.
       - This continues all the way up to the root.  */

document
  .getElementsByClassName("container")[0]
  .addEventListener("click", () => {
    console.log("Outer Container Click");
  });

document.getElementsByClassName("box")[0].addEventListener("click", () => {
  console.log("Inner Box Click");
});

document.getElementById("btn2").addEventListener("click", () => {
  console.log("Inner Btn Click");
});
