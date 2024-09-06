//  /**
//   * @param {number[]} height
//   * @return {number}
//   */
// var trap = function(height) {
//     // Edge case: if the array has less than 3 elements, no water can be trapped
//     if (height.length < 3) return 0;
//     let left = 0 ; 
//     let right = height.length-1 ; 
//     let leftMax = 0 ; 
//     let rightMax = 0 ; 
//     let waterTrapped = 0;  // Total water trapped

// while(left < right){
// if (height[left] <= height[right]){
//     if(height[left] >= leftMax){
//         leftMax = height[left] ;
//     }
//     else {
//             waterTrapped += leftMax - height[left];
//         }
//         left++ ; 
//           }
//           else{
//             if(height[right] >= rightMax){
//         rightMax = height[right] ;
//             }
//         else {
//             waterTrapped += rightMax - height[right];
//         }
//         right--;
//           }
// }
// return waterTrapped;
// }
    

// //     for (let i = 1; i < height.length - 1; i++) {
// //         // Find the maximum height to the left of the current block
// //         let leftMax = Math.max(...height.slice(0, i));

// //         // Find the maximum height to the right of the current block
// //         let rightMax = Math.max(...height.slice(i + 1));

// //         // Calculate the minimum of the left and right max heights
// //         let minHeight = Math.min(leftMax, rightMax);

// //         // If the current height is less than the minimum height, water can be trapped
// //         if (height[i] < minHeight) {
// //             waterTrapped += minHeight - height[i];
// //         }
// //     }

// //     return waterTrapped;  // Return the total amount of trapped water
// // };
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = []; // Stack to store the indices of the bars
    let waterTrapped = 0; // Total water trapped
    let current = 0; // Current index in the height array

    while (current < height.length) {
        // While stack is not empty and current height is greater than the height at the top of the stack
        while (stack.length > 0 && height[current] > height[stack[stack.length - 1]]) {
            let top = stack.pop(); // Pop the top element from the stack

            // If the stack is empty, break out of the loop
            if (stack.length === 0) {
                break;
            }

            // Calculate the distance between the current element and the new top of the stack
            let distance = current - stack[stack.length - 1] - 1;

            // Calculate the bounded height (minimum height of the two walls minus the height of the bottom)
            let boundedHeight = Math.min(height[current], height[stack[stack.length - 1]]) - height[top];

            // Add the trapped water for this segment to the total
            waterTrapped += distance * boundedHeight;
        }

        // Push the current index onto the stack
        stack.push(current);

        // Move to the next bar
        current++;
    }

    return waterTrapped; // Return the total amount of trapped water
};

