let input=document.querySelector("input")
input.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        event.preventDefault()
        document.querySelector(".guessSubmit").click()
    }
});


let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector(".guesses")  
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const guessField = document.querySelector(".guessField")
const buttonSubmit = document.querySelector(".guessSubmit")

const resetGame = document.querySelector(".resetGame")
resetGame.setAttribute("style", "visibility: hidden")
resetGame.addEventListener("click", resetGameFunction)

let guessCount = 0
let resetGame2
let stringGuesses = ""

buttonSubmit.addEventListener("click", checkGuess)
resetGame.addEventListener("click", resetGameFunction)

function checkGuess() {
    let value = Number(guessField.value)
    if (value < 1) {
        value = 1
        alert("The value that you added was below 1!");
    }
    if (value > 100) {
        value = 100;
        alert("The value that you added was above 100!");
    }
    stringGuesses = stringGuesses + value + " "
    resetGame2 = document.createElement("button")
    resetGame2.disabled = true

    if (guessCount === 10) {
        lastResult.textContent = "GAME OVER!!!"
        resetGame2.disabled = false
        resetGame2.textContent = "Reset Game"
        resetGame.setAttribute("style", "visibility: visible")
        // document.querySelector(".form").appendChild(resetGame2)
        lowOrHi.textContent = "The number was: " + randomNumber
        resetGame2.addEventListener("click", resetGameFunction)
        gameOver()
    } else {
        if (value === randomNumber) {
            guesses.textContent = "Previous guesses: " + stringGuesses
            lastResult.textContent = "Congrats! You get it right!"
            lastResult.style.backgroundColor = "green"
            resetGame.setAttribute("style", "visibility: visible")
            lowOrHi.textContent = "The number was: " + randomNumber
            gameOver()
        } else {
            guesses.textContent = "Previous guesses: " + stringGuesses
            lastResult.textContent = "Wrong! Try again !"
            lastResult.style.backgroundColor = "red"

            if (value < randomNumber) {
                lowOrHi.textContent = "Your number is to low!"
            } else {
                lowOrHi.textContent = "Your number is to high!"


            }

        }
    }
    guessField.value = ""
    guessCount++;


}
function resetGameFunction() {
    guessCount = 1
    stringGuesses = ""
    guesses.textContent = "Previous guesses: "
    randomNumber = Math.floor(Math.random() * 100) + 1
    resetGame.setAttribute("style", "visibility: hidden")
    lastResult.textContent = ""
    lastResult.style.backgroundColor = " white"
    lowOrHi.textContent = ""
    buttonSubmit.disabled = false
    guessField.disabled = false
    resetGame2.setAttribute("style", "visibility: hidden")
}

function gameOver() {
    buttonSubmit.disabled = true
    guessField.disabled = true
}