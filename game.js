// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

const result1 = document.querySelector("#result");
const restart = document.querySelector("#restart");
const guessInput = document.querySelector("#guessInput");

let attempts = 0;

const resetGame = () => {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new random number
    guessInput.value = ''; // Clear input field
    result1.innerText = ''; // Clear result message
    restart.innerText = 'Restart'; // Reset button text
}

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    let result = '';

    if (userGuess < randomNumber) {
        result = 'Too low! Try again.';
        result1.style.color = "orangered";
    } else if (userGuess > randomNumber) {
        result = 'Too high! Try again.';
        result1.style.color = "red";
    } else {
        result = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
        result1.style.color = "green";
        restart.innerText = 'Play Again'; // Change button text when user wins
    }

    result1.innerText = result;
}

guessInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      checkGuess();
  }
});

restart.addEventListener("click", resetGame);
