var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) return 0;
    
    // Step 1: Sort intervals by their end time
    intervals.sort((a, b) => a[1] - b[1]);
    
    // Step 2: Initialize the count of non-overlapping intervals
    let nonOverlappingCount = 1;  // We count the first interval as non-overlapping
    let prevEnd = intervals[0][1];  // End time of the last added non-overlapping interval
    
    // Step 3: Iterate through the intervals to find overlaps
    for (let i = 1; i < intervals.length; i++) {
        let currStart = intervals[i][0];
        let currEnd = intervals[i][1];
        
        // If the current interval does not overlap with the previous one
        if (currStart >= prevEnd) {
            nonOverlappingCount++;
            prevEnd = currEnd;  // Update the end time of the last non-overlapping interval
        }
    }
    
    // Step 4: Calculate the number of intervals to remove
    return intervals.length - nonOverlappingCount;
};
