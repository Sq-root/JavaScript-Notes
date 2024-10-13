//Take data from User
size=prompt("Enter the Size of the Arr:")
let arr=[]
while(arr.length != size){
    val=prompt("Enter the value of the Arr:")
    if (val == 0 ){
        break
    }
    arr.push(val)
  
}
console.log(arr)


// Filter
let list = [12,13,4,55,50,60,65]
let divTen = list.filter(x=>x%10 === 0)
console.log(divTen)

let squNo = list.map((x) => x*x)
console.log(squNo)