/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    // if length is not same we can early exit this function
    if (s.length !== t.length) {
        return false;
    }
    
    
    // creating hash map to store the frequency
    let frequencyHashMap = {};

    
    
    for(var i = 0; i < s.length; i++) {
    
        
        frequencyHashMap[s[i]] = (frequencyHashMap[s[i]] || 0) + 1;
        console.log(frequencyHashMap[s[i]], ' Current Value Of S string');
        
        frequencyHashMap[t[i]] = (frequencyHashMap[t[i]] || 0) - 1; 
        
        console.log(frequencyHashMap[t[i]], ' Current Value of t string');
    }
    
    console.log('Computed Frequency Hash Map', frequencyHashMap);
    
    
    for (let character in frequencyHashMap) {
        if (frequencyHashMap[character] !== 0) {
            return false;
        }
        
        
       
    }
    
    
    
     return true;
    
    
};