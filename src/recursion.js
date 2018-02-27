// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // if (n <= 1) return 1;
  // return nFibonacci(n - 1) * nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // const nFactorial = n => {
  let result = 1;
  if (n === 0) return result;
  result = n * nFactorial(n - 1);
  return result;

  // if (n < 1) return 1;
  // return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const arr = [];
  const recurse = (someObj) => {
    const keys = Object.keys(someObj);
    keys.forEach((item) => {
      if (typeof someObj[item] === 'object') {
        recurse(someObj[item]);
      } else {
        arr.push(someObj[item]);
      }
    });
  };
  recurse(obj);
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
      return false;
    }
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
