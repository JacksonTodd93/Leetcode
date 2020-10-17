/**
 * @param {number[]} arr
 * @return {boolean}
 *
 *
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

 */
var uniqueOccurrences = function(arr) {
  let storage = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (storage[arr[i]]) {
      storage[arr[i]] += 1;
    } else {
      storage[arr[i]] = 1;
    }
  }
  let testArray = [];
  for (const key in storage) {
    testArray.push(storage[key]);
  }
  testArray.sort((a, b) => a - b);
  for (let i = 1; i < testArray.length; i += 1) {
    if (testArray[i] === testArray[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(uniqueOccurrences([1,2,2,2,1,1,3]))