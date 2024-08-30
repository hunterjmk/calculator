/* 
Create functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide

*/

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

/* 
Create a variable for the first number, the operator, and the second number.
*/

let firstNumber = 10;
let secondNumber = 5;
let operator = '+';

/* 
Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
*/

function operate(numOne, numTwo, opr) {
    if (opr === '+') {
        return add(numOne, numTwo);
    } else if (opr === '-') {
        return subtract(numOne, numTwo);
    } else if (opr === '*') {
        return multiply(numOne, numTwo);
    } else if (opr === '/') {
        return divide(numOne, numTwo);
    } else return 'The operator is not recognizable';
};


let result = operate(firstNumber, secondNumber, operator);

console.log(result);