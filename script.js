let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(operation) {
    if (display.value === '') return;
    if (currentOperation !== null) {
        calculateResult();
    }
    display.value += ' ' + operation + ' ';
    currentOperation = operation;
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
        currentOperation = null;
        shouldResetDisplay = true;
    } catch (e) {
        display.value = 'Error';
        currentOperation = null;
        shouldResetDisplay = true;
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    firstOperand = null;
    shouldResetDisplay = false;
}
