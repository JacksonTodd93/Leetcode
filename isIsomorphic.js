/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
 */

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  if (s === t) {
      return true;
  }
  const obj1 = {};
  const obj2 = {};
  for(let i = 0; i < s.length; i++) {
      const letter = s[i];
      const tLetter = t[i];
      if (!obj2[tLetter]) {
          obj2[tLetter] = letter;
      }
      if (!obj1[letter]) {
          obj1[letter] = tLetter;
      }
      console.log('obj1', obj1, 'obj2', obj2);
      if (obj1[letter] !== tLetter || obj2[tLetter] !== letter) {
          return false;
      }
  }
  return true;
};

let s = 'paper';
let t = 'title';
console.log(isIsomorphic(s, t));