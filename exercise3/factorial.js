// - Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.
function fibonacci(maxNumber) {
  if (maxNumber < 0) return [];

  const sequence = [0];
  if (maxNumber === 0) return sequence;

  let a = 0;
  let b = 1;

  while (b <= maxNumber) {
    sequence.push(b);
    [a, b] = [b, a + b];
  }

  return sequence;
}

console.log(fibonacci(20));
