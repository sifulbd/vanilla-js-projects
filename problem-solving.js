function maxWordLength(word){
    let wordsplit = word.split(' ');
    var maxLength = 1;
    var maxWord = '';
    for(let i = 0; i < wordsplit.length; i++){
        if(wordsplit[i].length > maxLength) {
           maxWord = wordsplit[i];
           maxLength = wordsplit[i].length;

        }
    }
    return maxWord;    
}
console.log(maxWordLength('hello I am student if'));

function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));