const Stack = require('./stack');

// converts any decimal number to (2 <= base <= 36)
function baseConverter({ decimalNumber, base }) {
  const remainderStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decimalNumber;
  let remainder;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    remainder = number % base;
    remainderStack.push(remainder);
    number = Math.floor(number / base);
  }

  while (!remainderStack.isEmpty()) {
    baseString += digits[remainderStack.pop()];
  }

  return baseString;
}

console.log(baseConverter({ base: 6, decimalNumber: 7 }));