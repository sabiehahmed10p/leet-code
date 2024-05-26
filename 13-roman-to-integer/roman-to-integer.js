/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        const currentValue = romanMap[s[i]];
        const nextValue = romanMap[s[i+1]];
        
        if (nextValue && currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }
    return total;
};