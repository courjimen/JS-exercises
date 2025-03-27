/*
Return the length of the longest word in the provided sentence.
Your output should be a number.

Examples:
findLongestWordLength("The quick brown fox jumped over the lazy dog") ---> 6
findLongestWordLength("May the force be with you") ---> 5
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") ---> 19

*variable to hold length (biggest word) let longest = 2;
-> wordLength > longest

-> check each word : array using split(" ") <- ["the", "quick"...]
-> grab each word: for loop
  -> count # of letters: .length (to the end of arr)
  -> *track biggest word to compare to the remaining words 
-> as we iterate through words the word w/biggest # should replace the prev:  
-> return longest word length (number)
*/

const findLongestWordLength = (str) => {
    const wordArr = str.split(" "); // ["the", "quick"...]
    let longest = 0;
    for(let i = 0; i<wordArr.length; i++) {
        const word = wordArr[i]; // 
       if (word.length > longest){ 
        longest = word.length
       }
    } 
    return longest
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) // ---> 6
console.log(findLongestWordLength("May the force be with you")) // ---> 5
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))//---> 19
