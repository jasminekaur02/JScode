/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0, r= 0 ;
    let maxcount = 0 ; 
    let dict = {};
    for(r=0 ; r<s.length ; r++){
        dict[s[r]] = dict[s[r]]+1 || 1 ; 
        maxcount =  Math.max(dict[s[r]] , maxcount ); 
        if(r-l+1-maxcount > k){
            dict[s[l]]--;
            l++;
        }

    }
    return r-l ;
};