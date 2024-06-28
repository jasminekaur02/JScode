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