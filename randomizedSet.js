var RandomizedSet = function() {
    this.storage = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!this.storage[val] && this.storage[val] !== 0) {
    this.storage[val] = val;
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.storage[val] && this.storage[val] !== 0) {
    return false;
  }
  delete this.storage[val];
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  var randNum = Math.floor(Math.random() * Object.keys(this.storage).length);
  return this.storage[Object.keys(this.storage)[randNum]];
};

var randomizedSet = new RandomizedSet();
console.log(randomizedSet.remove(0));
console.log(randomizedSet.remove(0));
console.log(randomizedSet.insert(0));
console.log(randomizedSet.getRandom(0));
console.log(randomizedSet.remove(0));
console.log(randomizedSet.insert(0));