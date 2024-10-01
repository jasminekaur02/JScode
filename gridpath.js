/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let paths = Array.from({length :m} ,() =>Array(n).fill(0)); 
    let queue = [[0,0]] ;
   
    paths[0][0] = 1 ; 
    while(queue.length > 0 ){
       const [x,y] = queue.shift();
   
        if (y + 1 < n) {
               if (paths[x][y + 1] === 0) {  // Only push unvisited cells
                   queue.push([x, y + 1]);
               }
               paths[x][y + 1] += paths[x][y];
           }
   
        if (x + 1 < m) {
               if (paths[x + 1][y] === 0) {  // Only push unvisited cells
                   queue.push([x + 1, y]);
               }
               paths[x + 1][y] += paths[x][y];
           }
    } 
   
   return paths[m-1][n-1] ; 
   };