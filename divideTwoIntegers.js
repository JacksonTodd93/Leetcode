var divide = function (dividend, divisor) {
  var overflow = Math.pow(2, 31);
  if (dividend >= overflow) {
    dividend = overflow - 1;
  } else if (dividend <= -overflow) {
    dividend = -overflow;
  } else if (divisor >= overflow) {
    divisor = overflow - 1;
  } else if (divisor <= -overflow) {
    divisor = -overflow;
  }
  var count = 0;
  if (dividend < 0 && divisor < 0) {
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
  } else if (dividend < 0) {
    var newDividend = Math.abs(dividend);
    while (newDividend >= divisor) {
      newDividend -= divisor;
      count -= 1;
    }
    if (count === overflow) {
      return count - 1;
    }
    return count;
  } else if (divisor < 0) {
    var newDivisor = Math.abs(divisor);
    while (dividend >= newDivisor) {
      dividend -= newDivisor;
      count -= 1;
    }
    if (count === overflow) {
      return count - 1;
    }
    return count;
  }
  while (dividend >= divisor) {
    dividend -= divisor;
    count += 1;
  }
  if (count === overflow) {
    return count - 1;
  }
  return count;
};