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


// let result = operate(firstNumber, secondNumber, operator);

// console.log(result);

/*
Create the functions that populate the display when you click the number buttons. 

You should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/

function displayNumber() {
    const numbers = document.querySelectorAll('.number');
    const text = document.querySelector('.text');

    let firstClick = true;

    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (firstClick) {
                text.textContent = '';

                text.textContent = number.textContent;

                firstClick = false;
            } else text.textContent += number.textContent;
        });
    });
}

displayNumber();