/*
A conveyor belt has packages that must be shipped from one port to another within D days.

The i-th package on the conveyor belt has a weight of weights[i].  Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation:
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.

Input - an array of numbers representing the weight of packages, and an integer representing the number of days within which all packages must be shipped
Output - the smallest possible weight capacity ship that can ship all packages in the allotted days
Constraints:
1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500
Edge case - D === 1 -> return value will be the sum of all weights in the array
array.length === 1 -> return value will be equal to the value in the array
Examples are above

General plan -
There are two possible lower bound values for the solution to this problem:

- The largest single element in the array
- The total weight of all packages divided by the number of days. (i.e. if I have 60 lbs of packages and 4 days to move them, I must move an average of 15 lbs of packages every day, so that's the lowest possible value that the answer could be)

- Calculate both of these possible lower bound values
 */

var shipWithinDays = function(weights, D) {

};
