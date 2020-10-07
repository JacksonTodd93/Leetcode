/**
 Given a matrix mat where every row is sorted in strictly increasing order, return the smallest common element in all rows.

If there is no common element, return -1.
Example 1:

Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
Output: 5

I - an m * n matrix of integers.
O - an integer, the value of which is the smallest element that all rows have in column
C - should be possible to do in O(m*n) time complexity
E - if there is no common value, return -1. Example given above

General plan:
-Create a storage object
-Iterate over the first row, f
 */

const smallestCommonElement = function (matrix) {
  let obj = {};
  if (matrix.length === 1) {
    return matrix[0][0];
  }
  let firstRow = matrix[0];
  for (let i = 0; i < firstRow.length; i += 1) {
    obj[firstRow[i]] = 1;
  }
  let max = firstRow[firstRow.length - 1];
  for (let i = 1; i < matrix.length; i += 1) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j += 1) {
      if (obj[row[j]]) {
        obj[row[j]] += 1;
      }
    }
  }
  for (const key in obj) {
    if (obj[key] === matrix.length) {
      return parseInt(key);
    }
  }
  return -1;
};

/*
Solution accepted
Runtime: 100 ms, faster than 54.84% of JavaScript online submissions
Memory Usage: 44.9 MB, less than 41.94% of JavaScript online submissions
 */