/**
 * https://leetcode.com/problems/merge-intervals/
 *
 *
 *
 * Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

For any given entry in intervals, it is guaranteed that intervals[i][0] <= intervals[i][1]
 */

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergeHelper = function (arr) {
    let mergeCount = 0;
    for (i = 1; i < arr.length; i += 1) {
      if (arr[i][0] <= arr[i - 1][1]) {
        arr[i][0] = Math.min(arr[i - 1][0], arr[i][0]);
        arr[i][1] = Math.max(arr[i - 1][1], arr[i][1]);
        arr.splice(i - 1, 1);
        mergeCount++;
      }
    }
    if (mergeCount === 0) {
      return arr;
    } else {
      return mergeHelper(arr);
    }
  }
  return mergeHelper(intervals);
};

/**
 * Accepted answer.
 * Beats 42% of JavaScript submissions for speed,
 * Beats 25% of JavaScript submissions for memory
 *
 *
 *
 *
 *
 *
 * Sorted the array
 * for each entry in the array, starting at 1
 * compare each entry to the entry before it
 * if the first entry in the tuple at i is less than or equal to second entry at i - 1 we need to merge
 * re-assign values at i:
 * array[i][0] will be array[i-1][0]
 * [[1, 5], [2, 3]] -> [1,5]
 * array[i][1] will be greater of the two second entries
 * spliced out i - 1
 *
 *
 *

 */

const mergeTwo = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let mergeIndex = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[mergeIndex][1]) {
      intervals[mergeIndex][1] = Math.max(intervals[i][1], intervals[mergeIndex][1]);
    } else {
      mergeIndex++;
      intervals[mergeIndex] = intervals[i];
    }
  }
  return intervals.slice(0, mergeIndex + 1);
};

let intervals = [[1, 3], [2, 6], [6, 10]];
console.log(mergeTwo(intervals));