/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (i, j, k) => {
        // If the word is completely matched
        if (k === word.length) return true;
        
        // Check boundaries and if the current cell matches the word[k]
        if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== word[k]) {
            return false;
        }
        
        // Temporarily mark the current cell as visited
        const temp = board[i][j];
        board[i][j] = '#';  // Mark as visited
        
        // Check all four directions
        const found = dfs(i + 1, j, k + 1) || // down
                      dfs(i - 1, j, k + 1) || // up
                      dfs(i, j + 1, k + 1) || // right
                      dfs(i, j - 1, k + 1);   // left
        
        // Restore the cell's original value
        board[i][j] = temp;
        
        return found;
    };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};
