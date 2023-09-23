/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var hashSet = new Set();
    var trimedAndLowerCase = new String(sentence).trim().toLowerCase();

    for (var i = 0; i < trimedAndLowerCase.length; i++) {
        var alphabet = trimedAndLowerCase[i];
        if(alphabet.match(/^[a-z]*$/g)){
            hashSet.add(alphabet);
        }
    }
    return hashSet.size === 26;
};