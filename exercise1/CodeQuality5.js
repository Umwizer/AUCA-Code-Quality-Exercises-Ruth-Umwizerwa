function calculateFactorial(n) {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  return n <= 1 ? 1 : n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(5));
