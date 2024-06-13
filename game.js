// Generate a random number between 1 and 100
const result1 = document.querySelector("#result");
const restart = document.querySelector("#restart");
const guessInput = document.querySelector("#guessInput");
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let turn0 = true;

const resetGame = () => {
  attempts = 0;
  turn0 = true;
  enableInput();
  result1.innerText = '';
  
}

const enableInput = () =>{
  guessInput.innerText = '';
}

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;
    let result = '';

    if (userGuess < randomNumber) {
        result = 'Too low! Try again.';
        result1.style.color = "orangered";
        turn0 = false;
    } else if (userGuess > randomNumber) {
        result = 'Too high! Try again.';
        result1.style.color = "red";
        turn0 = false;
    } else {
        result = `Congratulations! You guessed the number in ${attempts} attempts.`;
        result1.style.color = "green";
        turn0 = false;
        reStart = 'Restart';
    }

    document.getElementById('result').innerText = result;
    document.getElementById('restart').innerText = reStart;
   
}
restart.addEventListener("click", resetGame);

