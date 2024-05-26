/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    //base case if empty array return ''
    if (!strs.length) return ""
    
    let prefix = strs[0];
    
    for (let i = 0; i < strs.length; i++) {
        
        
        const currentString = strs[i];
        
        let j = 0;
        
        while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
            j++;
        }
        
        prefix = prefix.substring(0, j);
        
        if (!prefix.length) return ""
    }
    return prefix;
};