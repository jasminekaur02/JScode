/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry = 0 ; 
    while (b!== 0){
        let sumWithoutCarry = a^b ;
        carry = (a&b) << 1 ;
        b = carry ; 
        a = sumWithoutCarry ;
    }
    return a ;
};