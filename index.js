const myEval = (expression) => {
  const arrayExpression = [];
  const pattern = /[0-9]/g;
  let number = "";

  // convert the expression to a calculable arrayExpression
  for (i = 0; i < expression.length; i++) {
    if (expression[i].match(pattern)) {
      number = Number(number + expression[i]);
      if (i === expression.length - 1) {
        arrayExpression.push(number);
      }
    } else {
      arrayExpression.push(number);
      arrayExpression.push(expression[i]);
      number = "";
    }
  }

  // calculation of the second priority (+ , -)
  var secArrayExpression = [...arrayExpression];
  var secondPriorityResult = 0;
  for (i = 0; i < secArrayExpression.length; i++) {
    let secondPriority = secArrayExpression.find(
      (item) => item === "-" || item === "+"
    );
    let indexOfSecondPriority = secArrayExpression.indexOf(secondPriority);
    if (secondPriority === "-") {
      secondPriorityResult =
        secArrayExpression[indexOfSecondPriority - 1] -
        secArrayExpression[indexOfSecondPriority + 1];
    } else if (secondPriority === "+") {
      secondPriorityResult =
        secArrayExpression[indexOfSecondPriority - 1] +
        secArrayExpression[indexOfSecondPriority + 1];
    } else {
      break;
    }
    secArrayExpression.splice(
      indexOfSecondPriority - 1,
      3,
      secondPriorityResult
    );
  }
  return secArrayExpression[0];
};

let expression = "8*2+4/1";
const result = myEval(expression);
