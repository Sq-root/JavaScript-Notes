//Ch2 Q1
// let age = prompt("Enter Your Age?")
// if (age > 10 && age < 15){
//  console.log("Yes Exit")
// }
// else
// {
//     console.log("Not Exit1")
// }

let num = prompt("Enter Your No")
// if (num % 2==0 || num % 3==0 ){
//     console.log("Yes")
// }
console.log("Status:", num > 18 ? "Drive" :"Not Drive")

studList = {
    'Gaurav' : 34,
    'Kunal' : 45,
    'Neel' : 40,
    'Bhavesh' : 50
}

console.log(Object.keys(studList))  //Arr of Keys

for (let key in studList)
{
    console.log("Marks of",key, "is", studList[key])

}
