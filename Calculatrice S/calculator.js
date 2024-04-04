// calculator.js

function appendNumber(number) {
    input.value += number;
}

function appendOperator(operator) {
    input.value += operator;
}

function appendDecimal() {
    if (!input.value.includes('.')) {
        input.value += '.';
    }
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}

function clearInput() {
    input.value = '';
}

// Additional functions
function sinFunction() {
    input.value = Math.sin(parseFloat(input.value));
}

function cosFunction() {
    // Convert degrees to radians
    let radians = parseFloat(input.value) * (Math.PI / 180);
    input.value = Math.cos(radians);
}

function tanFunction() {
    input.value = Math.tan(parseFloat(input.value));
}

function sqrtFunction() {
    input.value = Math.sqrt(parseFloat(input.value));
}

function logFunction() {
    input.value = Math.log(parseFloat(input.value));
}

function expFunction() {
    input.value = Math.exp(parseFloat(input.value));
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialFunction() {
    input.value = factorial(parseInt(input.value));
}
