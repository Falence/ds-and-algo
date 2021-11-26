const Deque = require('./deque');

function palindromeChecker({ aString }) {
  // if (
  //   aString === undefined || aString === null ||
  //   (aString !== null && aString.length === 0)
  // ) {
  //   return false;
  // }
  if (!aString) return false; // if it's 'null' or 'undefined' or ''
  const deque = new Deque();
  const lowerString = aString.toLowerCase().split(' ').join('');
  let isTrue = true;
  let firstChar, lastChar;

  // add all characters of the string to a deque
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  
  while(deque.size() > 1 && isTrue) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    isTrue = (firstChar === lastChar);
    // isTrue = firstChar !== lastChar ? false : true;
  }

  return isTrue
}

const first = 'Was it a car or a cat i saw';
const second = 'Step on no pets';
console.log(palindromeChecker({aString: first})); // true
console.log(palindromeChecker({aString: second})); // true
