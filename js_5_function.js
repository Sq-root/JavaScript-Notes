// Create Function
function getAvg(x, y) {
  return (x, y) / 2;
}

console.log("Avg. of two no:", getAvg(2, 3));

// Will Return Undefined pass arg value as undefined
console.log("Avg. of two no:", getAvg());

// 1. Pass N No fo Args
// Rest Operator : ...n   => Takes N no of args as Array
function getData(val1, val2, ...data) {
  return data;
}

console.log(getData(1, 2, 3, 4, 2, 64, 646)); // Output : [3,4,2,64,646]
// console.log(getData(1, 2, 3, 4, 2, 64, 646));
