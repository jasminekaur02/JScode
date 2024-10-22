/**
 * @param {string} s
 * @return {number}
 */
 /**
 * @param {string} s
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    map = new Map() ; 
    let n = text1.length ; 
    let m = text2 .length ; 
    return lcs(text1, text2,n-1,m-1);
};
function lcs(text1 , text2 , i , j){
    if(i=== -1|| j === -1 ){
        return 0 ;
    }
    else{
        let key = i + '-'+j ; 
        if(!map.has(key)){
            if(text1.charAt(i)=== text2.charAt(j)){
                map.set(key , 1+lcs(text1 , text2 , i-1 , j-1));
            }
            else{
                map.set(key , Math.max(lcs(text1 ,text2 , i , j-1) , lcs(text1 , text2 , i-1 , j)));
            }
        }
        return map.get(key) ; 
    }
}
var longestPalindromeSubseq = function(s) {
    let sreverse = s.split('').reverse().join('');
    return longestCommonSubsequence(s,sreverse);
};
var minInsertions = function(s) {
    let lpslength = longestPalindromeSubseq(s) ;
    return s.length- lpslength ; 
};