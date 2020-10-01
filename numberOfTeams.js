
 //@param {number[]} rating
 // @return {number}


 /**
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).



Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1).

I - an array of numbers, these numbers represent the 'ratings' of soldiers
O - an integer, representing the number of teams of 3 that can be formed from the array of soldiers
C - ratings must meed conditions x > y > z or x < y < z to be a valid team. The ratings must be considered in the order they appear in the array
E - example above.

General plan:
(very naive solution)
-initialize a counting variable
-
 */
var numTeams = function(rating) {
  var count = 0;
  for (var i = 0; i < rating.length; i++) {
    for (var j = 1; j < rating.length; j++) {
      for (var k = 2; k < rating.length; k++) {
        if (j <= i) {
          j = i + 1;
        }
        if (k <= j) {
          k = j + 1;
        }
        if (rating[i] < rating[j] && rating[j] < rating[k] || rating[i] > rating[j] &&  rating[j] > rating[k]) {
          count++;
        }
      }
    }
  }
  return count;
};
numTeams([2,5,3,4,1]);
// The above solution is accepted on leetcode, but inefficient:
// Runtime: 108 ms, faster than 31.23% of JavaScript online submissions for Count Number of Teams.
// Memory Usage: 39.2 MB, less than 19.16% of JavaScript online submissions for Count Number of Teams.

