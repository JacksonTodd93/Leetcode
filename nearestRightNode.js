/**
 * Definition for a binary tree node.
 *function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
* @param {TreeNode} root
 * @param {TreeNode} u
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/*
I - two inputs, a root node of a tree, and another node that is a descendant of the root node.
O - The nearest node on the same level of the tree as the target node that is to the right of the target node
C - all tree values will be unique. This is a binary tree.
E - examples are on leetcode page https://leetcode.com/problems/find-nearest-right-node-in-binary-tree/
edge cases - if the tree is just one node, return null. If no node exists on the same level to the right of our target node, return null

General plan:
Deal with edge case up front:
If the target node is the root node, return null
Traverse the tree, until I find my target node
Store the path that leads to that target node (e.g. ['left', 'right'])

Traverse the tree, looking for nodes that exist on the same level, traversal should be breadth-first, looking left to right, but never to the left of the target node


*/
var findNeartestRightNode = function (root, u) {
  if (root.val === u.val) {
    return null;
  }
  var findPath = function(parent, child) {
    var path = [];
    if (parent.left !== null) {
      
    }
  };
};
/*
*
Test case:
            1
          /    \
        2       3
         \     /  \
          4   5    6
 *
 */
var root = new TreeNode(1);
var child2 = new TreeNode(2);
root.left = child2;
var target = new TreeNode(4);
child2.right = target;
var child3 = new TreeNode(3);
root.right = child3;
child3.left = new TreeNode(5);
child3.left = new TreeNode(6);

console.log(findNearestRightNode(root, target)); // 5