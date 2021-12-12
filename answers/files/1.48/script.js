let value1 = null;
let value2 = null;
let operation = null;
let result = null;
let previousResult = null;

function onLeftOperandChange(value) {
  value1 = value
  console.log('onLeftOperandChange', value)
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
  previousResult = finalResultTwo()
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

function finalResult() {
  switch (operation) {
    case "ADDITION":
      return result !== null ? result + Number(value2) : Number(value1) + Number(value2)
    case "SUBTRACTION":
      return result !== null ? result - Number(value2) : Number(value1) - Number(value2)
    case "MULTIPLICATION":
      return result !== null ? result * Number(value2) : Number(value1) * Number(value2)
    case "EXPONENTIATION":
      return result !== null ? result ** Number(value2) : Number(value1) ** Number(value2)
    case "DIVISION":
      return result !== null ? result / Number(value2) : Number(value1) / Number(value2)
    case "MODULUS":
      return result !== null ? result % Number(value2) : Number(value1) % Number(value2)
    case "ROOT":
      return result !== null ? result ** (1 / Number(value2)) : Number(value1) ** (1 / Number(value2))
  }
}

//   switch(operation) {
//     case "ADDITION": {
//       if (result !== null) {
//         return result + Number(value2)
//       } else {
//         return Number(value1) + Number(value2)
//       }
//     }
//
//     case "SUBTRACTION": {
//       if (result !== null) {
//         return result - Number(value2)
//       } else {
//         return Number(value1) - Number(value2)
//       }
//     }
//
//     case "MULTIPLICATION": {
//       if (result !== null) {
//         return result * Number(value2)
//       } else {
//         return Number(value1) * Number(value2)
//       }
//     }
//
//     case "EXPONENTIATION": {
//       if (result !== null) {
//         return result ** Number(value2)
//       } else {
//         return Number(value1) ** Number(value2)
//       }
//     }
//
//     case "DIVISION": {
//       if (result !== null) {
//         return result / Number(value2)
//       } else {
//         return Number(value1) / Number(value2)
//       }
//     }
//
//     case "MODULUS": {
//       if (result !== null) {
//         return result % Number(value2)
//       } else {
//         return Number(value1) % Number(value2)
//       }
//     }
//
//     case "ROOT": {
//       if (result !== null) {
//         return result ** (1 / Number(value2))
//       } else {
//         return Number(value1) ** (1 / Number(value2))
//       }
//     }

function sign() {
  switch (operation) {
    case
    "ADDITION"
    :
      return "+"
    case
    "SUBTRACTION"
    :
      return "-"
    case
    "MULTIPLICATION"
    :
      return "*"
    case
    "EXPONENTIATION"
    :
      return "**"
    case
    "DIVISION"
    :
      return "/"
    case
    "MODULUS"
    :
      return "%"
    case
    "ROOT"
    :
      return "√"
  }
}

  // if (operation === "ADDITION") {
  //   return "+"
  // }
  // if (operation === "SUBTRACTION") {
  //   return "-"
  // }
  // if (operation === "MULTIPLICATION") {
  //   return "*"
  // }
  // if (operation === "EXPONENTIATION") {
  //   return "**"
  // }
  // if (operation === "DIVISION") {
  //   return "/"
  // }
  // if (operation === "MODULUS") {
  //   return "%"
  // }
  // if (operation === "ROOT") {
  //   return "√"
  // }

function finalResultTwo() {
  if (previousResult !== null) {
    return '('+previousResult+')' + sign() + value2
  } else {
    return value1 + sign() + value2
  }
}
