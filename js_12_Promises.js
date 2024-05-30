// ----------------------Promises--------------------
// Promise is an action which guarantees a result in future, the result could be the expected one(positive) 
// and if anything goes wrong, the result will be something which was not anticipated(negative)

// Why do we Need Promiss:
// -------------------------------
//   1.Get data From API.
//   2. Make connection to DB.
//   3. Download data , pics, videos from Server.
//   this all task takes so handle this all taks we user promises.
//   4. Avoid Callback Hell Problem 

// ### Scenario: Ordering Food Online
// ---------------------------------------------
// **Placing the Order:**
// - You order a pizza online.
// - The restaurant starts preparing your order.

// **Waiting for the Order:**
// - You go about your day (e.g., watch TV) while the pizza is being made.

// **Order Completion:**
// - The restaurant notifies you when the pizza is ready and delivers it.
// - If successful, you enjoy your pizza.
// - If there's a problem (e.g., out of ingredients, delivery issue), you get notified.

// ### How Promises Relate to This Scenario

// **Promise Creation (Placing the Order):**
// - Placing the order is like creating a promise, expecting your pizza in the future.

// **Pending State (Waiting for the Order):**
// - While the pizza is being prepared, the promise is "pending." You do other things in the meantime.

// **Resolved or Rejected State (Order Completion):**
// - When the pizza arrives, the promise is "resolved" with a successful delivery.
// - If there's an issue, the promise is "rejected" with an error message.

// Function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
      const data = "Hello, World!";
      const success = true; // Simulate a successful operation

      if (success) {
        resolve(data); // Resolve the promise with the data
      } else {
        reject("Failed to fetch data"); // Reject the promise with an error message
      }
    }, 2000); // Wait for 2 seconds
  });
}

// Using the promise
fetchData()
  .then((data) => {
    console.log("Data received:", data); // Handle the resolved value
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });

console.log("Fetching data..."); // This will log first due to the asynchronous nature of the promise

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
