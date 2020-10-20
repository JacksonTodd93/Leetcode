/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)

346. Moving Average from Data Stream
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) /


*/
/**
 * Initialize your data structure here.
 * @param {number} size
 */
  var MovingAverage = function(size) {
    this.storage = [];
    this.size = size;
  };

  /**
  * @param {number} val
  * @return {number}
  */
  MovingAverage.prototype.next = function(val) {
    this.storage.push(val);
    if (this.storage.length > this.size) {
      this.storage.shift();
    }
    return this.storage.reduce((acc, val) => acc + val, 0) / this.storage.length;
  };

