/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * I - two nodes, each of which is the head of a linked list
 * O - a new linked list, containing all elements of both input lists, still in sorted order
 * C - O(l1.length + l2.length)
 * E - Input: l1 = [1,2,4], l2 = [1,3,4]
       Output: [1,1,2,3,4,4]
       If both lists are empty, return a node with no value and no next

establish my return node
while both lists have next node
Look at the value of each node
The smaller of the two values will become the value of a new node in my return
whichever list was used, go to the next node in that list
after one of the lists hits the end, I want to then add all the remaining values in the other list, no comparison is required at this point
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if(!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }
  let head = new ListNode();
  let tail = head;
  while (l1 !=null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.val = l1.val;
      l1 = l1.next;
    } else {
      tail.val = l2.val;
      l2 = l2.next;
    }
    tail.next = new ListNode();
    tail = tail.next;
  }
  while (l1 !== null) {
    tail.val = l1.val;
    if (l1.next !== null) {
      tail.next = new ListNode();
      tail = tail.next;
    }
    l1 = l1.next;
  }
  while (l2 !== null) {
    tail.val = l2.val;
    if (l2.next !== null) {
      tail.next = new ListNode();
      tail = tail.next;
    }
    l2 = l2.next;
  }
  return head;
};

/**
Runtime: 92 ms, faster than 48.38% of JavaScript online submissions
Memory Usage: 40.7 MB, less than 6.88% of JavaScript online submissions
 */