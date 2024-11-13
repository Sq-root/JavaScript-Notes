let switchBtn = document.querySelector("#switchbtn");
let blubImgElement = document.querySelector(".bulbon");

function toggleSwitchState(event) {
  if (switchBtn.textContent === "Switch OFF") {
    switchBtn.textContent = "Switch ON";
    blubImgElement.setAttribute("src", "../assets/bulb_on.jpg");
  } else if (switchBtn.textContent === "Switch ON") {
    switchBtn.textContent = "Switch OFF";
    blubImgElement.setAttribute("src", "../assets/bulb_off.jpg");
  }
}

switchBtn.addEventListener("click", toggleSwitchState);
