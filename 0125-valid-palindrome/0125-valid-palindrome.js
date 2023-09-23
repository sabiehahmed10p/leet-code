/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        
        while (start < end && !s[start].match(/^[a-zA-Z0-9]+$/i)) {
            start++;
        }
        
        
        while(start < end && !s[end].match(/^[a-zA-Z0-9]+$/i)) {
            end--;
        }
        
        
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        
        
        start++;
        end--;        
    }
    return true; 
};