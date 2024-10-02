/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


class treeNode{
    constructor(val){
        this.val = val ; 
        this.left = null ;
        this.right = null ; 
    }
 }
var maxPathSum = function(root) {
    let maxSum = -Infinity ; 
    const maxGain = function(node){
        if(node === null){
            return 0 ; 
        }
        const leftgain = Math.max(maxGain(node.left) , 0 );
        const rightgain = Math.max(maxGain(node.right) , 0 ) ; 

        const currentpathsum = node.val +leftgain + rightgain ; 

        maxSum = Math.max(maxSum , currentpathsum) ; 

        return node.val+Math.max(leftgain , rightgain) ; 
    }
    maxGain(root) ; 
    return maxSum  ; 
};