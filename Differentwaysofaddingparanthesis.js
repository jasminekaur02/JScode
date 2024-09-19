/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const memo = {};  // Memoization map to store results for sub-expressions
    
    function compute(expr) {
        // Check if result for the current expression is already memoized
        if (memo[expr] !== undefined) {
            return memo[expr];
        }
        
        // If the expression is just a number, return it
        if (!expr.includes('+') && !expr.includes('-') && !expr.includes('*')) {
            return [parseInt(expr)];
        }
        
        let results = [];
        
        // Divide and conquer approach
        for (let i = 0; i < expr.length; i++) {
            let char = expr[i];
            
            if (char === '+' || char === '-' || char === '*') {
                // Split into left and right sub-expressions
                let leftPart = compute(expr.substring(0, i));
                let rightPart = compute(expr.substring(i + 1));
                
                // Combine the results of left and right with the current operator
                for (let left of leftPart) {
                    for (let right of rightPart) {
                        if (char === '+') {
                            results.push(left + right);
                        } else if (char === '-') {
                            results.push(left - right);
                        } else if (char === '*') {
                            results.push(left * right);
                        }
                    }
                }
            }
        }
        
        // Memoize the results for this expression
        memo[expr] = results;
        return results;
    }
    
    return compute(expression);
};