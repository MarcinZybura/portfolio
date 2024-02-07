const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathSign');
const numbersBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');


let result = '';


function operate() {
    if (currentNumber.innerHTML === '' && (this.textContent === '±' || this.textContent === '-')) {
        currentNumber.innerHTML = '-';
        return;
    }
    else if (currentNumber.innerHTML === '') {
        return;
    }

    if (mathSign.innerHTML !== '') {
        showResult();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;

    if (this.textContent === '±') return mathSign.innerHTML = '-';
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function displayNumbers() {
    if (this.textContent === ',' && currentNumber.innerHTML.includes(',')) return;
    clearBtn.innerHTML = 'C';
    currentNumber.innerHTML += this.textContent;

}


function showResult() {

    if (currentNumber.innerHTML === '' || previousNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case 'x':
            result = a * b;
            break;
        case '-':
            result = b - a;
            break;
        case '÷':
            result = b / a;
            break;
        case '%':
            result = b % a;
            break;
    }
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearScreen() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    clearBtn.innerHTML = 'AC';
}




operatorBtn.forEach((button) => button.addEventListener('click', operate));

numbersBtn.forEach((button) => button.addEventListener('click', displayNumbers));

equalsBtn.addEventListener('click', showResult);

clearBtn.addEventListener('click', clearScreen);
