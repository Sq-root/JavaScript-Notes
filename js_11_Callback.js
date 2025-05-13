// ----------------------Call Back Topic --------------------
//Synchronus Programming :
// All the opetations work in sequential manner one by one .
// E.g. calling function assign var. like operation .

//Asynchronus Programming :
// All the operation work in Parallel manner independant to each other.
// E.g. setTimeOut, SetTimeInterval.

// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// Used for:
//  Delaying execution until another task completes
//  Handling asynchronous operations (e.g., API requests, file reading

// Think of ordering pizza:
//   1.You order pizza (main program continues).
//   2.Give your phone number (callback).
//   3.When pizza is ready, you get a call (callback executed).

//Normal FUnction
// function loadScript(src) {
// let script = document.createElement("script");
// script.src = src;
// //Inner Func.
// script.onload = () => {
//     console.log("Script Loaded SRC: ", script.src);
// };
// document.head.appendChild(script);
// }

// loadScript(
// "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
// );

//Call back Fun.
function loadScript1(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  //Inner Func. ASYNC
  script.onload = () => {
    console.log("Script Loaded SRC: ", script.src);
    callback();
  };
  //Inner Func. ASYNC
  script.onerror = () => {
    console.log("Errro in SRC");
    // callback();
  };
  document.head.appendChild(script);
}

function showMsg() {
  alert("Loaded SuccessFully..");
}

function showAlert() {
  console.error("Something Went Wrong");
}

loadScript1(
  "https://cdn.jsdelivr.net/npdm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
  showMsg
);

//E.g Find First -ve Element
arr = [5, 4, 5, 6, 7, 8, -1, -2, -3, -4, -5];

const getNegativeNo = (num) => {
  return num < 0;
};

let res = arr.find(getNegativeNo); //Passing fun. Ref as parameter
console.log(res);

//E.g. For Each
arr.forEach((element) => {
  console.log("Arr: ", element);
});

const positive = (ele) => {
  console.log( ele * -1);
};

console.log(arr.forEach(positive));

function getData(id, callbackFun) {
  setTimeout(() => {
    console.log("APi DATA: ", id);
    if (callbackFun) {
      callbackFun();
    }
  }, 2000);
}

//  Cons:
//   1.  This becomes deeply nested, hard to read, and hard to handle errors. This is called callback hell.
//   2.  No easy try-catch; errors can go unnoticed.


//Note: U can;t pass function direxctly like this. you have to pass as arrow func like below
getData(123,getData(124));

//Creting Callback Pyaamid
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    });
  });
});

