document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("roll-btn");
    const team1ResultDisplay = document.getElementById("team1-result");
    const team2ResultDisplay = document.getElementById("team2-result");
    const winnerDisplay = document.getElementById("winner-display");

    function rollDice() {
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;

        team1ResultDisplay.textContent = randomNumber1;
        team2ResultDisplay.textContent = randomNumber2;
        if (randomNumber1 === randomNumber2) {
            winnerDisplay.textContent = "It's a tie! Roll again.";
        } else if (randomNumber1 > randomNumber2) {
            winnerDisplay.textContent = "Team 1 wins!";
        }
        else {
            winnerDisplay.textContent = "Team 2 wins!";
        }
    }
    rollDice()

    rollButton.addEventListener("click", rollDice);
});

document.addEventListener("DOMContentLoaded", () => {
    
});
