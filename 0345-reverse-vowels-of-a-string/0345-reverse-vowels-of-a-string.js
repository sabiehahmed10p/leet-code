 var vowels = "aeiouAEIOU";

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    
    let first = 0;
    let last = s.length - 1;
    
    
    let arrayOfString = s.split("");
    
    
    while (first < last) {
        
        
         while(first < last && vowels.indexOf(arrayOfString[first]) === -1 ) {
             first++;
        }
         
         
         while(first < last && vowels.indexOf(arrayOfString[last]) === -1) {
             last--;
        }
        
        
        
        //swapping the values of both first and last are vowels
        
        [arrayOfString[first], arrayOfString[last]] = [arrayOfString[last], arrayOfString[first]];
        
        first++;
        last--;
    }
    
    return arrayOfString.join("");
    
};