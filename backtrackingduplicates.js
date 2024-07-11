function subsets(nums) {
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates
    let result = [];
    let temp = [];

    function recursivesubsets(nums, start) {
        result.push([...temp]);

        for (let i = start; i < nums.length; i++) {
            // Skip duplicates
            if (i > start && nums[i] === nums[i - 1]) continue;

            temp.push(nums[i]);
            recursivesubsets(nums, i + 1);
            temp.pop();
        }
    }

    recursivesubsets(nums, 0);
    return result;
}

console.log(subsets([1, 2, 2]));
