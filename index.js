// Initialize player scores and turn
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Get references to HTML elements
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const winnerWindow = document.getElementById("winnerWindow");
const winner = document.getElementById("winner");
const winnerScore = document.getElementById("winnerScore");

// Function to display the winner window
function showDisplayButton() {
    winnerWindow.style.display = "block";
}

// Event listener for the roll button
rollBtn.addEventListener("click", function() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Update scores and display information based on the current player's turn
    if (player1Turn) {
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn";
    } else {
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn";
    }

    // Feature: Display "-" on the inactive player's dice
    if (player1Turn === false) {
        player1Dice.textContent = "-";
    } else {
        player2Dice.textContent = "-";
    }

    // Check if any player has reached the winning score
    if (player1Score >= 20) {
        winner.textContent = "Player 1 Won! 🏆";
        winnerScore.textContent = "With Score: " + player1Score;
        showDisplayButton();
    } else if (player2Score >= 20) {
        winner.textContent = "Player 2 Won! 🏆";
        winnerScore.textContent = "With Score: " + player2Score;
        showDisplayButton();
    }

    // Switch turns
    player1Turn = !player1Turn;
});

// Event listener for the reset button
resetBtn.addEventListener("click", function() {
    // Call the reset function to reset the game
    reset();
});

// Function to reset the game state
function reset() {
    message.textContent = "Player 1 Turn";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    winnerWindow.style.display = "none";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}
