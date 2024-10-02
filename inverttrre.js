/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isSymmetric(root) {
        if (!root) {
            return true; 
        }
        return this.isSymmetricUtil(root.left, root.right);
    }

    isSymmetricUtil(root1, root2) {
        if (root1 === null || root2 === null) {
            return root1 === root2; 
        }
        return (
            root1.val === root2.val && 
            this.isSymmetricUtil(root1.left, root2.right) && 
            this.isSymmetricUtil(root1.right, root2.left)
        );
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    // Swap the left and right children
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};
