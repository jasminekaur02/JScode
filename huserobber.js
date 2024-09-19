var rob = function(nums) {
    if(nums.length === 0 ) return 0 ;
    if (nums.length ===1 ) return nums[0];
    // let even_sum = 0 ; 
    // let odd_sum = 0 ; 
    let prev2 = 0 ; 
    let prev1 = 0 ; 
    for (let i = 0 ; i < nums.length ; i++){
        // if(i%2 === 0 ){
        //     even_sum += nums[i];
        // }
        // else{
        //     odd_sum += nums[i];
        // }

        let current = Math.max(prev1 , prev2+nums[i]);
        prev2 = prev1;
        prev1 = current ;
    }
    return prev1;
};