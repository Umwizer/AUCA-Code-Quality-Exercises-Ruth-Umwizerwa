// 3. Implement a JavaScript function to find the sum of all elements in an array recursively.
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([]));
console.log(sumArray([10, -2, 7]));
