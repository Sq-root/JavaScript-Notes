// DOM
console.log("Documents of Object");

// Print all Document obj
let x = document;
console.log(x);

// Print main HTML (Root) Element
let y = document.documentElement;
console.log(y);

// List all the tags
x = document.all;
console.log(x);
// stores all the HTML tages in arr

// Get specific tag
x = document.scripts;
console.log(x);

/* Types of Node : 
1. Text Node  (All text and indentation(space))
2. Element Node
3. Comment Node */

// Childern Node
// It also included TEXT node and comment node
// Text Node :- Indentation will count as a text code
console.log("All Child Node: ", document.body.childNodes);

// Childern Node
// Gives list of Only child Element nodes
console.log("Only Element Child Node: ", document.body.children);

// Only First Child
console.log(document.body.firstElementChild);

// Only Last Child
// Here we can see that all the element are in form of ARR
// but this not an ARR we can't perform arr methods on it.
console.log(document.body.lastElementChild);

// Traverse the node (We can only iterate over this)
for (node of document.body.children) {
  console.log(node, typeof node);
}

// This all are in HTMLCollection Obj not Array
// Convert it into ARRAY
const ele = Array.from(document.body.children);
console.log(ele);

// Siblings Node
const tag = document.body.children[1];
// Take particulat node
// Next Sibling
console.log("nextElementSibling", tag.nextElementSibling);
// Previous Siblings
console.log("previousElementSibling", tag.previousElementSibling);

// E.g Take Child and Sibling Element Node
let ulTag = document.body.children[1];
firstChild = ulTag.children[0];
sibli = firstChild.nextElementSibling;
console.log(sibli);

//Parent ELement
parent = ulTag.parentElement; // It give Parent Element Only lese nUll
console.log("UL Tag Parent Ele", parent);
parent = ulTag.parentNode; // It give Parent Node (Text, Comment, Ele)
console.log("UL Tag Parent Node Element: ", parent);

// -------------------Table DOM Manipulation-----------------------
const tableTag = document.body.children[2];
// In one Table we can set Multiple tbody
console.log(tableTag.rows); // All rows

console.log(tableTag.tBodies[0]); // Gives all tbody tag

console.log(tableTag.tBodies[0].rows); // Within tbody all tr tags

console.log(tableTag.tBodies[0].rows[1].cells); // Within tr tages all td (Rows)

console.log(tableTag.tBodies[0].rows[0].textContent); // See All the content of the row
console.log(tableTag.tBodies[0].rows[1].textContent);
// See All the content of the row

// Change Style
console.log(
  (tableTag.tBodies[0].rows[0].cells[0].style = "background-color:blue")
);
console.log(
  (tableTag.tBodies[0].rows[0].cells[1].style = "background-color:blue")
);
console.log(
  (tableTag.tBodies[0].rows[1].cells[0].style = "background-color:green")
);
console.log(
  (tableTag.tBodies[0].rows[1].cells[1].style = "background-color:green")
);

// ---------Get element by ID---------
// Live Element Selector work at run time always give Collection of ele
// When we give ID to any element it become global element in document obj.
console.log((ulID.style = "background-color:green"));
console.log(ulID);

let ul_tag = document.getElementById("ulID");
ulTag.style.backgroundColor = "red";
console.log(ul_tag);

// ---------Get element by Class---------
// When we give Class to any tags it become global element in document obj.
list_tag = document.getElementsByClassName("ul_class");
list_tag.style = "font-style:bold";
console.log(list_tag);

// ---------Get element by Tag Name---------
// When we give Class to any tags it become global element in document obj.
allLiTag = document.getElementsByTagName("li");
console.log("Tag Name: ", allLiTag);

// ---------Get element by Query Selector---------
// QUery Selector Means -- u can write CSS selectors
//Query Selector - It is a Static after this tag if has any id or class it won't take that element
list_tag = document.querySelectorAll(".ul_tag"); // for multiple tag
list_tag.style = "font-style:bold";
console.log("querySelectorAll: ", list_tag);

ul_tag = document.querySelector("#ulID"); // for single tag
ul_tag.style = "font-style:bold";
console.log("querySelector:", ul_tag);

//Get user defined attributes and Inbuit
console.log(ulID.getAttribute("valid")); // get data of the attributes

console.log(ulID.setAttribute("status", "Pending")); // Set data of the attributes
console.log(ulID.getAttribute("status")); // get data of the attributes

console.log(ulID.removeAttribute("status")); // Remove attributes

console.log(ulID.attributes); // Get all attributes of any Element(Tag)

//-------------Create and Add New Node Element in DOM
const newDiv = document.createElement("div"); // give tag u want to create
// it will add new NodeElement in DOM

const newHeading = document.createElement("h2"); // give tag u want to create
/*  body.append = New Element add after it.  
    body.after = New Element add after it. 
    body.prepend = New Element add before it.  
    body.before = New Element add before it.  
      */
// body.append(newHeading); // it will add new NodeElement Next to its postion in DOM
//Append text child element
const text = document.createTextNode("Hello Guys!");
newHeading.appendChild(text);
//--------------------- or ---------------------
newHeading.textContent = "Namaste World !"; //Append text child element

//Replace node element
mainHeading.replaceWith(newHeading);

//Add eniter html logic in element
const listDiv = document.createElement("div");
listDiv.innerHTML = `<table>
                        <tr>
                            <td>1:1</td>
                            <td>2:1</td>
                            <td>3:1</td>
                            <td>4:1</td>
                            <td>5:1</td>
                        </tr>
                      </tabel>`; //Is used to Create entire Element
body.append(listDiv);

//----------------------------Inner HTML----------------------------
// The innerHTML property returns:
// The text content of the element, including all spacing and inner HTML tags.

/* HTML Code 
<p id="myP"> This element has extra spacing and contains <span>a span element</span>.</p>
*/

function getinnerText() {
  let text = document.getElementById("myP").innerText;
  document.getElementById("demo").innerText = text;
}

function getinnerHTML() {
  let text = document.getElementById("myP").innerHTML;
  document.getElementById("demo").innerText = text;
}

function gettextContent() {
  let text = document.getElementById("myP").textContent;
  document.getElementById("demo").innerText = text;
}

// The Differences Between innerText, innerHTML and textContent
/* 1. innerText
  Displays visible text only (ignores hidden text).
  Renders CSS styling (e.g., doesn’t include text from display: none).
  Triggers reflow (can be slower for large DOM updates).
2. innerHTML
  Gets or sets the HTML content with text (can include tags).
  Parses HTML, so you can add or retrieve nested elements.
  Risky for user inputs (prone to XSS attacks if not sanitized).
3. textContent
  Retrieves or sets all text content, ignoring any HTML tags.
  Ignores CSS styling, so it includes hidden elements.
  Faster than innerText since it doesn’t trigger reflow and ignores styling.  */
