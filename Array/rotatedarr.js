var rotate = function(nums, k) {
    let size = nums.length;
    if (k>size){
        k = k%size;
    }
    const rotated = nums.splice(size-k ,size);
    nums.unshift(...rotated);
    return nums;
};
//timecomplexity = O(n)