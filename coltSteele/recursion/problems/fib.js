// fib
// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

function fib(num) {
  let fibArr = [1, 1];
  const helper = (n1, n2) => {
    if (fibArr.length >= num) return;
    fibArr.push(n1 + n2);
    helper(fibArr[fibArr.length - 1], fibArr[fibArr.length - 2]);
  };
  helper(fibArr[0], fibArr[1]);
  return fibArr[num - 1];
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
