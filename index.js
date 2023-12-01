const display = document.getElementById("display")
const numBtns = document.querySelectorAll(".num-btn")
let firstNum = null
let secondNum = null
let operator = null
let displayText = ''

numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", function() {
        console.log(typeof numBtn.textContent)
    })
})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operand, firstNum, secondNum) {
    switch (operand) {
        case '+':
            add(firstNum, secondNum)
            break;
        case '-':
            subtract(firstNum, secondNum)
            break;
        case '*':
            multiply(firstNum, secondNum)
            break;
        case '/':
            divide(firstNum, secondNum)
            break;
    }
}