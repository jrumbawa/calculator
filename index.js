let firstNum = null
let secondNum = null
let operator = null

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