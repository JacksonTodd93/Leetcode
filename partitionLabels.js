/*
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.

I - a string containing lower case letters
O - an array containing the length of partitions. We want to partition the string into as many possible parts as possible such that a given letter only appears in one partition
C - string will only contain lower case letters. string will always be of at least length 1
E - example, see above.
E - edge cases: string.length === 1 --> return [1]
string contains all unique characters, return [1, 1, ... , 1];

General plan -
Loop through the string.
For each character in the string, store that character and its first index position in an object
As we continue to iterate over the string:
- If I hit a character I've already hit, store the last index position of that character in my object.
-- For instance if I hit the character 'a' at both index 0 and index 7, I know that all characters in between 0 and 7 will need to be part of a single partition
- Continue to update the 'last index position' value for a given character as I continue to find additional instances of it

*/

var partitionLabels = function (string) {
  var result = [];
  var str = string;
  var obj = {};
  for (var i = 0; i < str.length; i += 1) {
    if (obj[str[i]]) {
      obj[string[i]].last = i;
    } else {
      obj[str[i]] = {
        first: i,
        last: i
      };
    }
  }
  for (var key in obj) {
    for (var keyTwo in obj) {
      if (obj[keyTwo].first > obj[key].first && obj[keyTwo].last < obj[key].last) {
        delete obj[keyTwo];
      }
    }
  }
  var letters = Object.keys(obj);
  var start = 0;
  var finish = obj[letters[0]].last;
  for (var i = 1; i < letters.length; i += 1) {
    if (finish > obj[letters[i]].first) {
      finish = obj[letters[i]].last;
    } else {
      result.push(finish - start + 1);
      start = obj[letters[i]].first;
      finish = obj[letters[i]].last;
    }
  }
  result.push(finish - start + 1);
  return result;
}

console.log(partitionLabels('ababcbacadefegdehijhklij'))
// https://leetcode.com/problems/partition-labels/