// -------- Quest 1 --------
let mainScreen = document.querySelector(".main");
let cursorEle = document.querySelector("#cursor");
let isStatus = document.querySelector("h5");
let addBtn = document.querySelector("#add-frd-btn");
let flag = 0;
// let removeBtn = document.querySelector("#remove-btn");

addBtn.addEventListener("click", changeStatus);
// removeBtn.addEventListener("click", removeFrd);

function changeStatus() {
  if (flag === 0) {
    isStatus.textContent = "Friend";
    isStatus.style.color = "green";
    addBtn.textContent = "Remove";
    addBtn.style.backgroundColor = "#dadada";
    flag = 1;
  } else {
    isStatus.textContent = "Strange";
    isStatus.style.color = "red";
    flag = 0;
    addBtn.textContent = "Add Friend";
    addBtn.style.backgroundColor = "cadetblue";
  }
}

// function removeFrd() {
//   isStatus.textContent = "Strange";
//   isStatus.style.color = "red";
// }

// ---- Quest 2 ----
let profileImg = document.querySelector("img");
let icon = document.querySelector("#likeicon");
profileImg.addEventListener("dblclick", LikeProfile);

function LikeProfile() {
  icon.style = "transform: translate(-50%, -50%) scale(1)";
  setTimeout(() => {
    icon.style = "transform: translate(-50%, -50%) scale(0)";
  }, 2000);
}

// --- Ques 3  Customize Cursor
function changeCursor(event) {
  cursorEle.style.left = event.x + "px";
  cursorEle.style.top = event.y + "px";
}
mainScreen.addEventListener("mousemove", changeCursor);
