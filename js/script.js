let numFirst = +prompt('Enter your first number');
let numSecond = +prompt('Enter your second number');
let operator = prompt('Choose an operation (+, -, *, /, %)');
let result = '';


if (isNaN(numFirst) || isNaN(numSecond)) {
    alert('enter valid numbers only!');
} else if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    alert('This operation does not exist. Try again!');
} else {
    result = calcResult(numFirst, numSecond, operator);
    alert(`Your result is ${result}`);
}


function calcResult(numFirst, numSecond, operator) {
    switch (operator) {
        case '+':
            return numFirst + numSecond;
        case '-':
            return numFirst - numSecond;
        case '*':
            return numFirst * numSecond;
        case '/':
            return numFirst / numSecond;

    }
}
