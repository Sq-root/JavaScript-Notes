// ----------------------Promises--------------------

//Create Promises
let promo1 = new Promise((resolove, reject) => {
  // Do any ASYNC Task
  // DB Calls, Network Call, File Fetch
  let num = Math.random();
  if (num < 0.5) {
    reject("Something Went Wrong !");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done");
      resolove("Let's Go..");
    }, 3000);
  }
});

//Once work is done this will execute
promo1
  //Only for once resolve
  .then((result) => {
    console.log(result);
  })
  //Only for once reject
  .catch((error) => {
    console.log("Error: ", error);
  });
