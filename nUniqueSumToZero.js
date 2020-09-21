/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4]
*/

var sumZero = function(n) {
  var arr = [];
  if (n % 2 === 1) {
      arr.push(0);
  }
  var num = 1;
  while (arr.length < n) {
      arr.push(num, -num);
      num += 1;
  }
  return arr;
};