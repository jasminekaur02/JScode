/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
   let maxproduct = nums[0] ; 
   let minproduct = nums[0] ; 
   let result = nums[0] ;

   for(let i = 1 ; i<nums.length ; i++){
    let current = nums[i]; 
    if(current < 0 ){
        [maxproduct, minproduct] = [minproduct , maxproduct ] ; 
    }
    maxproduct = Math.max(current , maxproduct*current ); 
    minproduct = Math.min(current , minproduct*current) ; 

    result = Math.max(result, maxproduct) ; 
   } 
   return result ;
};