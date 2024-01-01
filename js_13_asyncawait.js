// ----------------------ASYNC/AWAIT--------------------
// 1. ASYNC Fun =
// -  It always return a promise.
// - No matter which value we will return such int, floa, boolen it
//   wrap it this of promise and send it.

//E.g. ASYNC Fun Always Gives the Promises.
async function getData() {
  return "Hello World ";
}

const data = getData();
console.log("Getting Data from ASYNC Fun: ", data);

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
