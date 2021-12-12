let value1 = null;
let value2 = null;
let operation = null;
let result = null;
let previousResult = null;

function onLeftOperandChange(value) {
  value1 = value
}

function onRightOperandChange(value) {
  value2 = value
  console.log('onRightOperandChange', value)
}

function onOperatorChange(value) {
  operation = value
  console.log('onOperatorChange', value)
}

function onSubmit () {
  result = finalResult()
  previousResult = finalResultInString()
  setExpression(result)
  setResult(previousResult)
  console.log('onSubmit')
}

function onClear () {
  value1 = null;
  value2 = null;
  operation = null;
  result = null;
  previousResult = null;
  console.log('onClear')
}

function finalResult(){
  switch(operation){
    case "ADDITION":return result != null ? result + Number(value2) : Number(value1) + Number(value2)
    case "SUBTRACTION":return result != null ? result - Number(value2) : Number(value1) - Number(value2)
    case "MULTIPLICATION":return result != null ? result * Number(value2) : Number(value1) * Number(value2)
    case "EXPONENTIATION":return result != null ? result ** Number(value2) : Number(value1) ** Number(value2)
    case "DIVISION":return result != null ? result / Number(value2) : Number(value1) / Number(value2)
    case "MODULUS":return result != null ? result % Number(value2) : Number(value1) % Number(value2)
    case "ROOT":return result != null ? result ** (1 / Number(value2)) : Number(value1) ** (1 / Number(value2))
  }
}

function sign(){
  switch(operation){
    case "ADDITION": return "+"
    case "SUBTRACTION": return "-"
    case "MULTIPLICATION": return "*"
    case "EXPONENTIATION": return "**"
    case "DIVISION": return "/"
    case "MODULUS": return "%"
    case "ROOT": return "√"
  }
}

function finalResultInString(){
  if(previousResult != null){
    return '('+previousResult+')' + sign() + value2
  }
  return value1 + sign() + value2
}
