var kthFactor = function(n, k) {
  smallArr = [];
  bigArr = [];
  for (var i = 1; i <= n; i++) {
      if (n % i === 0) {
          if (bigArr.includes(i)) {
              break;
          }
          smallArr.push(i);
          if (n / i !== i) {
          bigArr.shift(n / i);
          }
      }
      if (smallArr.length === k) {
          return smallArr[k - 1];
      }
  }
  var array = smallArr.concat(bigArr);
  if (array.length >= k) {
      return array[k - 1];
  } else {
      return -1;
  }
};