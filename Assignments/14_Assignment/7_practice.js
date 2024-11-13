//load Js File
//1. E.g Load Script Example
// let link =
//   "https://cdn.jsdelivr.net/npdm/bootstrap@5.3.2/dist/js/bootstrap.min.js";
let link = "https://www.youtube.com/iframe_api";
function loadScript() {
  const fileOBj = new Promise((resolve, reject) => {
    let scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.src = link;
    document.body.appendChild(scriptTag);
    scriptTag.onload = () => {
      resolve("File Loaded Successfully !!");
    };
    scriptTag.onerror = () => {
      reject("Something Went Wrong!!");
    };
  });
  return fileOBj;
}

loadScript()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//2. Using Async/AWait
async function FetchScript() {
  console.log("Start");
  const file = await loadScript();
  console.log("Response", file);
  console.log("End");
}
FetchScript();

//3.HandlePromis async/awit and try catch block
const prodata1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I have not done the JOB !");
  }, 3000);
});

async function handlePro() {
  try {
    const res = await prodata1;
  } catch (err) {
    console.log("Error !!!");
  }
}
handlePro();

//4 Handle Multiple Ppomiss paraller using async await
let promo1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userName: "Gaurav", email: "gaurav@gmail.com" });
    }, 2000);
  });
};
let promo2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userName: "Parth", email: "Parth@gmail.com" });
    }, 4000);
  });
};
let promo3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userName: "Bhavesh", email: "bhavesh@gmail.com" });
    }, 5000);
  });
};

const handleMultiplePro = async () => {
  //   console.time("Run");
  //   let a1 = await promo1();
  //   let a2 = await promo2();
  //   let a3 = await promo3();
  //   console.timeEnd("Run");

  //Handle Parallel
  console.time("Run");
  let a1 = promo1();
  let a2 = promo2();
  let a3 = promo3();
  let all = await Promise.all([a1, a2, a3]);
  console.log("Res", all);
  console.timeEnd("Run");
};

handleMultiplePro();
