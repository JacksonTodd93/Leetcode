
/**
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n)
.
I - an array of unsorted integers, and target value
O - the minimum length of a subarray the sum of whose contents are >= target value
C - Try to do in O(n log n) time
E - example above.
Edge case - if there is no valid subarray, return 0

General plan:
-Initialize a result variable, set to 0. We will re-assign this variable as we find shorter and shorter sub-arrays that meet the condition. If we never find a suitable subarray, the variable will not be re-assigned, and return 0, satisfying our edge case.

-Iterate along the array, keeping track of the endpoint of the subarray currently under consideration and running sum of that subarray.
-At any point in iterating, if we encounter a value equal to or greater than the target value, we can terminate the function there and return 1
-If the running sum is less than the target, incorporate the next element into the running count
target = 6, arr = [1, 3, 5]
 */
var minSubArrayLen = function (target, nums) {
  let result = 0;
  let endpoint = 1;
  let runningsum = 0;
  for (let i = 0; i < nums.length; i++) {
    runningSum = nums[i];
    endpoint = i + 1;
    while (runningSum < target) {
      runningSum += nums[endpoint];
      endpoint++;
    }
    console.log(runningSum, i, endpoint);
    if (endpoint - i < result || result === 0) {
      result = endpoint - i;
      runningSum = 0;
    }
  }
  return result;
};

let s = 7, nums = [2,3,1,2,4,3]
let target = 11, arr = [1,2,3,4,5]
console.log(minSubArrayLen(target, arr))