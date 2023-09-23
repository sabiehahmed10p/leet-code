class Solution {
    shortestDistance(words, word1, word2) {
     let positionOne = -1;
     let positionTwo = -1;
     let shortestDistance = words.length;
  
     for (var i = 0; i < words.length; i++) {
        if (words[i] === word1) positionOne = i;
        if(words[i] === word2) positionTwo = i;
  
        if (positionOne !== -1 && positionTwo !== -1) {
          shortestDistance = Math.min(shortestDistance, Math.abs(positionTwo - positionOne))
        }
  
     }
      return shortestDistance;
    }
  }


  // In case of circular array we can use 
//  right = (right + 1) % n  (Increment)
//  left = (left - 1 + n) % n (Decrement)
  