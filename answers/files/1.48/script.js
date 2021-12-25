let leftOperand = null;
let rightOperand = null;
let operation = null;
let result = null;
let previousResult = null;

function onLeftOperandChange(value) {
  leftOperand = value
}

function onRightOperandChange(value) {
  rightOperand = value
}

function onOperatorChange(value) {
  operation = value
}

function onSubmit () {
  result = finalResult()
  previousResult = finalResultTwo()
  setExpression(previousResult)
  setResult(result)
}

function onClear () {
  result = null;
  previousResult = null;
}
    
function finalResult() {
  let firstOperand = result !== null ? Number(result) : Number(leftOperand)
  let secondOperand =  Number(rightOperand)
  switch (operation) {
    case "ADDITION":
      return firstOperand + secondOperand
    case "SUBTRACTION":
      return firstOperand - secondOperand
    case "MULTIPLICATION":
      return firstOperand * secondOperand
    case "EXPONENTIATION":
      return firstOperand ** secondOperand
    case "DIVISION":
      return firstOperand / secondOperand
    case "MODULUS":
      return firstOperand % secondOperand
    case "ROOT":
      return firstOperand ** (1 / secondOperand)
  }
}


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
}

function finalResultTwo() {
  if (previousResult !== null) {
    return '('+previousResult+')' + sign() + rightOperand
  }
    return leftOperand + sign() + rightOperand
}
