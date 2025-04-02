class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  function isValidSubtree(node, min, max) {
    if (!node) {
      return true;
    }

    if (
      (min !== null && node.value <= min) ||
      (max !== null && node.value >= max)
    ) {
      return false;
    }

    return (
      isValidSubtree(node.left, min, node.value) &&
      isValidSubtree(node.right, node.value, max)
    );
  }

  return isValidSubtree(root, null, null);
}

module.exports = { Node, isValidBST };
