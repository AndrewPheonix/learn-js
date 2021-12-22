let leftOperand = null;
let rightOperand = null;
let operation = null;
let result = null;
let previousResult = null;

function onLeftOperandChange(value) {
  leftOperand = value
  console.log('onLeftOperandChange', value)
};

function onRightOperandChange(value) {
  rightOperand = value
  console.log('onRightOperandChange', value)
};

function onOperatorChange(value) {
  operation = value
  console.log('onOperatorChange', value)
};

function onSubmit () {
  result = finalResult()
  previousResult = finalResultTwo()
  setExpression(previousResult)
  setResult(result)
  console.log('onSubmit')
};

function onClear () {
    console.log('onClear')
};

function finalResult() {
  switch (operation) {
    case "ADDITION":
      return result !== null ? result + Number(rightOperand) : Number(leftOperand) + Number(rightOperand)
    case "SUBTRACTION":
      return result !== null ? result - Number(rightOperand) : Number(leftOperand) - Number(rightOperand)
    case "MULTIPLICATION":
      return result !== null ? result * Number(rightOperand) : Number(leftOperand) * Number(rightOperand)
    case "EXPONENTIATION":
      return result !== null ? result ** Number(rightOperand) : Number(leftOperand) ** Number(rightOperand)
    case "DIVISION":
      return result !== null ? result / Number(rightOperand) : Number(leftOperand) / Number(rightOperand)
    case "MODULUS":
      return result !== null ? result % Number(rightOperand) : Number(leftOperand) % Number(rightOperand)
    case "ROOT":
      return result !== null ? result ** (1 / Number(rightOperand)) : Number(leftOperand) ** (1 / Number(rightOperand))
  }
};

function sign() {
  switch (operation) {
    case "ADDITION":
      return "+";
    case "SUBTRACTION":
      return "-";
    case "MULTIPLICATION":
      return "*";
    case "EXPONENTIATION":
      return "**";
    case "DIVISION":
      return "/";
    case "MODULUS":
      return "%";
    case "ROOT":
      return "√";
  }
};

function finalResultTwo() {
  if (previousResult !== null) {
    return '('+previousResult+')' + sign() + rightOperand
  }
    return leftOperand + sign() + rightOperand
};
