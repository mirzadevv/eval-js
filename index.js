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
};

let expression = "8*2+4/1";
const result = myEval(expression);
