let firstNumber = 0;
let operand = "";
let secondNumber = 0;
let result = 0;

function operate(firstNumber, operand, secondNumber) {
    if (operand == "+") return firstNumber + secondNumber;
    if (operand == "-") return firstNumber - secondNumber;
    if (operand == "/") return firstNumber / secondNumber;
    if (operand == "*") return firstNumber * secondNumber;
}

const displayContainer = document.querySelector(".display");

const digitButton = document.querySelector(".digits");
digitButton.addEventListener("click", (event) => {
    if (Number.isInteger(parseInt(event.target.innerText))) {
        displayContainer.textContent += event.target.innerText;
    }
    console.log(event.target.innerText);
  });


const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", () => {
    displayContainer.textContent = "";
  });

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    firstNumber = parseInt(displayContainer.textContent);
    operand = "+"
    displayContainer.textContent = "";
  });

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {
    firstNumber = parseInt(displayContainer.textContent);
    operand = "-"
    displayContainer.textContent = "";
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
    firstNumber = parseInt(displayContainer.textContent);
    operand = "*"
    displayContainer.textContent = "";
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
    firstNumber = parseInt(displayContainer.textContent);
    operand = "/"
    displayContainer.textContent = "";
});

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
    secondNumber = parseInt(displayContainer.textContent);
    result = operate(firstNumber, operand, secondNumber);
    displayContainer.textContent = result;
});
 