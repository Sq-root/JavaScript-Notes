// function returnFunc() {
//   const x = () => {
//     let a = 1;
//     console.log(a);
//     const y = () => {
//       // let a = 2;
//       console.log(a);
//       const z = () => {
//         // let a = 3;
//         console.log(a);
//       };
//       z();
//     };
//     y();
//   };

//   return x;
// }
// let a = returnFunc();
// a();

function counter() {
  var count = 0;

  return function incCount() {
    count++;
    console.log(count);
  };
}

var counter1 = counter();
console.log(counter1);

counter1();
counter1();
