let firstNumber = +prompt('Enter your first number');
let secondNumber = +prompt('Enter your second number');
let operation = prompt('Choose an operation (*/-+)');
let result = '';

   function calcResult(firstNumber, secondNumber, operation) {
     return eval(`${firstNumber}` + operation + `${secondNumber}`);
 }


 if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
   alert('This operation does not exist. Try again!');
 } else {
     result = calcResult(firstNumber, secondNumber, operation);

    if (isNaN(result)) {
         alert('enter valid numbers only!');
    } else {

        alert(`Your result is ${result}`);}

 }
////////////////////////
//
//   let numFirst = +prompt('Введите первое число');
//   let numSecond = +prompt('Введите второе число');
//   let operator = prompt('Введите знак операции (+, -, *, /, %)'); // любой: +, -, *, /, %
//   let result = '';
//
//
//   function calcResult(numFirst, numSecond, operator) {
//       switch (operator) {
//           case '+':
//               return numFirst + numSecond;
//           case '-':
//               return numFirst - numSecond;
//           case '*':
//               return numFirst * numSecond;
//           case '/':
//               return numFirst / numSecond;
//           case '<':
//               return numFirst < numSecond;
//           case '>':
//               return numFirst > numSecond;
//       }
//   }
//
//   if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
//       alert('This operation does not exist. Try again!');
//   } else {
//       result = calcResult(numFirst, numSecond, operator);
//
//       if (isNaN(numFirst)  &&  (numSecond)) {  // isNaN(result)
//           alert('enter valid numbers only!');
//
//       } else {
//
//           alert(`Your result is ${result}`);}
//
//   }
//
