// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
    // Get references to HTML elements
    const rollButton = document.getElementById("roll-btn");
    const team1ResultDisplay = document.getElementById("team1-result");
    const team2ResultDisplay = document.getElementById("team2-result");
    const winnerDisplay = document.getElementById("winner-display");

    // Function to roll the dice and determine the winner
    function rollDice() {
        // Generate random numbers for each team
        const randomNumber1 = Math.floor(Math.random() * 6) + 1;
        const randomNumber2 = Math.floor(Math.random() * 6) + 1;

        // Display the results for each team
        team1ResultDisplay.textContent = randomNumber1;
        team2ResultDisplay.textContent = randomNumber2;

        // Determine the winner based on the random numbers
        if (randomNumber1 === randomNumber2) {
            winnerDisplay.textContent = "It's a tie! Roll again.";
        } else if (randomNumber1 > randomNumber2) {
            winnerDisplay.textContent = "Team 1 wins!";
        } else {
            winnerDisplay.textContent = "Team 2 wins!";
        }
    }

    // Call the rollDice function when the page loads to display initial results
    rollDice();

    // Add event listener to the roll button to roll the dice when clicked
    rollButton.addEventListener("click", rollDice);
});
