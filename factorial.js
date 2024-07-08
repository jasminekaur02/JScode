//factorial
function factorial (n){
    if(n === 0){
        return 1 ; 
    }
    else return n*factorial(n-1);
}

//trailing numbers of zeroes 
function trailingZeroes(n){
    if(n === 0 )
        return 0;

let count = 0 ;
let powerofFive = 5;

while (n >= powerofFive){
    count += Math.floor(n / powerofFive)
    powerofFive *= 5 ;
}
return count;
}