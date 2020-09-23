/*
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.storage = nums;
};

// Return the dotProduct of two sparse vectors
/*
* @param {SparseVector} vec
* @return {number}
*/

SparseVector.prototype.dotProduct = function(vec) {
  var sum = 0;
  for (var i = 0; i < this.storage.length; i += 1){
    sum += this.storage[i] * vec.storage[i];
  }
  return sum;
};

// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
// 09/22/2020 23:37	Accepted	100 ms	49.3 MB	javascript