/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let depth = 0;
    function helper(current, currDepth = 0) {
      if (!current) return;
      currDepth++;
      if (current.left === null && current.right === null) {
        if (depth === 0) depth = currDepth;
        else depth = currDepth < depth ? currDepth : depth;
      } else {
        if (current.left !== null)
          helper(current.left, currDepth);
        if (current.right !== null)
          helper(current.right, currDepth);
        currDepth--;
      }
    }
    helper(this.root);
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let depth = 0;
    function helper(current, currDepth = 0) {
      if (!current) return;
      currDepth++;
      if (current.left === null && current.right === null) {
        if (depth === 0) depth = currDepth;
        else depth = currDepth > depth ? currDepth : depth;
      } else {
        if (current.left !== null)
          helper(current.left, currDepth);
        if (current.right !== null)
          helper(current.right, currDepth);
        currDepth--;
      }
    }
    helper(this.root);
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxBest = 0
    function helper(current, maxLeft = 0, maxRight = 0) {
      if (!current) return 0;
      if (current.left !== null || current.right !== null) {
        maxLeft = current.left !== null ? helper(current.left) : 0;
        maxRight = current.right !== null ? helper(current.right) : 0;
      }
      let currSum = maxLeft + maxRight + current.val;
      maxBest = maxBest > currSum ? maxBest : currSum;
      return Math.max(maxLeft, maxRight) + current.val;;
    }
    helper(this.root)
    return maxBest;
  }

  // if (current.left === null && current.right === null) {
  //   return current.val;
  // } else {
  //   let maxLeft = current.left !== null ? helper(current.left) : 0;
  //   let maxRight = current.right !== null ? helper(current.right) : 0;
  //   return Math.max(maxLeft, maxRight) + current.val;
  // }
  // if (current.left === null && current.right === null) {
  //   return current.val;

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let currLow = null;
    function helper(current) {
      if (!current) return currLow;
      if (current.val > lowerBound) {
        currLow = currLow === null
          ? current.val : current.val < currLow
            ? current.val : currLow;
      }
      if (current.left !== null) helper(current.left);
      if (current.right !== null) helper(current.right);
    }
    helper(this.root)
    return currLow
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
