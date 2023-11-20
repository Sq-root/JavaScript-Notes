/* Write random variable a number Java Script and program store to it generate an a a in
The program then takes from the user to tell
them whether input the or lesser than guess original was Correct,
greater number.100 The program !number of is is expected glossed.Number should be guesses)
is the to score terminate of the user once the between */


function genrateRandomNo() {
    let targetNo = Math.floor(Math.random() * 100);
    return targetNo
}


function guessNo() {
    let targetNo = genrateRandomNo()
    console.log("Target No is:", targetNo)
    let noStep = 0
    let userNo

    do {
        userNo = prompt("Guess the Number: ")
        userNo = parseInt(userNo, 10)
        noStep += 1
        if (userNo > targetNo) {
            console.log("No is greater than Guess No")
        } else if (userNo < targetNo) {
            console.log("No is Less than Guess No")
        } else if (userNo = targetNo) {
            console.log("Congratulation You Got the Right No !!")
            console.log("Your Score is:", noStep)
            break
        }

    } while (userNo != targetNo)

}

// ----------Main----------
guessNo()
