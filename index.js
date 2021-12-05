const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const btnDel = document.getElementById("btn-del")
const inputBox = document.getElementById("input-box")
btn.addEventListener("click", writeGreeting)
btnDel.addEventListener("click", deleteGreeting)

let greetingPosition
let greetingAdded

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.
inputBox.addEventListener('keyup', function() {
    let inputs = event.target.value
    if (event.keyCode == 13) {
    greetings.push(inputs)
    greetingDisplay.style.color = 'green'
    greetingDisplay.textContent = `${inputs} Has been ADDED`
    event.target.value = ''
}
    
})


function writeGreeting() {
    greetingDisplay.style.color = 'black'
    greetingPosition = Math.floor(Math.random() * greetings.length)
    greetingAdded = greetings[greetingPosition]
    greetingDisplay.textContent = greetingAdded
}

function deleteGreeting() {
    greetings.pop(greetingPosition)
    greetingDisplay.textContent = `${greetingAdded} has been REMOVED`
    greetingDisplay.style.color = 'red'
}

