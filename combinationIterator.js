/**
 * @param {string} characters
 * @param {number} combinationLength
 * Design an Iterator class, which has:

A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
A function next() that returns the next combination of length combinationLength in lexicographical order.
A function hasNext() that returns True if and only if there exists a next combination.
 

Example:

CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false
 
I - a string of distinct lowercase characters sorted in alphabetical order, and an integer representing the number of letters to be in each combination
O - two methods:
next - returns the next combination in lexicographical order
hasNext - returns a boolean indicating whether a valid 'next' currently exists
Constraints:
1 <= combinationLength <= characters.length <= 15
There will be at most 10^4 function calls per test.
The input string characters are in sorted order
It's guaranteed that all calls of the function next are valid.

Example is above

General plan:
Consider example str = 'abcde', num = 3
Next should give the sequence: abc, abd, abe, acd, ace, ade, bcd, bce, bde, cde
 */
var CombinationIterator = function(characters, combinationLength) {
    
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */