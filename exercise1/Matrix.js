function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (rowSum, row) => rowSum + row.reduce((colSum, value) => colSum + value, 0),
    0
  );
}
