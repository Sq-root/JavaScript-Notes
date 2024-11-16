const hrsEle = document.querySelector("#timerhr");
const minEle = document.querySelector("#timermin");
const secEle = document.querySelector("#timersec");
const strtBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#pause-btn");
const resetBtn = document.querySelector("#reset-btn");

let hr = 0;
let min = 0;
let sec = 0;
let isTimerStopped = false;

strtBtn.addEventListener("click", () => {
  getActivateTimer();
});
stopBtn.addEventListener("click", () => {
  getStopTimer();
});
resetBtn.addEventListener("click", () => {
  getResetTimer();
});

function getStartTime() {
  if (isTimerStopped) {
    return;
  }

  sec = sec + 1;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hr++;
    }
  }

  displayTime(hr, min, sec);
}

function getStopTimer() {
  isTimerStopped = true;
}

function getActivateTimer() {
  isTimerStopped = false;
}

function getResetTimer() {
  sec = 0;
  min = 0;
  hr = 0;
  displayTime();
}

function displayTime() {
  hrsEle.innerHTML = hr <= 9 ? String("0" + hr) : String(hr);
  minEle.innerHTML = min <= 9 ? String("0" + min) : String(min);
  secEle.innerHTML = sec <= 9 ? String("0" + sec) : String(sec);
}

function main() {
  setInterval(getStartTime, 1000);
}

main();
