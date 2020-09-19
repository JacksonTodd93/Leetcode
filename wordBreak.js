var wordBreak = function(string, wordDict) {
  var result = false;
  var allDictionaryLetters = {};
  var wordSlicer = function(str) {
    for (var i = 0; i < wordDict.length; i++) {
      var wordLen = wordDict[i].length;
      if (str.slice(0, wordLen) === wordDict[i]) {
        var newSlice = str.slice(wordLen);
        if (newSlice.length === 0) {
          result = true;
        } else {
          wordSlicer(newSlice);
        }
      }
    }
  }
  for (var i = 0; i < wordDict.length; i++) {
    var word = wordDict[i];
    for (var j = 0; j < word.length; j++) {
      allDictionaryLetters[word[j]] = word[j];
    }
  }
  for (var i = 0; i < string.length; i++) {
    if (!Object.keys(allDictionaryLetters).includes(string[i])) {
      return result;
    }
  }
  wordSlicer(string);
  return result;
};

console.log(wordBreak('leetcode', ['leet', 'code']));