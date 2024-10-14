const bodyTag = document.querySelector("body");
const boxList = document.querySelectorAll(".box");

function toggleBgColor(element) {
  console.log("ELe: ", element);
  const colorName = element.id;
  bodyTag.style.backgroundColor = colorName;
}


