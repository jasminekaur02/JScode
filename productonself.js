/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length ; 
    const answer = new Array(n).fill(1);

    //left product 
    let leftproduct = 1 ;
    for(let i = 0 ; i< n ; i++){
        answer [i] = leftproduct ; 
        leftproduct *= nums[i] ; 
    }
    //right product 
    let rightproduct = 1 ; 
    for(let i = n-1 ; i>=0 ; i--){
        answer[i] *= rightproduct ; 
        rightproduct *= nums[i] ; 
    }
return answer ; 
};