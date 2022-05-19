const elements = ["scissors", "paper", "rock", "lizard", "spock"];
let userPoints=0;
let computerPoints=0;
let userWins=false
let userChoice;
let computerChoice
let resetButton = document.getElementById("reset")
let textResults = document.getElementById("result")


let choiceButtons = document.getElementsByClassName("cards");
//console.log(choiceButtons);

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function () {
        userChoice = choiceButtons[i].id;
        computerChoice=undefined;
        console.log(`choice user ${userChoice} the computer chose ${computerChoice}`);

    })
}
;

function play (userChoice, computerChoice) {
    console.log(userChoice)
    console.log(computerChoice)

    if (userChoice === undefined) return

    if (computerChoice === userChoice) {
        textResults.innerHTML = "Same cards, try again.";
    } else if (userChoice === "lizard" && (computerChoice === "paper" || computerChoice ==="spock")) {
        userWins = true
        textResults.innerHTML = "you win"
    } else if (userChoice === "scissors" && (computerChoice === "paper" || computerChoice ==="lizard")) {
        userWins = true
        textResults.innerHTML = "you win"
    } else if (userChoice === "rock" && (computerChoice === "lizard" || computerChoice ==="scissors")) {
        userWins = true
        textResults.innerHTML = "you win"
    } else if (userChoice === "spock" && (computerChoice === "scissors" || computerChoice ==="rock")) {
        userWins = true
        textResults.innerHTML = "you win"
    } else if (userChoice === "paper" && (computerChoice === "spock" || computerChoice ==="rock")) {
        userWins = true
        textResults.innerHTML = "you win"
    } else {
        userWins = false
        textResults.innerHTML = "you lose"
    }

  /*  if (userWins === true) {
        textResults.innerHTML = "you win"
    } else if (userWins === false) {
        textResults.innerHTML = "you lose"
    }*/
}


document.getElementById("computerButton").addEventListener("click", function () {
    computerChoice = elements[Math.floor(Math.random() * elements.length)];
play(userChoice, computerChoice)
    //console.log(`choice computer ${computerChoice}`);


})


resetButton.addEventListener("click", function () {
    userWins = false
    userChoice=undefined;
    textResults.innerHTML = ""
    document.getElementById("text").innerHTML = ""
})
