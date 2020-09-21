var processQueries = function (queries, m) {
  var permutation = [];
  var result = [];
  for (var i = 1; i <= m; i += 1) {
    permutation.push(i);
  }
  for (var i = 0; i < queries.length; i += 1) {
    var index = permutation.indexOf(queries[i]);
    result.push(index);
    var value = permutation[index];
    permutation.splice(index, 1);
    permutation.unshift(value);
  }
  return result;
};