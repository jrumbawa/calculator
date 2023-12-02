const display = document.getElementById("display")
const numBtns = document.querySelectorAll(".num-btn")
const operandBtns = document.querySelectorAll(".operand-btn")
let firstNum = '0'
let secondNum = null
let operator = null
let displayText = ''

numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", function() {
        handleNumberClick(numBtn.textContent)
    })
})

operandBtns.forEach(operandBtn => {
    operandBtn.addEventListener("click", function() {
        console.log(operandBtn.textContent)
    })
})

function handleNumberClick(num) {
    if (firstNum === '0') {
        firstNum = num
    } else {
        firstNum += num
    }
    console.log(firstNum)
}

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