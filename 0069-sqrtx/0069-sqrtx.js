/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    //Handles base case if x is less than 2 then we return x because sqrt of 1 is 1 and 0 is 0
    if (x < 2) return x;
    
    
    let leftPointer = 2;
    let rightPointer = Math.floor(x / 2);
    
    
    let pivot;
    let num;
    
    while (leftPointer <= rightPointer) { // binary search
        
        pivot = Math.floor(leftPointer + (rightPointer - leftPointer) / 2);
        
        num = pivot * pivot;
        
        if (num > x) { // if num is greater than x it means pivot is too large,
            rightPointer = pivot - 1;
        } else if (num < x) { // if num is smaller than x it means pivot is too small,
            leftPointer = pivot + 1;
        } else if (num === x) {
            return pivot;
        }   
    }
    return rightPointer;
};