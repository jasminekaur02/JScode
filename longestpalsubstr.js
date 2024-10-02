/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // if (s.length < 2) return s; // If the string is too short, return it directly

    // let maxPalindrome = ""; // To store the longest palindrome found
    // let maxLength = 0; // Track the length of the longest palindrome
    
    // // Helper function to check if a string is a palindrome
    // const isPalindrome = (str) => {
    //     return str === str.split('').reverse().join('');
    // };

    // // Two pointer approach
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i; j < s.length; j++) {
    //         let substring = s.slice(i, j + 1); // Get the substring from i to j
            
    //         // Check if the substring is a palindrome
    //         if (isPalindrome(substring)) {
    //             // If it's a palindrome and its length is greater than the current longest one
    //             if (substring.length > maxLength) {
    //                 maxLength = substring.length; // Update max length
    //                 maxPalindrome = substring; // Update the longest palindrome
    //             }
    //         }
    //     }
    // }

    // return maxPalindrome; // Return the longest palindrome found

    let longest = "" ; 
    function isPal(s , left , right ){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left-- ; 
            right++ ; 
        }
        return s.slice(left+1 , right);
    }
    for(let i = 0 ; i<s.length ; i++){
        let oddPal = isPal(s,i,i); 
        let evenPal = isPal(s,i,i+1);

        let longestPal = oddPal.length > evenPal.length ? oddPal:evenPal ; 
        if(longestPal.length > longest.length){
            longest = longestPal ; 
        }
    }
    return longest ; 
};
