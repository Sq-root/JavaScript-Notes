let validAge = true

function userCanDrive(age) {
    return age > 18
}

while (validAge) {
    let age = prompt("Enter Your Age: ")
    age = Number.parseInt(age)

    if (age < 0){
        console.error("Enter Valide Age !!")
    }
    else if (userCanDrive(age)) {
        alert("Congratulation ! You Can Drive..")
        validAge = false
    } else {
        alert("Unfortunatly ! You Can't Drive..")
    }
}