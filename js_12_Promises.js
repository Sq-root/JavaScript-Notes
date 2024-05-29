// ----------------------Promises--------------------
// Why do we Need Promiss:
//   1.Get data From API.
//   2. Make connection to DB.
//   3. Download data , pics, videos from Server.
//   this all task takes so handle this all taks we user promises.
//   4. Avoid Callback Hell Problem 

//Create Promises
let promo1 = new promis((resolve, reject) => {
  // Do any ASYNC Task
  // DB Calls, Network Call, File Fetch
  let num = Math.random();
  if (num < 0.5) {
    reject("Something Went Wrong !");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done");
      resolve("Let's Go..");
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

//E.g. Pass data
let promo2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Gaurav", email: "gaurav@gmail.com" });
  }, 3000);
});

promo2
  .then((response) => {
    return response.userName; //pass data into another
  })
  .then((userName) => {
    console.log("User: ", userName);
  });

promo2.catch((error) => {
  console.log("ERROR: ", error);
});

//E.g. Promis Chaining
let promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Yes I am Done");
    resolve("Let's Go..");
  }, 2000);
});

promis
  .then((value) => {
    console.log("First Task: ", value);
    let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Yes I am also Done");
        resolve("Let's Go together..");
      }, 5000);
    });
    return p2;
  })
  .then((value) => {
    console.log("Second Task: ", value);
  });

//E.g Load Script Example
let link = "https://www.youtube.com/iframe_api";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    // pass data as Promise
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Fetch data Successfully !");
    };
    script.onerror = () => {
      reject("Error..");
    };
  });
};

let data = loadScript(link);
data
  .then((value) => {
    console.log("Msg: ", value);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

//E.g. Attache MUltiple Handlers to one Promis
//Create Promises
let multiplePromo = new Promise((resolve, reject) => {
  // We can attach multiple THEN to one PROMIS
  let num = Math.random();
  if (num < 0.5) {
    reject("Something Went Wrong !");
  } else {
    setTimeout(() => {
      console.log("Yes I am Done");
      resolve(num);
    }, 3000);
  }
});

// We can attach multiple Handlers to one PROMIS all will run one by one indepedantly
multiplePromo.then((num) => {
  //do somthing on this NUM
  console.log("Num", num);
});

multiplePromo.then((num) => {
  //Call API logic
  console.log("API Callin");
});
