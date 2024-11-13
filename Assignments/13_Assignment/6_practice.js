// let x = 20;
// let logger = () => {
//   console.log(x);
// };

// function print(logger) {
//   console.log("Before print");
//   setTimeout(logger, 0);
//   console.log("After print");
// }

// print(logger); // Outputs: 20

// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i); //
// }

function setTimer() {
  for (var i = 1; i <= 10; i++) {
    function logger(x) {
      setTimeout(() => {
        console.log(x);
      }, 1000 * x); //
    }
    logger(i);
  }
}

setTimer();
