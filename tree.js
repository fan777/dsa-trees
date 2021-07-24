/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0
    function helper(current) {
      if (!current) return;
      sum += current.val;
      if (current.children.length > 0) {
        for (let child of current.children) {
          helper(child)
        }
      }
    }
    helper(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0
    function helper(current) {
      if (!current) return;
      if (current.val % 2 === 0) count++;
      if (current.children.length > 0) {
        for (let child of current.children) {
          helper(child)
        }
      }
    }
    helper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    function helper(current) {
      if (!current) return;
      if (current.val > lowerBound) count++;
      if (current.children.length > 0) {
        for (let child of current.children) {
          helper(child)
        }
      }
    }
    helper(this.root)
    return count;
  }
}

module.exports = { Tree, TreeNode };
