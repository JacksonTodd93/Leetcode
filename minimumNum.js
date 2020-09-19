// Input - an integer n, representing the length of an array
//    arr[i] = (2 * 1) + 1
// Output - An integer, o, representing the minimum number of operations needed to make the whole array equal
// Constraint - each operation must have both a plus and a minus
// Examples:
// n = 3
// [1, 3, 5]
// output = 2 [2, 3, 4] -> [3, 3, 3]
// n = 5
// [1, 3, 5, 7, 9]
// n = 6
// [1, 3, 5, 7, 9, 11]
// output = 9

// Look at the first position arr[0]
// Look at the last position

// if array is odd length:
  // find the center of the array
  // Find the average of the first and last entries in the array
  // The difference between first entry val and that average is number of operations
  // iterate over first half of my array
  // difference between arr[i] and the average is the number of operations
  // repeat until center of array
  // return total of all operations up to that point
// if array is even length:
  // Find the average of the first and last entries
  // Iterate over first half of array, find difference between current entry and the calculated average
  // Total up all operations


  // ^ this solution worked, but is far from optimal. After testing input values 1 through 10, I realized there
  // is a fairly simple mathematical relationship between input/output:

var findMinimumOperations = function(n) {
  return Math.floor(n / 2) * Math.ceil(n / 2);
}
