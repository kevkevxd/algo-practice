// write a function called power which accepts a base and an exponent.
// Function should return the power of the base to the exponent
// function should mimic the func of math.pow(); do not worry about neg
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  //basecase
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// write a function factorial which accepts a num and returns the factorial
// factorial is a product of an integer and alal the intergers below it
function factorial(x) {
  //basecase
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

// write a function called productofarray which takes an array of num and returns product of them all
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// The slice() method returns a shallow copy of a portion of an array into
// a new array object selected from start to end (end not included) where start
// and end represent the index of items in that array.
// The original array will not be modified.

// write a function called recursiveRange which accepts a num and adds up
// all the numbers from 0 to the number passed to the function
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(x) {
  if (x === x) {
    return 0;
  }
  return x + recursiveRange(x - 1);
}

// write a recursive function called fib which accepts a num and returns
// the nth num to the Fibonacci sequence. Fib is a sequnce of whole nums
// which start with 1 and 1, and where every num therafter is equal to the sum of the prev 2 nums
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811

function fib(n) {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
// 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34
// 1   2   3   4   5   6   7    8    9
