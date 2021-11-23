const Stack = require('./stack');

function decimalToBinary(decimalNumber) {
  const remainderStack = new Stack();
  let number = decimalNumber;
  let remainder;
  let binaryString = '';

  while (number > 0) {
    remainder = number % 2;
    remainderStack.push(remainder);
    number = Math.floor(number / 2);
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(777));