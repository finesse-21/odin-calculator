let firstNumber;
let operand;
let secondNumber;
let result;
const ALL_OPERANDS = "+-*/"

function operate(firstNumber, operand, secondNumber) {
    if (operand == "+") return firstNumber + secondNumber;
    if (operand == "-") return firstNumber - secondNumber;
    if (operand == "/") return firstNumber / secondNumber;
    if (operand == "*") return firstNumber * secondNumber;
}

const displayContainer = document.querySelector(".display");

const digitButton = document.querySelector(".buttons");
digitButton.addEventListener("click", (event) => {
    calculatorAction(event.target.innerText);
  });

function calculatorAction(event) {
    if (Number.isInteger(parseInt(event))) {
        displayContainer.textContent += event;
    }
    if (event == "AC") {
        firstNumber = NaN;
        secondNumber = NaN;
        operand = "";
        displayContainer.textContent = "";
    }
    if (event == "=") {
        secondNumber = parseInt(displayContainer.textContent);
        result = operate(firstNumber, operand, secondNumber);
        displayContainer.textContent = result;
    }
    if (ALL_OPERANDS.includes(event)) {
        if (!firstNumber) {
            firstNumber = parseInt(displayContainer.textContent);
        }
        else {
            secondNumber = parseInt(displayContainer.textContent);
            result = operate(firstNumber, operand, secondNumber);
            firstNumber = result;
        }
        displayContainer.textContent = "";
        operand = event;
    }
}

// const clearButton = document.querySelector(".clear")
// clearButton.addEventListener("click", () => {
//     displayContainer.textContent = "";
//   });

// const addButton = document.querySelector(".add");
// addButton.addEventListener("click", () => {
//     firstNumber = parseInt(displayContainer.textContent);
//     operand = "+"
//     displayContainer.textContent = "";
//   });

// const subtractButton = document.querySelector(".subtract");
// subtractButton.addEventListener("click", () => {
//     firstNumber = parseInt(displayContainer.textContent);
//     operand = "-"
//     displayContainer.textContent = "";
// });

// const multiplyButton = document.querySelector(".multiply");
// multiplyButton.addEventListener("click", () => {
//     firstNumber = parseInt(displayContainer.textContent);
//     operand = "*"
//     displayContainer.textContent = "";
// });

// const divideButton = document.querySelector(".divide");
// divideButton.addEventListener("click", () => {
//     firstNumber = parseInt(displayContainer.textContent);
//     operand = "/"
//     displayContainer.textContent = "";
// });

// const equalsButton = document.querySelector(".equals");
// equalsButton.addEventListener("click", () => {
//     secondNumber = parseInt(displayContainer.textContent);
//     result = operate(firstNumber, operand, secondNumber);
//     displayContainer.textContent = result;
// });
 