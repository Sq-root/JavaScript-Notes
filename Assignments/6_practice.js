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

function x() {
  let x = 20;
  function y(params) {
    params = 200;
    console.log(params);
  }
  y(x);
  console.log(x);
}

x();
