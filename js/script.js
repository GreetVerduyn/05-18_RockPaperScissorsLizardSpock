const elements = ["scissors", "paper", "rock", "lizard", "spock"];
let userPoints = 0;
let computerPoints = 0;
let userWins = false;
let userChoice;
let computerChoice;
let resetButton = document.getElementById("reset");
let textResults = document.getElementById("text");

let choiceButtons = document.getElementsByClassName("cards");

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function () {
        userChoice = choiceButtons[i].id;
        document.getElementById("choicesUser").innerText = `${userChoice}`
        computerChoice = undefined;
    })
}

document.getElementById("pointsUser").innerText = `User: ${userPoints}`
document.getElementById("pointsComputer").innerText = `Computer: ${userPoints}`


function play(userChoice, computerChoice) {

    if (userChoice === undefined) return

    if (computerChoice === userChoice) {
        textResults.innerText = "Same cards, try again.";
    } else if (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) {
        userWins = true
        textResults.innerText = "you win"
        userPoints = userPoints + 1
    } else if (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) {
        userWins = true
        textResults.innerText = "you win"
        userPoints = userPoints + 1
    } else if (userChoice === "rock" && (computerChoice === "lizard" || computerChoice === "scissors")) {
        userWins = true
        textResults.innerText = "you win"
        userPoints = userPoints + 1
    } else if (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock")) {
        userWins = true
        textResults.innerText = "you win"
        userPoints = userPoints + 1
    } else if (userChoice === "paper" && (computerChoice === "spock" || computerChoice === "rock")) {
        userWins = true
        textResults.innerText = "you win"
        userPoints = userPoints + 1
    } else {
        userWins = false
        textResults.innerText = "you lose"
        computerPoints = computerPoints + 1
    }
};

document.getElementById("computerButton").addEventListener("click", function () {
    computerChoice = elements[Math.floor(Math.random() * elements.length)];
    play(userChoice, computerChoice)
    document.getElementById("choicesComputer").innerText = `${computerChoice}`

});

resetButton.addEventListener("click", function () {
    userWins = false
    userChoice = undefined;
    textResults.innerText = ""
    document.getElementById("text").innerText = " ";
    document.getElementById("choicesUser").innerText = " ";
    document.getElementById("choicesComputer").innerText = " ";
});
