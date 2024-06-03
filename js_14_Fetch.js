//************************Fetch()******************************/
// Fetch() method used for retrieving resources from a server.
// It returns a Promise.

//Simple APi Call (GET Method)
async function fetchData() {
  //Here Fetch will return the RESPONSE BODY.
  //Response body which is as ReableStream which needs to convert to JSON.
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
  // The .json() method of the response object is used to parse the JSON body content. 
  // This method also returns a promise.
  const result = await data.json(); 
  console.log("Response: ", result);
}

fetchData();

//Catch Error
async function fetchData1() {
  try {
    const data = await fetch("https://jssonplaceholder.typicode.com/todos/1");
    const result = await data.json(); //Json it covert into JSON obj retun as promises
    console.log("Response: ", result);
  } catch (err) {
    // Handle Error
    console.log("Errror: ", err);
  }
}

fetchData1();

//E.g POST API Call
let URL = "https://jsonplaceholder.typicode.com/posts";
async function createNewPost(postdata) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(postdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
}

async function createPost() {
  let postdata = {
    title: "Rest Time",
    body: "Cricket",
    userId: 12,
  };

  let res = await createNewPost(postdata);
  console.log("Response: ", res);
}
