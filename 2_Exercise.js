/*Use Javascript a game of be Water able to The create game should Computer ask S should you Snake
 & Gun to G enter and S, W to and or Win generate or The required using W or alert Use
confirm prompt wherever 
Gun -- Snake = Gun
Water -- Gun = Water
Snake -- Water = Snake 

Game : 3 Round 
*/

let item = ["S", "W", "G"]


function getfrombot() {
    let targetNo = Math.floor(Math.random() * 3)
    if (targetNo == 0) {
        return item[0]
    } else if (targetNo == 1) {
        return item[1]
    } else if (targetNo == 2) {
        return item[2]
    }
}

function startGuessing() {
    console.log("Welcome the Guess World...")
    let noRound = 3
    let userWin = 0
    let botWin = 0

    while (noRound != 0) {
        userChoice = prompt("Enter the input (S, W, G):")
        botChoice = getfrombot()

        // If both data same
        if (userChoice == botChoice) {
            alert("Match Draw !!")
            continue
        }

        noRound -= 1

        // Define Game Rules
        if (userChoice == "S") {
            if (botChoice == "W") {
                userWin += 1
            } else if (botChoice == "G") {
                botWin += 1
            }
        } else if (userChoice == "W") {
            if (botChoice == "G") {
                userWin += 1
            } else if (botChoice == "S") {
                botWin += 1
            }
        } else if (userChoice == "G") {
            if (botChoice == "S") {
                userWin += 1
            } else if (botChoice == "W") {
                botWin += 1
            }

            // Announce the Result
            if (userWin > botWin) {
                alert("Congratulations🎉....You Win")
            } else {
                alert("Better Luck Next Time🥲....Bot Win")
            }
        }
    }
    // Announce the Final Result
    if (userWin > botWin) {
        alert("Congratulations🎉....You Win")
    } else {
        alert("Better Luck Next Time🥲....Bot Win")
    }
    console.log("Your Score:", userWin ,"and Bot Score:", botWin)

}

//------------Main-----------
startGuessing()