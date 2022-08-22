  let numFirst = +prompt('Enter your first number');
  let numSecond = +prompt('Enter your second number');
  let operator = prompt('Choose an operation (+, -, *, /, %)');
  let result = '';


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
          case '<':
              return numFirst < numSecond;
          case '>':
              return numFirst > numSecond;
      }
  }

   if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        alert('This operation does not exist. Try again!');
    } else {
        result = calcResult(numFirst, numSecond, operator);

        if (isNaN(numFirst)  &&  (numSecond)) {  // isNaN(result)
            alert('enter valid numbers only!');

        } else {

            alert(`Your result is ${result}`);}

    }





