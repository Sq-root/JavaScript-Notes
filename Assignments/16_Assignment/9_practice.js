const form = document.querySelector("form");
const bmiinfo = document.querySelector(".bmi-info");
console.dir(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");

  //Validation
  if (!height) {
    result.textContent = "Please Enter Valid Height";
    result.style.color = "red";
  } else if (!weight) {
    result.textContent = "Please Enter Valid Weight";
    result.style.color = "red";
  } else {
    result.style.color = "black";
    const total = (weight / ((height * height) / 1000)).toFixed(2);
    result.textContent = total;
    getBMIInfo(total);
  }
});

function getBMIInfo(number) {
  if (number < 18.6) {
    bmiinfo.innerHTML = `Under Weight = Less than 18.6`;
  } else if (number >= 18.6 && number <= 24.9) {
    bmiinfo.innerHTML = `Normal Range = 18.6 and 24.9`;
  } else {
    bmiinfo.innerHTML = `Overweight = Greater than 24.9`;
  }
}
