//number palindrome
const isPalindrome = function(x){

return x<0 ? false : x === +x.toString().split("").reverse().join("");//converting number to the string spliting it reversing it and joining it
};
const res = isPalindrome(121);
console.log(res);
 isPalindrome();

 //string palindrome
 var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');//converting upper case to lower case and removing all alphanumeric 
    return s === s.split("").reverse().join("");//spliting string into array , reversing it and join it 
};

//fibonaci number 
var fib = function(n){
    const arr [0 , 1]; 
    for (i = 2 ; i <= n ; i++){
        arr.push(arr[i-1]+ arr[i-2]);
    }
    return arr[n];
}

//fibonacci number with the recursion 
const fib = function (n){
    if(n<=1){
        return n ;
    }
    else{
        return fib(n-1)+ fib (n-2);
    }
}