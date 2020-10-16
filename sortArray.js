/**
 * https://leetcode.com/problems/sort-an-array/
 *
 * Given an array of integers nums, sort the array in ascending order.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 */

 var sortArray = function(arr) {
   if (arr.length <= 1) {
     return arr;
   }
   let lessThan = [];
   let greaterThan = [];
   let pivot = arr[0];
   for (let i = 1; i < arr.length; i++) {
     if (arr[i] <= pivot) {
       lessThan.push(arr[i]);
     } else {
       greaterThan.push(arr[i]);
     }
   }
   return sortArray(lessThan).concat(pivot, sortArray(greaterThan));
 };

 let nums = [5,2,3,1]
 console.log(sortArray(nums));