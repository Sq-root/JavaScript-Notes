//Child elment
console.log(document.body.children)

//Convert HTML collection into ARR
let arr = Array.from(document.body.children)
console.log(arr)

//Travser the Arr
for (let ele of arr){
    console.log(ele)
}

console.log(arr.length)

console.log(document.body.childNodes)

console.log("First Child",document.body.firstChild)
console.log("First Child",document.body.firstElementChild.style="background-color:green")


console.log("Last Child",document.body.lastChild)
console.log("Last Child",document.body.lastElementChild.style="background-color:blue")

// let tableTag = document.body.children[1]
// console.log(tableTag)
// console.log(tableTag.caption.textContent)

// console.log(tableTag.tBodies[0].rows[0].textContent)

let ulColor = document.querySelectorAll(".colorName")
console.log(ulColor)
ulColor[0].style="background-color:blue"

// let ctitles = document.querySelectorAll(".card-title")
// ctitles[0].style.color = "blue"
// ctitles[1].style.color = "red"
// ctitles[2].style.color = "g"
// console.log(ctitles)
