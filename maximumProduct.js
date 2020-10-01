/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let obj = {
    high: -Infinity,
    middle: -Infinity,
    low: -Infinity
  };
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current >= obj.high) {
      obj.low = obj.middle;
      obj.middle = obj.high;
      obj.high = current;
    } else if (current > obj.middle) {
      obj.low = obj.middle;
      obj.middle = current;
    } else if (current > obj.low) {
      obj.low = current;
    }
  }
  return obj.high * obj.middle * obj.low;
};

