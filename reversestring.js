//reverse the string using recursion 

function reversestring(str){
    if(str === ""){
        return "";
    }
    else return reversestring(str.substr(1)) + str.charAt(0);
}
console.log(reversestring("hello"));

///second approach 
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Define a recursive helper function with pointers
    function reverseHelper(left, right) {
        if (left >= right) {
            return;
        }
        // Swap characters at left and right pointers
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Recurse with updated pointers
        reverseHelper(left + 1, right - 1);
    }
    
    // Start the recursion with pointers at the ends of the array
    reverseHelper(0, s.length - 1);
};

// Example usage:
let s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // Output: ["o","l","l","e","h"]

let s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.log(s2); // Output: ["h","a","n","n","a","H"]
