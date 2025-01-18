/*

An anagram is a word formed by rearranging the letters of a different word 
using all the original letters exactly once. The function is given two 
strings: s - to search in, p - a template word. Find the starting indexes of 
anagrams of p among substrings of the given s.

Examples
findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"

findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"

Pseudocode
// use an empty array to track
// track if p is longer than s
// sort things (template string - p) in ABC order
// iterate through the string s
    // pull on the current window
    // sort existing window & compare with sorted template
// return array

*/

function findAnagrams(s, p){
    // use an empty array to track
    const result = [];
    const pLength = p.length;
    const sLength = s.length;
    
    // track if p is longer than s
    if(pLength > sLength) return [];
    
    // sort things (template string - p) in ABC order
    const sortP = [...p].sort().join('');
    
    // iterate through the string s
    for (let i = 0; i <= sLength - pLength; i++){
      // establish the current window
      const window = s.slice(i, i + pLength);
     
      // sort existing window & compare with sorted template
      const sortWindow = [...window].sort().join('');
      console.log(sortWindow)
      if(sortP === sortWindow){
        result.push(i);
      }
    }
    // return array
    return result;
  }
  
  console.log(findAnagrams("cbaebabacd", "bac"));// [0, 6];
  // console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
  // console.log(findAnagrams('a', 'ab')); // [];
  // console.log(findAnagrams('racecar', 'ace')); 