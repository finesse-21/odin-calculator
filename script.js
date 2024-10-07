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
        result = operate(firstNumber, operand, secondNumber);
        displayContainer.textContent = result;
        firstNumber = NaN;
    }
    if (ALL_OPERANDS.includes(event)) {
        if (!firstNumber) {
            firstNumber = parseFloat(displayContainer.textContent);
        }
        else {
            secondNumber = parseFloat(displayContainer.textContent);
            result = operate(firstNumber, operand, secondNumber);
            firstNumber = result;
        }
        displayContainer.textContent = "";
        operand = event;
        console.log(firstNumber);
        console.log(operand);
        console.log(secondNumber);
    }
}
