const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".operator-btn");
const eqlBtn = document.querySelector(".eql-btn");
const clrBtn = document.querySelector(".clr-btn");
const calcDisplay = document.querySelector(".calc-display");
let numOne = null;
let numTwo = null;
let operator = null;
let result = null;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      return add(numOne, numTwo);
    case "-":
      return subtract(numOne, numTwo);
    case "*":
      return multiply(numOne, numTwo);
    case "/":
      return divide(numOne, numTwo);
  }
}

function setNumbers() {
  if (numOne === null) {
    numOne = Number(calcDisplay.textContent);
  } else if (numOne !== null && operator !== null) {
    numTwo = Number(calcDisplay.textContent);
  }
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const value = e.target.textContent;
    if (calcDisplay.textContent === "0") {
      calcDisplay.textContent = value;
    } else {
      calcDisplay.textContent += value;
    }
  });
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    setNumbers();
    calcDisplay.textContent = "0";
    const value = e.target.textContent;
    operator = value;
  });
});

clrBtn.addEventListener("click", function () {
  numOne = numTwo = operator = null;
  calcDisplay.textContent = "0";
});

eqlBtn.addEventListener("click", function () {
  setNumbers();
  if (numOne !== null && numTwo !== null && operator !== null) {
    result = operate(numOne, numTwo, operator);
    calcDisplay.textContent = result;
    numOne = result;
    numTwo = null;
    operator = null;
  }
});
