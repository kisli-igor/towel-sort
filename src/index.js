
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!(Array.isArray(matrix) && matrix)) return [];

  let sorted = [];
  for (let k = 0; k < matrix.length; k++)
    {
      if ( (k + 1) % 2 == 0){
        sorted = sorted.concat(matrix[k].reverse())
      } else sorted = sorted.concat(matrix[k]);
    }
  return sorted;
}




/*
{ matrix[k].reverse()}
      for (let l = 0; l < matrix[k].length; l++){
        sorted.push(matrix[k][l])
      }
*/