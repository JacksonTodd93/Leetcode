/**
 * Given an array A of positive integers, let S be the sum of the digits of the minimal element of A.

Return 0 if S is odd, otherwise return 1.

Example 1:

Input: [34,23,1,24,75,33,54,8]
Output: 0
Explanation:
The minimal element is 1, and the sum of those digits is S = 1 which is odd, so the answer is 0.
 */

var sumOfDigits = function(arr) {
  let min = Math.min(...arr);
  let sum = 0;
  minArray = min.toString();
  console.log(minArray);
  for (let i = 0; i < minArray.length; i++) {
      sum += parseInt(minArray[i]);
  }
  if (sum % 2 === 0) {
      return 1;
  }
  return 0;
};

/**
 * Accepted answer
 * Runtime: 80 ms, faster than 33.33% of JavaScript online submissions
 * Memory Usage: 38.7 MB, less than 20.83% of JavaScript online submissions
 */