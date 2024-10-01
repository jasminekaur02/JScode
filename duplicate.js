/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0 ; i<= nums.length ; i++){
        for (let j = i+1 ; j <= nums.length ; j++){
            if(nums[i] === nums[j]  ){
                return true ; 
            }
          
        }
    }
     return false ; 
};
//brute force solution 
// optimized approach 
//lets use two pointer approach ssince time limit exceeded
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b );
         for (let i = 0 ; i <= nums.length-1 ; i++){
             if(nums[i] === nums[i+1]  ){
                 return true ; 
             }
           
         }
     
      return false ; 
 };