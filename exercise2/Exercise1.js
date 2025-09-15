// 1. Write a function(s) that checks the level of nesting of an array.
// Then, use that function to flatten the array into a single-dimensional array.
function getNestingLevel(arr) {
  if (!Array.isArray(arr)) return 0;
  let maxDepth = 1;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      let depth = 1 + getNestingLevel(item);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }
  return maxDepth;
}

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      let flatItem = flattenArray(item);
      result = result.concat(flatItem);
    } else {
      result.push(item);
    }
  }
  return result;
}

let nested = [1, [2, [3, [4, 5]]], 6];

console.log("Nesting Level:", getNestingLevel(nested));
console.log("Flattened Array:", flattenArray(nested));
