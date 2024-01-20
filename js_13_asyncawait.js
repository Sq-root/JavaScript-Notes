// ----------------------ASYNC/AWAIT--------------------
// - It use to handle PROMISES.
// 1. ASYNC Fun =
// -  It always return a promise.
// - No matter which value we will return such int, float, boolen it wrap it this of promise and send it.

//E.g. ASYNC Fun Always Gives the Promises (Wrapping value inside it).
async function getData() {
  return "Hello World ";
}

const data = getData(); //Give Entire PRomis Obj
console.log("Getting Data from ASYNC Fun: ", data);

//Gives only Data
data.then((value) => {
  console.log("Getting Data from ASYNC Fun: ", value);
});

//E.g. Handle Promises by ASYNC/AWAIT
// ASYNC --> use to define function which always return promises.
// AWAIT --> It only be use inside the async function.
const prodata = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I have done the JOB !");
  }, 2000);
});

async function fetchdata() {
  let response = await prodata;
  console.log("response: ", response);
}

fetchdata();

//********************************************************** */
//E.g Nomal Way to Handle Promises vs ASYNC/AWAIT handle Promises
// 1. ------------ Normal Ways---------------
// -- Here it will execute futher code promis handl no matter what promise resolve or not.It won't wait promise to be resolve.
const promisAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fecthed Data Done....");
  }, 2000);
});

function handlePromo() {
  //JS Engine will not wait for promises to be resolved/rejected.
  promisAPI.then((res) => {
    console.log("Handled Promiess", res);
  });
  //This will excute before Promis Resolve and in the background promis will do their job.(Code Won't Stop it excute no matter promis resolve or not)
  console.log("Waiting to Resolve Promiese");
}

handlePromo();

// 2. ------------BY ASYNC/AWAIT---------------
// -- AWAIT will wait it won't got to next line of code until promis will resolve.
// Here the Function won't be there in call stack it will suspended it won't be block main thread the promisse call resolve separately.Once prmisse resolved it excutes futher logic comes to memory stack.
async function apidata() {
  // JS Engine will waiting for promises to be resolved/rejected.
  let res = await promisAPI;
  // THis will not execute until await promise will resolve.
  console.log("Handled Promiess", res);
  console.log("Waiting to Resolve Promiese");

  //Call Multiple Times (Both Works Parallel)
  let res1 = await promisAPI;
  // THis will not execute until await promise will res1olve.
  console.log("Handled Promiess", res1);
  console.log("Waiting to Resolve Promiese");
}

apidata();
//********************************************************** */

async function getWeatherUpdate() {
  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 Degree");
    }, 5000);
  });

  let DelhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("25 Degree");
    }, 5000);
  });

  console.log("Fetching Mumbai's Weather");
  let mumbai = await mumbaiWeather;
  console.log("Fetched Mumbai's Weather", mumbaiWeather);
  console.log("Fetching Delhi's Weather");
  let delhi = await DelhiWeather;
  console.log("Fetched Delhi's Weather", DelhiWeather);
  return [mumbaiWeather, DelhiWeather];
}

getWeatherUpdate().then((value) => {
  console.log("Weather: ", value);
});
