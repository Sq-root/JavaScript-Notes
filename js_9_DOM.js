// DOM
console.log("Documents of Object")

// Print all Document obj
let x = document
console.log(x)

// List all the tags
x = document.all
console.log(x)
// stores all the HTML tages in arr


// Get specific tag
x = document.scripts
console.log(x)

// Childern Node
// It also included TEXT node and comment node
// Text Node :- Indentation will count as a text code
console.log(document.body.childNodes)

// Childern Node
// Gives list of Only child nodes
console.log(document.body.children)


// Only First Child
console.log(document.body.firstElementChild)

// Only Last Child
// Here we can see that all the element are in form of ARR but this not an ARR we can't perform arr methods on it.
console.log(document.body.lastElementChild)

// Traverse the node (We can only iterate over this)
for (node of document.body.children) {
    console.log(node, typeof node)
}

// Siblings Node
const tag = document.body.children[1]
// Take particulat node
// Next Sibling
console.log(tag.nextElementSibling)
// Previous Siblings
console.log(tag.previousElementSibling)

// E.g Take Child and Sibling Element Node
const ulTag = document.body.children[1]
firstChild = ulTag.children[0]
sibli = firstChild.nextElementSibling
console.log(sibli)

// -------------------Table DOM Manipulation-----------------------
const tableTag = document.body.children[3]
// In one Table we can set Multiple tbody
console.log(tableTag.rows) // All rows

console.log(tableTag.tBodies[0]) // Gives all tbody tag

console.log(tableTag.tBodies[0].rows) // Within tbody all tr tags

console.log(tableTag.tBodies[0].rows[1].cells) // Within tr tages all td (Rows)

console.log(tableTag.tBodies[0].rows[0].textContent) // See All the content of the row
console.log(tableTag.tBodies[0].rows[1].textContent)
// See All the content of the row

// Change Style
console.log(tableTag.tBodies[0].rows[0].cells[0].style = "background-color:blue")
console.log(tableTag.tBodies[0].rows[0].cells[1].style = "background-color:blue")
console.log(tableTag.tBodies[0].rows[1].cells[0].style = "background-color:green")
console.log(tableTag.tBodies[0].rows[1].cells[1].style = "background-color:green")

// ---------Get element by ID---------
// When we give ID to any tags it become global element in document obj.
console.log(ulID.style = "background-color:green")
console.log(ulID)

let ul_tag = document.getElementById("ulID")
ulTag.style.backgroundColor = "red"
console.log(ul_tag)


// ---------Get element by Class---------
// When we give Class to any tags it become global element in document obj.
list_tag = document.getElementsByClassName("ul_class")
list_tag.style = "font-style:bold"
console.log(list_tag)


// ---------Get element by QUery Selector---------
// QUery Selector Means -- u can write CSS selectors
//Query Selector - It is a Static after this tag if has any id or class it won't take that element
list_tag = document.querySelectorAll(".ul_class") // for multiple tag
list_tag.style = "font-style:bold"
console.log(list_tag)

ul_tag = document.querySelector("#ulID") // for single tag
ul_tag.style = "font-style:bold"
console.log(ul_tag)


//Get user defined attributes 
console.log(ulID.getAttribute('valid'))  // get data of the attributes

console.log(ulID.setAttribute('status', 'Pending'))  // Set data of the attributes
console.log(ulID.getAttribute('status'))  // get data of the attributes

console.log(ulID.removeAttribute('status'))  // Remove attributes

console.log(ulID.attributes) // get all attributes of any Element(Tag)

//-------------Create and Add New Node Element in DOM
const newDiv = document.createElement('div') // give tag u want to create
  // it will add new NodeElement in DOM

const newHeading = document.createElement('h2') // give tag u want to create
body.append(newHeading)   // it will add new NodeElement in DOM
//Append text child element 
const text = document.createTextNode("Hello Guys!")
newHeading.appendChild(text)

//Replace node element
mainHeading.replaceWith(newHeading)

//Add eniter html logic in element
const listDiv = document.createElement("div")
listDiv.innerHTML = `<table>
                        <tr>
                            <td>1:1</td>
                            <td>2:1</td>
                            <td>3:1</td>
                            <td>4:1</td>
                            <td>5:1</td>
                        </tr>
                      </tabel>`
body.append(listDiv) 