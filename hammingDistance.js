var hammingDistance = function (x, y) {
  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
  let xBin = dec2bin(x);
  let yBin = dec2bin(y);
  let distance = 0;
  console.log(xBin, yBin);
  for (i = 0; i < xBin.length; i++) {
    if (xBin[i] !== yBin[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(hammingDistance(1, 4));