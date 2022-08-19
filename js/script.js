let firstNumber = +prompt('Enter your first number');
let secondNumber = +prompt('Enter your second number');
let operation = prompt('Choose an operation (*/-+)');
let result = '';

function calcResult(firstNumber, secondNumber, operation) {
    return eval(`${firstNumber}` + operation + `${secondNumber}`);}


if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    alert('This operation does not exist. Try again!');
} else {
    result = calcResult(firstNumber, secondNumber, operation);

    if (isNaN(result)) {
        alert('enter valid numbers only!');
    } else {

    alert(`Your result is ${result}`);}

}


