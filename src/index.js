
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let numbers = [];

  if (matrix === undefined) {
    return numbers;
  }

  let n = 0;
  for(let i = 0; i < matrix.length; i++ ) {
    if (i % 2 === 0) {
      for(let j = 0; j < matrix[i].length; j++) {
        numbers[n] = matrix[i][j];
        n++;
      }
    } else {
      for(let j = 0; j < matrix[i].length - 1; j--) {
        numbers[n] = matrix[i][j];
        n++;
      }
    }
  }
  return numbers;
}
