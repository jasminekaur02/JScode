/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const numStrs = nums.map(num => num.toString());
      
      // Custom comparison function
      const compare = (a, b) => {
          return (b + a).localeCompare(a + b);
      };
  
      // Sort the array using the custom comparison function
      numStrs.sort(compare);
  
      // Join the sorted array into a single string
      let result = numStrs.join('');
      
      // Handle edge case: if result starts with '0', return '0'
      if (result[0] === '0') {
          return '0';
      }
      
      return result;  
  };