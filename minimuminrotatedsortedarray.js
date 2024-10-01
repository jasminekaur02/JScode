/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // nums.sort((a,b) => a-b) ; 
    // return nums[0] ; 
    //if it is not rotated 
    let left = 0 ; 
    let right = nums.length - 1; 

    if(nums[left] <nums[right]){
        return nums[left] ; 
    }
    while (left < right){
        let mid = Math.floor((left+right)/2); 
        if(nums[mid] > nums[right]){
            left = mid+1 ; 
        }
        else 
        right = mid ; 
    }
    return nums[left] ; 
};