/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(!s || s[0] =='0'){
        return 0 ;
    }
    let n = s.length ; 
    let dp = new Array(n+1).fill(0); 

    dp[0] = 1 ; 
    dp[1] = 1 ; 
    for(i = 2 ; i <= n ; i++){
        let singledigit = parseInt(s.substr(i-1 , 1));
        let doubledigit = parseInt(s.substr(i-2 , 2));

        if(singledigit >= 1 && singledigit <=9){
            dp[i] += dp[i-1];
        }
       if(doubledigit >=10 && doubledigit <=26){
            dp[i] += dp[i-2];
        }
    }
return dp[n] ; 

};