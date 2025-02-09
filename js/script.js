const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".operator-btn");
const clrBtn = document.querySelector(".clr-btn");
let numbOne = null;
let numbTwo = null;
let operator = null;

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

numBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const value = e.target.textContent;
    console.log(value);
  });
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const value = e.target.textContent;
    console.log(value);
  });
});

clrBtn.addEventListener("click", function () {
  console.log("clear");
});
