// /An anagram is a word formed by rearranging the letters of a different word using all 
// the original letters exactly once. The function is given two strings: s - to search in, 
// p - a template word. Find the starting indexes of anagrams of p among substrings of the given s.
// Examples ==> function (p, s)
// findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"
// findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"
function findAnagrams(search, tempWord){
    // use an empty array to track
    let result = [];
    let searchLength = search.length;
    let tempWordLength = tempWord.length;
    // track if tempWord is longer than search, test case 3 solved
    if(tempWordLength > searchLength) return [];
    // sort tempWord in ABC order
    let tempWordSort= [...tempWord].sort().join('');
    // iterate through the string s, to get the anagram
    for (let i = 0; i <= searchLength - tempWordLength; i++){
      // establish the current anagram using slice, so that we can get only the number of characters in tempWord
      //.slice (start index, end index)
      let anagram = search.slice(i, i + tempWordLength);
      // sort existing anagram & compare with sorted template
      let sortAnagram = [...anagram].sort().join('');
      if(tempWordSort === sortAnagram){
        result.push(i);
      }
    }
    // return array
    return result;
  }
// create function while loop version
// function findAnagrams(search, tempWord){
//     //create something to store results;
//     let results = [];
//     // sort 2 strings alphabetically using .string
//     // .splice to separate everything
//     // .sort will put it in alphabetical order
//     let searchSort = search.split('').sort();
//     let tempWordSort = tempWord.split('').sort();
//     console.log(`searchSort = ${searchSort}`);
//     console.log(`tempWordSort = ${tempWordSort}`);
//     // if the two sorted strings matches enter itterate
//     let i = 0; // (let i = 0)
//     while(tempWordSort.length <= searchSort.length) //(for..(i<= xyz))
//     {
//         console.log("we are in the while loop");
//         //if it includes the tempwordsort
//         if(searchSort[i] = tempWordSort){
//             results += i;
//             console.log("i in if statement: " + i);
//         }
//         i++;
//     }
//     return results;
// }
// test cases
console.log("01 - test case " + findAnagrams("cbaebabacd", "abc"));// [0, 6];
console.log("02 - test case " + findAnagrams("abab", "ab")); // [0, 1, 2];
console.log("03 - test case " + findAnagrams('a', 'ab')); // [];
console.log("04 - test case " + findAnagrams('racecar', 'ace'));