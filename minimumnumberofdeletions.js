//Given a string S having lowercase english letters (a-z) returns a string woth no instances identical consecutive// 
//letters obtained from s by deleting from s by deleting the minimum number of letters //

function mindel(S){
S = S.toLowerCase();
let arr = S.split('');
let i =0;
for(let j=1 ; j<arr.length ; j++){
    if(arr[i] !== arr[j]){
        i++ ; 
        arr[i] = arr[j] ; 
    }
}
return arr.slice(0, i + 1).join('');
}
console.log(mindel("aabbccddeeff"));