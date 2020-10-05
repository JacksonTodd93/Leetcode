var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] !== 0) {
    return 0;
  } else if (nums[nums.length - 1] !== nums.length) {
    return nums.length;
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};