let firstNumber = 0;
let operand = "";
let secondNumber = 0;

function operate(firstNumber, operand, secondNumber) {
    if (operand == "+") return firstNumber + secondNumber;
    if (operand == "-") return firstNumber - secondNumber;
    if (operand == "/") return firstNumber / secondNumber;
    if (operand == "*") return firstNumber * secondNumber;
}

const displayContainer = document.querySelector(".display");

const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", () => {
    displayContainer.textContent += "1";
  });

const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", () => {
    displayContainer.textContent += "2";
  });

const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", () => {
    displayContainer.textContent += "3";
  });

const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", () => {
    displayContainer.textContent += "4";
  });

const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", () => {
    displayContainer.textContent += "5";
  });

const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", () => {
    displayContainer.textContent += "6";
  });
  
const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", () => {
    displayContainer.textContent += "7";
  });

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", () => {
    displayContainer.textContent += "8";
  });

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", () => {
    displayContainer.textContent += "9";
  });

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", () => {
    displayContainer.textContent += "0";
  });