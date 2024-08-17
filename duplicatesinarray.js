/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicates = [];
    
    nums.sort((a, b) => a - b); // Sort the array to bring duplicates next to each other
    
    let i = 0; // The constant pointer
    
    for (let j = 1; j < nums.length; j++) { // The moving pointer
        if (nums[i] === nums[j]) {
            duplicates.push(nums[i]);
            // Move `i` to skip over duplicates
            while (j < nums.length && nums[i] === nums[j]) {
                j++;
            }
        }
        i = j; // Move the constant pointer `i` to the new `j` position
    }
    
    return duplicates;
};
