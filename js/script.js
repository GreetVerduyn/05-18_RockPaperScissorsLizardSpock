const elements = ["scissors", "paper", "rock", "lizard", "spock"];
let user;
let computer;
let userWins = false;
let userChoice;
let computerChoice
let resetButton=document.getElementById("reset")



let choiceButtons = document.getElementsByClassName("cards");
console.log(choiceButtons);

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function ()
    {
        userChoice = choiceButtons[i].id;
        //console.log(userChoice);
    })
};


document.getElementById("computerButton").addEventListener("click", function () {
    computerChoice = elements[Math.floor(Math.random() * elements.length)];
    //console.log(computerChoice)

    if (computerChoice === userChoice) {
        document.getElementById("text").innerHTML = `Same cards, try again.`;
    } else {
        if (userChoice === 'lizard' && (computerChoice === 'paper' || 'spock')) {
            userWins = true
        } else {
            userWins = false
        }
        if (userChoice === 'scissors' && (computerChoice === 'paper' || 'lizard')) {
            userWins = true
        } else {
            userWins = false
        }
        if (userChoice === 'rock' && (computerChoice === 'lizard' || 'scissors')) {
            userWins = true
        } else {
            userWins = false
        }
        if (userChoice === 'spock' && (computerChoice === 'scissors' || 'rock')) {
            userWins = true
        } else {
            userWins = false
        }
        if (userChoice === 'paper' && (computerChoice === 'spock' || 'rock')) {
            userWins = true
        } else {
            userWins = false
        }
    }
if (userWins= true){

    }
})






resetButton.addEventListener("click",function(){
    userWins=false
})
