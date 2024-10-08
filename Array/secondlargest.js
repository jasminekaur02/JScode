function secondlargest(arr){
    const uniqueArr = Array.from(newset(arr));
    uniqueArr.sort((a,b) => {
        return b-a;
    });
    if(uniqueArr.length >=2){
        return uniqueArr[1];
    }
    else{
        return -1;
    }
}

//optimized approach
function secondLargestoptimised(){
    let largest = Number.NEGATIVE_INFINITY;
    let secondlargest = Number.NEGATIVE_INFINITY;
    for(i=0; i<arr.length ; i++){
        if(arr[i]> largest){
            secondlargest = largest;
            largest = arr[i];
        }
        else if (arr[i]!= largest && arr[i]>secondlargest){
            secondlargest = arr[i];
        }
    }
}