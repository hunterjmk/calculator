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

let firstNumber;
let secondNumber;
let operator;

/* 
Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
*/

function operate(numOne, numTwo, opr) {
    if (opr === '+') {
        return add(numOne, numTwo);
    } else if (opr === '-') {
        return subtract(numOne, numTwo);
    } else if (opr === 'x') {
        return multiply(numOne, numTwo);
    } else if (opr === '/') {
        if (numTwo === 0){
            return 'Error!'        
        } else return divide(numOne, numTwo);
    } else return 'Please use an operator!';
};


// let result = operate(firstNumber, secondNumber, operator);

// console.log(result);

/*
Create the functions that populate the display when you click the number buttons. 

You should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/

let firstOprClick = true;
let firstClick = true; 

function displayNumber() {
    const numbers = document.querySelectorAll('.number');
    const signs = document.querySelectorAll('.operator');
    const text = document.querySelector('.text');

    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (firstClick) {
                text.textContent = '';

                text.textContent = number.textContent;

                firstClick = false;
            } else text.textContent += number.textContent;
        });
    });

    signs.forEach((sign) => {
        sign.addEventListener('click', () => {
            if (firstOprClick) {
                firstNumber = parseInt(text.textContent);

                operator = sign.textContent;
                firstClick = true;
                firstOprClick = false;
            } else {
                secondNumber = parseInt(text.textContent);

                text.textContent = operate(firstNumber, secondNumber, operator);

                firstNumber = parseInt(text.textContent);
                operator = sign.textContent;
                firstClick = true;
            }

            // let type = typeof firstNumber;
            // console.log(type, "=", firstNumber, operator);
        });
    })

equal(text);
clear(text);
}

displayNumber();

function equal(displayText) {
    const equal = document.querySelector('.equal');

    equal.addEventListener('click', () => {
        secondNumber = parseInt(displayText.textContent);

        let result = operate(firstNumber, secondNumber, operator);

        firstOprClick = true;
        operator = '';

        if (Number.isInteger(result) || typeof(result) === 'string') {
            displayText.textContent = result;
        } else {
            let roundedResult = Math.round(result * 100)/100;

            displayText.textContent = roundedResult;
        }

        
    });
}

function clear(displayText) {
    const clearBtn = document.querySelector('.clear');


    clearBtn.addEventListener('click', () => {
        displayText.textContent = '';

        displayText.textContent = 0;

        firstClick = true;
        firstOprClick = true;
        firstNumber = '';
        secondNumber = '';
        operator = '';
    });
}