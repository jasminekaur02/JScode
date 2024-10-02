/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set ; 
    let maxlength = 0 ; 
    let left = 0 ; 
    for(let right = 0 ; right < s.length ; right ++){
        while(charSet.has(s[right])){
            charSet.delete(s[left]) ; 
            left++ ;
        }
        charSet.add(s[right]); 
        maxlength = Math.max(maxlength , right-left+1);
    }
    return maxlength ; 
};