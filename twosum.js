const twoSum = function (nums , target ){
    var obj = {};
    for (i = 0; i< nums.length ; i++){
        var n = nums[i];
        if (obj[target -n] >= 0){
            return [obj[target-n],i];
        }
        else {
            obj[n]= i;
        }
    }
};