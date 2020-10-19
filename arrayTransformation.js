/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function (arr) {
  let modified = true;
  while (modified === true) {
    modified = false;
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
        arr[i] += 1;
        modified = true;
      } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        arr[i] -= 1;
        modified = true;
      }
    }
  }
  return arr;
};
