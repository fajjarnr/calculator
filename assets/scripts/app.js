const defaultResult = 0;
let currentResult = defaultResult;

// get user input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// generate and write calculation log
function createAndWriteOutput(operator, beforeResult, calcNumber) {
  const calcDescription = `${beforeResult} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
