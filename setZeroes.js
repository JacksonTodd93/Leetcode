/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

I - a matrix of dimensions m x n
O - no return value, the input matrix should be modified in place
C - try to accomplish in constant space
E - Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]

General plan:
  -Create empty object for storage
  -Iterate through the matrix
  -Anywhere I find a 0 entry in the matrix, I will store the x, y coordinates of that 0 in the object
  -Iterate through matrix again, checking against my storage object. For each entry in the matrix, if the x coordinate is equal to one of my stored x coordinates in the object, change that entry to a 0. Same condition applies for y coordinates.

*/
var setZeroes = function(matrix) {
  var storage = {};
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        storage[`${i},${j}`] = [i, j];
      }
    }
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      for (var key in storage) {
        if (i === storage[key][0] || j === storage[key][1]) {
          matrix[i][j] = 0;
        }
      }
    }
  }
};

// Well, the above works, but is very inefficient:
// Runtime: 420 ms, faster than 5.54% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 45.9 MB, less than 5.03% of JavaScript online submissions for Set Matrix Zeroes.
