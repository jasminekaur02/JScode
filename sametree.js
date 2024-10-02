/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//  const inOrderTraversal = (node , result) =>{
//     if (node === null) return; 
//         inOrderTraversal (node.left , result);
//         result.push(node.val); 
//         inOrderTraversal (node.right , result);
    // }
    var isSameTree = function(p, q) {
        // const pValues =[] ; 
        // const qValues = [] ; 
    
        // inOrderTraversal (p , pValues ) ; 
        // inOrderTraversal(q , qValues ) ;
        // if(pValues.length !== qValues.length ){
        //     return false ; 
        // }
        // for(let i = 0 ; i< pValues.length ; i++){
        //     if(pValues[i]!==qValues[i]){
        //         return false ; 
        //     }
        // }
        // return true ;
    
        if(p=== null && q === null ){
            return true ; 
        }
        if(p === null || q=== null || p.val!==q.val){
            return false ; 
        }
        return isSameTree(p.left , q.left) && isSameTree(p.right , q.right) ;
    };