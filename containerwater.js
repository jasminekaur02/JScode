/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0  ; 
    let right = height.length-1 ; 
    let ans = 0 ; 
    while(left < right ){
       let lengthofcontainer = Math.min(height[left] , height[right]) ; 
       let widthofcontainer = right - left ; 
       let area = widthofcontainer*lengthofcontainer ; 
   
       if(area > ans){
           ans = area ; 
       }
       if(height[left] < height[right]){
           left++ ;
       }
       else right -- ; 
    }
    return ans ; 
   };