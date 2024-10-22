var kthLargestLevelSum = function(root, k) {
    if (!root) return -1;  // edge case, empty tree

    // Initialize a queue for level-order traversal
    let queue = [root];
    let levelSums = [];

    // Perform BFS
    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;
        
        // Process each node on the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelSum += node.val;

            // Add children to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Store the sum of the current level
        levelSums.push(levelSum);
    }

    // Sort the level sums in descending order
    levelSums.sort((a, b) => b - a);

    // Check if k is valid
    if (k > levelSums.length) return -1;  // k exceeds the number of levels
    
    // Return the kth largest sum (k-1 because array is 0-indexed)
    return levelSums[k - 1];
};
