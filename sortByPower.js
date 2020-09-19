// Input - [hi, lo, k]. Hi - the top value in a range. Lo - the low value in a range. k - corresponds to the entry in my sorted range that I want to return
// Output - the kth entry in my array sorted by powers
// Constraints - If x is even, must divide by 2, if x is odd, must set x = 3x + 1
// Examples -
// Edge case - lo = hi = k = 1, return 1

// General plan
  // For each number in my range, perform the prescribed math operations until the number is reduced to 1
  // Count the number of operations that this requires
  // Store number of operations as key and the corresponding number as value. If there are two or more entries
  // with same number of ops, store them all at that key
  // When I have found this total for all numbers in my range, sort by this number of operations
  // Return the original number that is the k entry in my sorted array

// Psuedocode
  // create my storage object
  // loop from i = lo to i = hi
  // while x != 1
    // If even, divide by 2
    // If odd, x = 3x + 1;
    // increment a counting variable each operation
  // Once x = 1, set object[operations] = [i];
  // If object[operations] already exists, push i to the array at that key
  // After finishing loop from lo to hi, sort the array of keys of my object
  // loop over my sorted keys, and push all the values at each key to another array
  // return the k index value of that final array

const sortByPower = function(hi, lo, k) {
  let obj = {};
  for (let i = lo; i <= hi; i++) {
    let x = i;
    let count = 0;
    while (x !== 1){
      if (x % 2 === 0) {
        x = x / 2;
      } else {
        x = 3 * x + 1;
      }
      count += 1;
    }
    if (obj[count]) {
      obj[count].push(i);
    } else {
      obj[count] = [i];
    }
  }
  let sortedValues = Object.keys(obj).sort((a, b) => a - b);
  let finalArray = [];
  for (let i = 0; i < sortedValues.length; i++) {
    for (let j = 0; j < obj[sortedValues[i]].length; j++){
      finalArray.push(obj[sortedValues[i]][j]);
      if (finalArray.length === k) {
        return finalArray[k - 1];
      }
    }
  }
};

console.log(sortByPower(15, 12, 2));
