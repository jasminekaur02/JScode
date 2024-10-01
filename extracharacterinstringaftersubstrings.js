/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const wordSet = new Set(dictionary);
    const n = s.length;

    const dp  = new Array(n+1).fill(Infinity);
    dp[0] = 0 ; 
    for(let i = 1 ; i <= n ; i++ ){
        dp[i] = dp[i-1] + 1 ; 
        for (let j = 0 ; j< i ; j++){
            const substring = s.slice(j,i);
                if (wordSet.has(substring)){
                    dp[i] = Math.min(dp[i] , dp[j]);
                }
        } 
    }
    return dp[n] ; 
};