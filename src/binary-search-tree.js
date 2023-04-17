const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  test(){
    console.log('test')
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addIn(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addIn(node.left, value);
      } else {
        node.right = addIn(node.right, value);
      }

      return node;
    }

    this.treeRoot = addIn(this.treeRoot, data);
  }

  has(data) {
    function search(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return search(node.left, value);
      } else {
        return search(node.right, value);
      }
    }

    return search(this.treeRoot, data);
  }

  find(data) {
    function search(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return search(node.left, value);
      } else {
        return search(node.right, value);
      }
    }

    return search(this.treeRoot, data);
  }

  remove(data) {
    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if(value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }

    return removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
