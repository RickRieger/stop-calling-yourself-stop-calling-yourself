// Task 1: add three question marks to the string
function addThreeQuestionMarks(string) {
  return string + '???';
}

// Task 2: join two strings with a space in the middle
function joinWithSpace(first, second) {
  return first + ' ' + second;
}

// Task 3: subtract three numbers (first - second - third)
function subtractThreeNums(a, b, c) {
  return a - b - c;
}

// Task 4: subtract three numbers in reverse order (third - second - first)
function subtractThreeNumsReverse(a, b, c) {
  return c - b - a;
}

// Task 5: repeat a string three times
function tripleString(string) {
  return string + string + string;
}

// Task 6: square root of a number
function squareRoot(num) {
  return Math.sqrt(num);
}

// Print every example from the assignment, plus my own, when run with
// `node main.js`. (Originally I used Quokka, which shows values next to the
// code; plain `answer;` lines print nothing outside Quokka.)
// `require.main === module` is true only when this file is run directly, so the
// tests can import the functions without all this printing.
if (require.main === module) {
  console.log('Task 1: add three question marks');
  console.log(addThreeQuestionMarks('hello')); // 'hello???'
  console.log(addThreeQuestionMarks('what even')); // 'what even???'
  console.log(addThreeQuestionMarks('Are you serious')); // my own example

  console.log('\nTask 2: join with a space');
  console.log(joinWithSpace('oh', 'hi')); // 'oh hi'
  console.log(joinWithSpace('well', 'hello back')); // 'well hello back'
  console.log(joinWithSpace('WhatIfWeAllStartedCommunicatingWithCamelSpace?', 'look Mom, space.')); // my own example

  console.log('\nTask 3: subtract three numbers');
  console.log(subtractThreeNums(10, 1, 2)); // 7
  console.log(subtractThreeNums(8, 3, 5)); // 0
  console.log(subtractThreeNums(100, 80, 25)); // -5

  console.log('\nTask 4: subtract in reverse order');
  console.log(subtractThreeNumsReverse(10, 1, 2)); // -9
  console.log(subtractThreeNumsReverse(2, 1, 10)); // 7

  console.log('\nTask 5: triple a string');
  console.log(tripleString('codeimmersives')); // 'codeimmersivescodeimmersivescodeimmersives'
  console.log(tripleString('is the best')); // 'is the bestis the bestis the best'
  console.log(tripleString('isThisGoodEnough?')); // my own example

  console.log('\nTask 6: square root');
  console.log(squareRoot(16)); // 4
  console.log(squareRoot(4)); // 2
  console.log(squareRoot(9)); // 3
  console.log(squareRoot(36)); // my own example
}

module.exports = {
  addThreeQuestionMarks,
  joinWithSpace,
  subtractThreeNums,
  subtractThreeNumsReverse,
  tripleString,
  squareRoot,
};

//* :)
