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

const calculatorButton = document.querySelector(".buttons");
calculatorButton.addEventListener("click", (event) => {
    calculatorAction(event.target.innerText);
  });

function calculatorAction(event) {
    if (Number.isInteger(parseFloat(event))) {
        displayContainer.textContent += event;
    }
    if (event == "AC") {
        firstNumber = NaN;
        secondNumber = NaN;
        operand = "";
        displayContainer.textContent = "";
    }
    if (event == "=") {
        if (!firstNumber) return;
        secondNumber = parseFloat(displayContainer.textContent);
        if (operand == "/" && secondNumber == 0){
            displayContainer.textContent = "ERROR";
            return;
        } 
        result = Math.round(operate(firstNumber, operand, secondNumber) * 10000) / 10000;
        displayContainer.textContent = result;
        firstNumber = NaN;
    }
    if (ALL_OPERANDS.includes(event)) {
        if (!firstNumber) {
            firstNumber = parseFloat(displayContainer.textContent);
        }
        else {
            secondNumber = parseFloat(displayContainer.textContent);
            result = Math.round(operate(firstNumber, operand, secondNumber) * 10000) / 10000;
            firstNumber = result;
        }
        displayContainer.textContent = "";
        operand = event;
    }
}
