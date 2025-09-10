function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
const num = [10, 20, 30, 10, 50];
console.log(calculateAverage(num));
