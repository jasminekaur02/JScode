function subsets (nums){
    let result = [];
    let temp = [];
    function recursivesubsets (nums , i){
if(i === nums.length){
    return result.push([...temp]);
}
temp.push(nums[i]);
recursivesubsets(nums , i+1);
temp.pop();
recursivesubsets(nums , i+1);
    }
    recursivesubsets(nums , 0);
    return result ;
}
console.log(subsets([1,2,3]));